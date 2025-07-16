import React, { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import UserContext from "@/context/UserContext";

interface Church {
  id: string;
  name: string;
  subDomain: string;
}

interface UserChurch {
  church: Church;
  jwt: string;
}

interface LoginResponse {
  user: any;
  churches: UserChurch[];
}

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [churches, setChurches] = useState<UserChurch[]>([]);
  const [showChurchModal, setShowChurchModal] = useState(false);
  const context = useContext(UserContext);

  const search = new URLSearchParams(window.location?.search);
  const jwtParam = search.get("jwt");
  const authParam = search.get("auth");

  useEffect(() => {
    if (jwtParam && authParam) {
      handleExistingAuth(jwtParam, authParam);
    }
  }, [jwtParam, authParam]);

  const handleExistingAuth = async (jwt: string, auth: string) => {
    try {
      setIsLoading(true);
      const response = await fetch("https://membershipapi.churchapps.org/users/verifyCredentials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwt}`
        }
      });

      if (response.ok) {
        const data: LoginResponse = await response.json();
        if (data.churches && data.churches.length > 0) {
          setChurches(data.churches);
          if (data.churches.length === 1) {
            handleChurchSelection(data.churches[0]);
          } else {
            setShowChurchModal(true);
          }
        }
      }
    } catch (err) {
      setError("Authentication failed. Please try logging in again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://membershipapi.churchapps.org/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          appName: "B1"
        }),
      });

      if (response.ok) {
        const data: LoginResponse = await response.json();
        if (data.churches && data.churches.length > 0) {
          setChurches(data.churches);
          if (data.churches.length === 1) {
            handleChurchSelection(data.churches[0]);
          } else {
            setShowChurchModal(true);
          }
        } else {
          setError("No churches found for this account.");
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChurchSelection = (userChurch: UserChurch) => {
    const redirectUrl = `https://${userChurch.church.subDomain}.b1.church/`;
    window.location.href = redirectUrl;
  };

  if (showChurchModal) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Dialog open={showChurchModal} onOpenChange={() => {}}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Select Your Church</DialogTitle>
              <DialogDescription>
                Choose which church you'd like to access:
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              {churches.map((userChurch) => (
                <Button
                  key={userChurch.church.id}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleChurchSelection(userChurch)}
                >
                  {userChurch.church.name}
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <img 
              src="/images/logo-login.png" 
              alt="B1 Church Logo" 
              className="h-16 mx-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your email and password to access your church
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;