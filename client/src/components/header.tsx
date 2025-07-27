import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/LINE-聯平代收平台_1753576996280.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = 100;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-800 shadow-xl' : 'bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-zinc-800/95 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-3 sm:py-4 md:py-5 lg:py-6">
          {/* Logo and Title - 優化響應式佈局 */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8 md:mb-10">
            <img 
              src={logoPath} 
              alt="Space Link Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-md flex-shrink-0"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight whitespace-nowrap">
              聯合移動 Space Link
            </h1>
          </div>
          
          {/* Navigation Menu - 亮色按鈕設計 */}
          <nav className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto overflow-x-auto px-2 mt-4 sm:mt-6 md:mt-8">
            <a 
              href="#about" 
              onClick={(e) => handleAnchorClick(e, '#about')}
              className="bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap text-center"
            >
              關於我們
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleAnchorClick(e, '#services')}
              className="bg-emerald-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap text-center"
            >
              服務種類
            </a>
            <a 
              href="#future" 
              onClick={(e) => handleAnchorClick(e, '#future')}
              className="bg-purple-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-purple-600 transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap text-center"
            >
              未來展望
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}