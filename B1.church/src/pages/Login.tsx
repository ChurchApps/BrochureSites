import React, { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Search, LogOut } from "lucide-react";
import UserContext from "@/context/UserContext";

interface Church {
  id: string;
  name: string;
  subDomain: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
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

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

type FormMode = 'login' | 'register' | 'forgot' | 'setPassword' | 'selectChurch';

const Login: React.FC = () => {
  const [formMode, setFormMode] = useState<FormMode>('login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [churches, setChurches] = useState<UserChurch[]>([]);
  const [showChurchModal, setShowChurchModal] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [linkExpired, setLinkExpired] = useState(false);
  
  // Church search and creation
  const [searchResults, setSearchResults] = useState<Church[]>([]);
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showRegisterChurch, setShowRegisterChurch] = useState(false);
  const [newChurch, setNewChurch] = useState<Partial<Church>>({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });

  const context = useContext(UserContext);
  const search = new URLSearchParams(window.location?.search);
  const jwtParam = search.get("jwt");
  const authParam = search.get("auth");
  const timestampParam = search.get("timestamp");

  useEffect(() => {
    if (authParam) {
      // Check for timestamp and link expiration (10 minutes)
      if (timestampParam) {
        const linkTimestamp = parseInt(timestampParam, 10);
        const currentTime = Date.now();
        if (currentTime - linkTimestamp > 600000) {
          setLinkExpired(true);
          setFormMode('setPassword');
        } else {
          loadUserFromAuth();
        }
      } else {
        setLinkExpired(true);
        setFormMode('setPassword');
      }
    } else if (jwtParam) {
      handleExistingAuth(jwtParam, authParam);
    }
  }, [jwtParam, authParam, timestampParam]);

  const loadUserFromAuth = async () => {
    try {
      const response = await fetch("https://membershipapi.churchapps.org/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ authGuid: authParam }),
      });

      if (response.ok) {
        const data: LoginResponse = await response.json();
        if (data.user) {
          setUser(data.user);
          setFormMode('setPassword');
        } else {
          setFormMode('forgot');
        }
      } else {
        setFormMode('forgot');
      }
    } catch (err) {
      setFormMode('forgot');
    }
  };

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
            setFormMode('selectChurch');
          }
        }
      }
    } catch (err) {
      setError("Authentication failed. Please try logging in again.");
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email: string) => (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email));

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
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
            setFormMode('selectChurch');
          }
        } else {
          // No churches found - show the church selection modal with search
          setChurches([]);
          setShowChurchModal(true);
          setFormMode('selectChurch');
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

  const handleSetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (linkExpired) {
      window.open("/login", "_blank");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== verifyPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://membershipapi.churchapps.org/users/setPasswordGuid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authGuid: authParam,
          newPassword: password,
          appName: "B1",
          appUrl: window.location.origin
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Auto-login after password set
          const tempEmail = user?.email || "";
          const tempPassword = password;
          
          // Call login API directly without validation
          const loginResponse = await fetch("https://membershipapi.churchapps.org/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: tempEmail,
              password: tempPassword,
              appName: "B1"
            }),
          });

          if (loginResponse.ok) {
            const loginData: LoginResponse = await loginResponse.json();
            if (loginData.userChurches && loginData.userChurches.length > 0) {
              setChurches(loginData.userChurches);
              if (loginData.userChurches.length === 1) {
                handleChurchSelection(loginData.userChurches[0]);
              } else {
                setShowChurchModal(true);
                setFormMode('selectChurch');
              }
            } else {
              // No churches found - show the church selection modal with search
              setChurches([]);
              setShowChurchModal(true);
              setFormMode('selectChurch');
            }
          } else {
            setError("Login failed after password set.");
          }
        } else {
          setFormMode('forgot');
        }
      } else {
        setFormMode('forgot');
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email?.trim()) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!firstName?.trim()) {
      setError("Please enter your first name.");
      return;
    }
    if (!lastName?.trim()) {
      setError("Please enter your last name.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://membershipapi.churchapps.org/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          appName: "B1",
          appUrl: window.location.origin
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors[0] || "Registration failed. Please try again.");
        } else {
          setRegistered(true);
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

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://membershipapi.churchapps.org/users/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email
        }),
      });

      const data = await response.json();
      
      if (response.ok && data.emailed) {
        setSuccess("Password reset instructions have been sent to your email.");
        setEmail("");
      } else {
        setError("We could not find an account with this email address.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Forgot password error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const searchChurches = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchText.trim()) return;

    try {
      const response = await fetch("https://membershipapi.churchapps.org/churches/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: searchText.trim() }),
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      }
    } catch (err) {
      setError("Error searching churches.");
    }
  };

  const suggestSubDomain = (name: string) => {
    return name.toLowerCase().replaceAll("christian", "").replaceAll("church", "").replaceAll(" ", "");
  };

  const handleRegisterChurch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newChurch.name?.trim() || !newChurch.address1?.trim() || !newChurch.city?.trim() || 
        !newChurch.state?.trim() || !newChurch.zip?.trim() || !newChurch.country?.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const churchData = {
        ...newChurch,
        appName: "B1",
        subDomain: newChurch.subDomain || suggestSubDomain(newChurch.name)
      };

      const response = await fetch("https://membershipapi.churchapps.org/churches/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(churchData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors[0] || "Failed to register church.");
        } else {
          handleChurchSelection({ church: data, jwt: "" });
        }
      } else {
        setError("Failed to register church. Please try again.");
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
    setVerifyPassword("");
    setFirstName("");
    setLastName("");
    setError("");
    setSuccess("");
    setRegistered(false);
    setSearchText("");
    setSearchResults([]);
    setShowSearch(false);
    setShowRegisterChurch(false);
    setNewChurch({
      name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    });
  };

  const switchMode = (mode: FormMode) => {
    setFormMode(mode);
    resetForm();
  };

  const handleChurchSelection = (userChurch: UserChurch) => {
    const redirectUrl = `https://${userChurch.church.subDomain}.b1.church/login?jwt=${userChurch.jwt}`;
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

  // Church Selection Modal
  if (formMode === 'selectChurch' && showChurchModal) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Dialog open={showChurchModal} onOpenChange={() => {}}>
          <DialogContent className="sm:max-w-lg max-h-[80vh] bg-white border-gray-200">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <DialogTitle className="text-gray-900 text-xl font-semibold">Select a Church</DialogTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:bg-red-50"
                  onClick={() => {
                    window.location.href = '/login';
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
              <DialogDescription className="text-gray-700">
                Choose which church you'd like to access:
              </DialogDescription>
            </DialogHeader>
            
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {(showSearch || churches.length === 0) ? (
              <div className="space-y-4">
                {!showRegisterChurch ? (
                  <>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Church name"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && searchChurches()}
                        className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                      />
                      <Button onClick={searchChurches} className="px-4">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>

                    {searchResults.length > 0 && (
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {searchResults.map((church) => {
                          const logo = getChurchLogo(church);
                          return (
                            <button
                              key={church.id}
                              className="w-full p-4 text-left hover:bg-gray-50 border rounded"
                              onClick={() => handleChurchSelection({ church, jwt: "" })}
                            >
                              <div className="flex items-center gap-4">
                                {logo ? (
                                  <img src={logo} alt={`${church.name} logo`} className="w-12 h-12 object-contain" />
                                ) : (
                                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                                    <span className="text-lg font-semibold text-blue-600">
                                      {church.name.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                )}
                                <div>
                                  <div className="text-blue-500 font-medium">{church.name}</div>
                                  {church.address1 && <div className="text-gray-600 text-sm">{church.address1}</div>}
                                  {(church.city || church.state) && (
                                    <div className="text-gray-600 text-sm">
                                      {church.city && church.city + ", "}{church.state}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {searchResults.length === 0 && searchText && (
                      <p className="text-gray-600 text-center">No churches found matching your search.</p>
                    )}

                    <div className="text-center">
                      <button
                        className="text-blue-600 hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          if (window.confirm("Are you sure you want to register a new church?")) {
                            setNewChurch({ ...newChurch, name: searchText });
                            setShowRegisterChurch(true);
                          }
                        }}
                      >
                        Register a New Church
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Register New Church</h3>
                    <form onSubmit={handleRegisterChurch} className="space-y-3">
                      <Input
                        required
                        placeholder="Church Name"
                        value={newChurch.name || ""}
                        onChange={(e) => setNewChurch({ ...newChurch, name: e.target.value })}
                        className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                      />
                      <Input
                        required
                        placeholder="Address"
                        value={newChurch.address1 || ""}
                        onChange={(e) => setNewChurch({ ...newChurch, address1: e.target.value })}
                        className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                      />
                      <Input
                        placeholder="Address 2"
                        value={newChurch.address2 || ""}
                        onChange={(e) => setNewChurch({ ...newChurch, address2: e.target.value })}
                        className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          required
                          placeholder="City"
                          value={newChurch.city || ""}
                          onChange={(e) => setNewChurch({ ...newChurch, city: e.target.value })}
                          className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                        />
                        <Input
                          required
                          placeholder="State"
                          value={newChurch.state || ""}
                          onChange={(e) => setNewChurch({ ...newChurch, state: e.target.value })}
                          className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          required
                          placeholder="ZIP"
                          value={newChurch.zip || ""}
                          onChange={(e) => setNewChurch({ ...newChurch, zip: e.target.value })}
                          className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                        />
                        <Input
                          required
                          placeholder="Country"
                          value={newChurch.country || ""}
                          onChange={(e) => setNewChurch({ ...newChurch, country: e.target.value })}
                          className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" disabled={isLoading} className="flex-1">
                          {isLoading ? "Registering..." : "Register Church"}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowRegisterChurch(false)}
                        >
                          Back
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div className="max-h-96 overflow-y-auto">
                {churches.map((userChurch, index) => {
                  const logo = getChurchLogo(userChurch.church);
                  const churchName = userChurch.church?.name || 'Unknown Church';
                  const churchId = userChurch.church?.id || Math.random().toString();
                  
                  return (
                    <div key={churchId}>
                      <button
                        className="w-full p-4 text-left hover:bg-gray-50 transition-colors duration-150"
                        onClick={() => handleChurchSelection(userChurch)}
                      >
                        <div className="flex items-center gap-4">
                          {logo ? (
                            <img 
                              src={logo} 
                              alt={`${churchName} logo`}
                              className="w-12 h-12 object-contain flex-shrink-0"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                              <span className="text-lg font-semibold text-blue-600">
                                {churchName.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="text-blue-500 font-medium text-base">{churchName}</div>
                            <div className="text-gray-600 text-sm">{userChurch.church.subDomain}.b1.church</div>
                          </div>
                        </div>
                      </button>
                      {index < churches.length - 1 && (
                        <div className="border-b border-gray-200 mx-4"></div>
                      )}
                    </div>
                  );
                })}
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <button
                    className="w-full text-center text-blue-600 hover:underline"
                    onClick={() => setShowSearch(true)}
                  >
                    Search for Another Church
                  </button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  const getFormTitle = () => {
    switch (formMode) {
      case 'register': return 'Create Account';
      case 'forgot': return 'Reset Password';
      case 'setPassword': return 'Set Password';
      default: return 'Sign In';
    }
  };

  const getFormDescription = () => {
    switch (formMode) {
      case 'register': return 'Create a new account to access your church';
      case 'forgot': return 'Enter your email to receive password reset instructions';
      case 'setPassword': return linkExpired ? 'Your link has expired' : `Welcome back ${user?.firstName || ''}. Please set your password.`;
      default: return 'Enter your email and password to access your church';
    }
  };

  const renderForm = () => {
    if (formMode === 'login') {
      return (
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              autoComplete="email"
              className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
            />
          </div>
          <div className="space-y-2 relative">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
              autoComplete="current-password"
              className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
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

    if (formMode === 'setPassword') {
      if (linkExpired) {
        return (
          <div className="text-center space-y-4">
            <p className="text-red-600">Your password reset link has expired.</p>
            <Button
              onClick={() => window.open("/login", "_blank")}
              className="w-full"
            >
              Request New Link
            </Button>
          </div>
        );
      }

      return (
        <form onSubmit={handleSetPassword} className="space-y-4" autoComplete="off">
          <input type="email" style={{display: 'none'}} autoComplete="username" defaultValue={user?.email || ""} />
          <div className="space-y-2 relative">
            <label htmlFor="new-password" className="text-sm font-medium text-gray-700">Set Password</label>
            <Input
              id="new-password"
              name="new-password"
              type={showPassword ? "text" : "password"}
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading || !user}
              required
              autoComplete="new-password"
              className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="space-y-2 relative">
            <label htmlFor="verify-password" className="text-sm font-medium text-gray-700">Verify Password</label>
            <Input
              id="verify-password"
              name="verify-password"
              type={showPassword ? "text" : "password"}
              placeholder="Verify Password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              disabled={isLoading || !user}
              required
              autoComplete="new-password"
              className="bg-white border-gray-300 focus:border-blue-500 text-gray-900 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading || !user}>
            {(isLoading || !user) ? "Please wait..." : "Sign In"}
          </Button>
        </form>
      );
    }

    if (formMode === 'register') {
      if (registered) {
        return (
          <div className="text-center space-y-4">
            <p className="text-gray-700">Thank you for registering! Please check your email for further instructions.</p>
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => switchMode('login')}
            >
              Back to sign in
            </button>
          </div>
        );
      }

      return (
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium text-gray-700">First Name</label>
              <Input
                id="first-name"
                name="first-name"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isLoading}
                required
                autoComplete="given-name"
                className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Last Name</label>
              <Input
                id="last-name"
                name="last-name"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={isLoading}
                required
                autoComplete="family-name"
                className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="register-email" className="text-sm font-medium text-gray-700">Email</label>
            <Input
              id="register-email"
              name="register-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              autoComplete="email"
              className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Register"}
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
      if (success) {
        return (
          <div className="text-center space-y-4">
            <p className="text-gray-700">{success}</p>
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => switchMode('login')}
            >
              Back to sign in
            </button>
          </div>
        );
      }

      return (
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <p className="text-gray-600 text-sm">Enter your email address and we'll send you a link to reset your password.</p>
          <div className="space-y-2">
            <label htmlFor="forgot-email" className="text-sm font-medium text-gray-700">Email</label>
            <Input
              id="forgot-email"
              name="forgot-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              autoComplete="email"
              className="bg-white border-gray-300 focus:border-blue-500 text-gray-900"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Email"}
          </Button>
          <div className="text-center space-y-2">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => switchMode('register')}
            >
              Register
            </button>
            {" | "}
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
          <CardTitle className="text-2xl font-bold text-gray-900">{getFormTitle()}</CardTitle>
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