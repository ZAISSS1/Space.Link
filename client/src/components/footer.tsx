import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
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
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white relative">
      {/* 裝飾性分隔線 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
      
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* 主要內容 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center sm:text-left">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">聯合移動 Space Link</h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-snug max-w-md mx-auto sm:mx-0">
                台灣領先的永續物流派遣平台，致力於建立信任與品質的夥伴關係，推動永續物流革命。
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white">聯絡資訊</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base break-all">space.link.one@gmail.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">LINE: @spacelink</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white">快速連結</h4>
              <div className="grid grid-cols-1 gap-2 max-w-xs mx-auto sm:mx-0">
                <a 
                  href="#about" 
                  onClick={(e) => handleAnchorClick(e, '#about')}
                  className="group flex items-center justify-center sm:justify-start space-x-2 text-gray-300 hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-gray-700/50"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-125 transition-transform"></span>
                  <span className="text-sm sm:text-base">關於我們</span>
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, '#services')}
                  className="group flex items-center justify-center sm:justify-start space-x-2 text-gray-300 hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-gray-700/50"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-125 transition-transform"></span>
                  <span className="text-sm sm:text-base">服務種類</span>
                </a>
                <a 
                  href="#future" 
                  onClick={(e) => handleAnchorClick(e, '#future')}
                  className="group flex items-center justify-center sm:justify-start space-x-2 text-gray-300 hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-gray-700/50"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-125 transition-transform"></span>
                  <span className="text-sm sm:text-base">未來展望</span>
                </a>
              </div>
            </div>
          </div>

          {/* 版權資訊 - 手機版優化 */}
          <div className="relative mt-6 sm:mt-10 lg:mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent h-px top-0"></div>
            <div className="pt-4 sm:pt-8 text-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg py-3 px-4 sm:py-4 sm:px-6 max-w-xs sm:max-w-2xl mx-auto">
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-tight sm:leading-relaxed text-center">
                  © 2025 聯合移動 Space Link
                  <br className="block sm:hidden" />
                  <span className="hidden sm:inline">. 保留所有權利。</span>
                  <br className="block sm:hidden" />
                  <span className="hidden sm:inline"> | </span>
                  <span className="text-emerald-400 block sm:inline mt-1 sm:mt-0">永續物流 · 信任品質</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}