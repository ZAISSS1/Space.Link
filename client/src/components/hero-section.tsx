import { ArrowRight, Truck, Leaf, Users, Package } from "lucide-react";

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const target = document.querySelector('#about');
    if (target) {
      const headerHeight = 100; // 調整為新的header高度
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-gradient text-white px-4 mt-14 sm:mt-16 md:mt-20 lg:mt-24 min-h-[40vh] md:min-h-[55vh] flex items-center justify-center relative overflow-hidden">
      {/* 左側動畫圖標 */}
      <div className="absolute left-4 md:left-8 lg:left-16 bottom-8 md:bottom-12 lg:bottom-16 hidden md:block">
        <div className="flex flex-col space-y-6 lg:space-y-8">
          <div className="hero-icon-float" style={{ animationDelay: '0s' }}>
            <Truck className="w-8 h-8 lg:w-12 lg:h-12 text-white/70 hover:text-white transition-colors" />
          </div>
          <div className="hero-icon-float" style={{ animationDelay: '1s' }}>
            <Leaf className="w-8 h-8 lg:w-12 lg:h-12 text-white/70 hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* 右側動畫圖標 */}
      <div className="absolute right-4 md:right-8 lg:right-16 bottom-8 md:bottom-12 lg:bottom-16 hidden md:block">
        <div className="flex flex-col space-y-6 lg:space-y-8">
          <div className="hero-icon-float" style={{ animationDelay: '0.5s' }}>
            <Users className="w-8 h-8 lg:w-12 lg:h-12 text-white/70 hover:text-white transition-colors" />
          </div>
          <div className="hero-icon-float" style={{ animationDelay: '1.5s' }}>
            <Package className="w-8 h-8 lg:w-12 lg:h-12 text-white/70 hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto py-8 md:py-12 mt-16 md:mt-20">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight text-center">
            我們派送的不只是垃圾，而是信任與永續
          </h2>
          <p className="text-sm md:text-lg mb-6 md:mb-8 opacity-90 font-medium text-center">
            加入聯合移動，一起推動永續物流革命
          </p>
          <div className="flex justify-center">
            <a 
              href="https://lin.ee/5dGshlA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              加入我們
              <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}