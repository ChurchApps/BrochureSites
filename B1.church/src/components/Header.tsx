import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { trackChurchSignup } from "@/utils/analytics";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 to-blue-700 border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/b1-church-header-logo.png"
              alt="B1 Church - Free Church Management Platform Logo"
              className="h-8 w-auto"
              width="auto"
              height="32"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-white/80 transition-colors">
              Features
            </a>
            <a href="#about" className="text-white hover:text-white/80 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button 
              className="bg-white text-blue-900 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold" 
              size="lg" 
              asChild
              onClick={() => trackChurchSignup('header_cta')}
            >
              <Link to="/login#register">Get Started Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-white hover:text-white/80 transition-colors">
                Features
              </a>
              <a href="#about" className="text-white hover:text-white/80 transition-colors">
                About
              </a>
              <a href="#contact" className="text-white hover:text-white/80 transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button variant="ghost" className="justify-start text-white hover:text-white hover:bg-white/10" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button 
                  className="bg-white text-blue-900 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold" 
                  asChild
                  onClick={() => trackChurchSignup('mobile_header_cta')}
                >
                  <Link to="/login#register">Get Started Free</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;