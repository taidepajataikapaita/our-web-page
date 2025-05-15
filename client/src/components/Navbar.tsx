import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Define languages with value and text properties
  const languages = [
    { value: "fi", text: "Suomi" },
    { value: "en", text: "English" }
  ];

  // Initialize language from URL or default to Finnish
  const getInitialLanguage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lng');
    return urlLang || localStorage.getItem('language') || 'fi';
  };

  const [lang, setLang] = useState(getInitialLanguage);

  // Sync language state with i18n and localStorage
  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  }, [lang, i18n]);

  const handleLanguageChange = (langValue: string) => {
    setLang(langValue);

    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('lng', langValue);
    window.history.pushState({}, '', url);

    // Update i18n language
    i18n.changeLanguage(langValue);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  const getLinkClass = (path: string) => {
    const baseClass = "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200";
    return isActive(path)
      ? `${baseClass} bg-[#FF5CBF] text-white font-bold`
      : `${baseClass} text-[#0074D9] hover:bg-[#FFB6D2] hover:text-white`;
  };

  const getMobileLinkClass = (path: string) => {
    const baseClass = "w-full px-4 py-2 text-sm font-medium transition-all duration-200";
    return isActive(path)
      ? `${baseClass} bg-[#FFB6D2] text-[#FF5CBF] border-l-4 border-[#FF5CBF]`
      : `${baseClass} text-[#0074D9] hover:bg-[#FFB6D2] hover:text-[#FF5CBF]`;
  };

  // Update language display based on current language
  const getCurrentLanguageText = () => {
    return languages.find(item => item.value === lang)?.text || 'Suomi';
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-[#FF5CBF] text-xl font-bold flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          Taidepaja Taikapaita
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className={getLinkClass('/')}>
            {t('nav-about')}
          </Link>
          <Link to="/t-shirt" className={getLinkClass('/t-shirt')}>
            {t('nav-t-shirt')}
          </Link>
          <Link to="/workshops" className={getLinkClass('/workshops')}>
            {t('nav-workshops')}
          </Link>
          <Link to="/feedback" className={getLinkClass('/feedback')}>
            {t('nav-feedback')}
          </Link>

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-4 border-[#FF5CBF] text-[#FF5CBF] hover:bg-[#FFB6D2] hover:text-white flex items-center gap-2"
              >
                <Globe size={16} />
                {getCurrentLanguageText()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              {languages.map((item) => (
                <DropdownMenuItem
                  key={item.value}
                  onClick={() => handleLanguageChange(item.value)}
                  className={`cursor-pointer ${lang === item.value ? 'bg-[#FFB6D2] text-[#FF5CBF]' : ''}`}
                >
                  {item.text}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Language Dropdown for Mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-[#FF5CBF] text-[#FF5CBF] hover:bg-[#FFB6D2] hover:text-white flex items-center gap-2"
              >
                <Globe size={16} />
                {getCurrentLanguageText()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              {languages.map((item) => (
                <DropdownMenuItem
                  key={item.value}
                  onClick={() => handleLanguageChange(item.value)}
                  className={`cursor-pointer ${lang === item.value ? 'bg-[#FFB6D2] text-[#FF5CBF]' : ''}`}
                >
                  {item.text}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-[#FF5CBF] p-2 rounded-md hover:bg-[#FFB6D2] hover:text-white transition-colors duration-200"
                aria-label="Menu"
              >
                <Menu size={24} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white mt-2">
              <DropdownMenuItem asChild>
                <Link to="/" className={getMobileLinkClass('/')}>
                  {t('nav-about')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/t-shirt" className={getMobileLinkClass('/t-shirt')}>
                  {t('nav-t-shirt')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/workshops" className={getMobileLinkClass('/workshops')}>
                  {t('nav-workshops')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/feedback" className={getMobileLinkClass('/feedback')}>
                  {t('nav-feedback')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;