import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { label: language === "en" ? "Features" : "सुविधाएं", href: "#features" },
    { label: language === "en" ? "Demo" : "डेमो", href: "#demo" },
    { label: language === "en" ? "How It Works" : "कैसे काम करता है", href: "#how-it-works" },
    { label: language === "en" ? "Contact" : "संपर्क", href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-background/95 backdrop-blur-xl border-b border-border shadow-lg' 
        : 'bg-white/80 dark:bg-background/80 backdrop-blur-lg border-b border-border/50'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚍</span>
            </div>
            <span className="text-xl font-bold text-gradient-primary">
              {language === "en" ? "SmartBus" : "स्मार्टबस"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-primary"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === "en" ? "हिं" : "EN"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button className="btn-hero hover:scale-105 transition-transform duration-300">
              {language === "en" ? "Track My Bus" : "मेरी बस देखें"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={toggleLanguage}>
              <Globe className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-3 mt-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="btn-hero mt-4">
                {language === "en" ? "Track My Bus" : "मेरी बस देखें"}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;