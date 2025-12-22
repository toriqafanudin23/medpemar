import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiBook, FiHelpCircle, FiArrowLeft } from 'react-icons/fi';
import { TbCube, Tb3DCubeSphere } from 'react-icons/tb';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode, pageNumber } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');
  const isHomePage = location.pathname === '/home';

  const navItems = [
    { path: '/home', label: 'Beranda', icon: FiHome },
    { path: '/volume', label: 'Volume', icon: TbCube },
    { path: '/luas-permukaan', label: 'Luas Permukaan', icon: Tb3DCubeSphere },
    { path: '/quiz', label: 'Quiz', icon: FiHelpCircle },
    { path: '/petunjuk', label: 'Petunjuk', icon: FiBook },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left section - Logo and Back button */}
          <div className="flex items-center gap-3">
            {!isHomePage && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="h-9 w-9 text-muted-foreground hover:text-foreground"
              >
                <FiArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <Link to="/home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <TbCube className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground font-display">Bangun Ruang</h1>
                <p className="text-xs text-muted-foreground">Media Pembelajaran AR</p>
              </div>
            </Link>
          </div>

          {/* Center - Navigation (desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right section - Theme toggle and mobile menu */}
          <div className="flex items-center gap-2">
            {/* Page number indicator */}
            {pageNumber && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg">
                <span className="text-xs text-muted-foreground">Halaman</span>
                <span className="text-sm font-semibold text-primary">{pageNumber}</span>
              </div>
            )}

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="h-9 w-9"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-muted-foreground" />
              ) : (
                <FiMoon className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9">
                  <FiMenu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetTitle className="text-left mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <TbCube className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">Bangun Ruang</h2>
                      <p className="text-xs text-muted-foreground">Media Pembelajaran AR</p>
                    </div>
                  </div>
                </SheetTitle>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive(item.path)
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
