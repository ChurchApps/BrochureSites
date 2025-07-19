import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { trackButtonClick } from "@/lib/analytics";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Features",
    href: "#features"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "Demo",
    href: "https://chumsdemo.churchapps.org/login"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" role="navigation" aria-label="Main navigation">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/chums-logo.png" alt="CHUMS Logo" className="h-8 w-auto" />

        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground/80 hover:text-foreground transition-colors px-3 py-2 text-sm font-medium">
              {item.name}
            </a>)}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://app.chums.org/" onClick={() => trackButtonClick('Login', 'Navigation')}>
              Login
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="https://app.chums.org/login?action=register" onClick={() => trackButtonClick('Get Started', 'Navigation')}>
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isOpen && <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground/80 hover:text-foreground block px-3 py-2 text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
          {item.name}
        </a>)}
        <div className="flex flex-col space-y-2 pt-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://app.chums.org/" onClick={() => trackButtonClick('Login', 'Mobile Navigation')}>
              Login
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="https://app.chums.org/login?action=register" onClick={() => trackButtonClick('Get Started', 'Mobile Navigation')}>
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </div>}
  </nav>;
};