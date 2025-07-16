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
  settings?: Array<{
    keyName: string;
    value: string;
    public: boolean;
  }>;
}

interface UserChurch {
  church: Church;
  jwt: string;
}

interface LoginResponse {
  user: any;
  userChurches: UserChurch[];
}

type FormMode = 'login' | 'register' | 'forgot';

const Login: React.FC = () => {
  const [formMode, setFormMode] = useState<FormMode>('login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
        if (data.userChurches && data.userChurches.length > 0) {
          setChurches(data.userChurches);
          if (data.userChurches.length === 1) {
            handleChurchSelection(data.userChurches[0]);
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
        if (data.userChurches && data.userChurches.length > 0) {
          setChurches(data.userChurches);
          if (data.userChurches.length === 1) {
            handleChurchSelection(data.userChurches[0]);
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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://membershipapi.churchapps.org/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          appName: "B1"
        }),
      });

      if (response.ok) {
        const data: LoginResponse = await response.json();
        if (data.userChurches && data.userChurches.length > 0) {
          setChurches(data.userChurches);
          if (data.userChurches.length === 1) {
            handleChurchSelection(data.userChurches[0]);
          } else {
            setShowChurchModal(true);
          }
        } else {
          setSuccess("Account created successfully! Please log in.");
          setFormMode('login');
          resetForm();
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://membershipapi.churchapps.org/users/requestPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          appName: "B1"
        }),
      });

      if (response.ok) {
        setSuccess("Password reset instructions have been sent to your email.");
        setFormMode('login');
        resetForm();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to send reset email. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setError("");
    setSuccess("");
  };

  const switchMode = (mode: FormMode) => {
    setFormMode(mode);
    resetForm();
  };

  const handleChurchSelection = (userChurch: UserChurch) => {
    const redirectUrl = `https://${userChurch.church.subDomain}.b1.church/`;
    window.location.href = redirectUrl;
  };

  const getChurchLogo = (church: Church) => {
    if (church.settings) {
      const logoLight = church.settings.find(s => s.keyName === 'logoLight');
      const logoDark = church.settings.find(s => s.keyName === 'logoDark');
      return logoLight?.value || logoDark?.value || null;
    }
    return null;
  };

  if (showChurchModal) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Dialog open={showChurchModal} onOpenChange={() => {}}>
          <DialogContent className="sm:max-w-md max-h-[80vh] bg-white border-gray-200">
            <DialogHeader>
              <DialogTitle>Select Your Church</DialogTitle>
              <DialogDescription className="text-gray-700">
                Choose which church you'd like to access:
              </DialogDescription>
            </DialogHeader>
            <div className="max-h-96 overflow-y-auto space-y-2 pr-2">
              {churches.map((userChurch) => {
                const logo = getChurchLogo(userChurch.church);
                const churchName = userChurch.church?.name || 'Unknown Church';
                const churchId = userChurch.church?.id || Math.random().toString();
                
                return (
                  <Button
                    key={churchId}
                    variant="outline"
                    className="w-full justify-start h-auto p-4 text-left"
                    onClick={() => handleChurchSelection(userChurch)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      {logo ? (
                        <img 
                          src={logo} 
                          alt={`${churchName} logo`}
                          className="w-8 h-8 object-contain flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-semibold text-gray-800">
                            {churchName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span className="flex-1 text-sm text-gray-800">{churchName}</span>
                    </div>
                  </Button>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  const getFormTitle = () => {
    switch (formMode) {
      case 'register': return 'Create Account';
      case 'forgot': return 'Reset Password';
      default: return 'Sign In';
    }
  };

  const getFormDescription = () => {
    switch (formMode) {
      case 'register': return 'Create a new account to access your church';
      case 'forgot': return 'Enter your email to receive password reset instructions';
      default: return 'Enter your email and password to access your church';
    }
  };

  const renderForm = () => {
    if (formMode === 'login') {
      return (
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              className="bg-white border-gray-300 focus:border-blue-500"
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
              className="bg-white border-gray-300 focus:border-blue-500"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          <div className="text-center space-y-2">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => switchMode('forgot')}
            >
              Forgot your password?
            </button>
            <div className="text-sm text-gray-800">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => switchMode('register')}
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      );
    }

    if (formMode === 'register') {
      return (
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isLoading}
              required
              className="bg-white border-gray-300 focus:border-blue-500"
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={isLoading}
              required
              className="bg-white border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              className="bg-white border-gray-300 focus:border-blue-500"
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
              className="bg-white border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
              required
              className="bg-white border-gray-300 focus:border-blue-500"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => switchMode('login')}
            >
              Already have an account? Sign in
            </button>
          </div>
        </form>
      );
    }

    if (formMode === 'forgot') {
      return (
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              className="bg-white border-gray-300 focus:border-blue-500"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Email"}
          </Button>
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => switchMode('login')}
            >
              Back to sign in
            </button>
          </div>
        </form>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white border-gray-200 shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <img 
              src="/images/logo-login.png" 
              alt="B1 Church Logo" 
              className="h-16 mx-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold">{getFormTitle()}</CardTitle>
          <CardDescription className="text-gray-700">
            {getFormDescription()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert className="mb-4">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          {renderForm()}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;