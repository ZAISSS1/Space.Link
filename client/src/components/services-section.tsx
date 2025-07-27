import { Truck, Users, Target } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-8 md:py-16 px-4 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-300 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-6 md:mb-12 content-section">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 md:mb-8">服務種類</h3>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            提供多元化的物流派遣服務，滿足不同企業和個人的需求，建立可持續的合作關係
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-2 md:gap-8 content-section">
          {/* Waste Collection */}
          <div className="text-center">
            <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                  <Truck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm md:text-lg font-bold text-dark">垃圾服務</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">環保垃圾服務與資源回收</p>
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
              <div className="text-center text-white">
                <Truck className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                <h4 className="text-xs md:text-sm font-bold hidden md:block">永續物流</h4>
                <p className="text-xs opacity-90 hidden md:block">環保清運</p>
              </div>
            </div>
          </div>
          
          {/* Delivery Services */}
          <div className="text-center">
            <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                  <Truck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm md:text-lg font-bold text-dark">商品配送</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">商品配送與倉儲管理解決方案</p>
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
              <div className="text-center text-white">
                <Truck className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                <h4 className="text-xs md:text-sm font-bold hidden md:block">智慧配送</h4>
                <p className="text-xs opacity-90 hidden md:block">快速到達</p>
              </div>
            </div>
          </div>
          
          {/* HR Services */}
          <div className="text-center">
            <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm md:text-lg font-bold text-dark">人力派遣</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">彈性工時人力配置與培訓</p>
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
              <div className="text-center text-white">
                <Users className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                <h4 className="text-xs md:text-sm font-bold hidden md:block">人才服務</h4>
                <p className="text-xs opacity-90 hidden md:block">專業培訓</p>
              </div>
            </div>
          </div>
          
          {/* Consulting Services */}
          <div className="text-center">
            <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                  <Target className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm md:text-lg font-bold text-dark">顧問諮詢</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">企業永續物流諮詢服務</p>
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
              <div className="text-center text-white">
                <Target className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                <h4 className="text-xs md:text-sm font-bold hidden md:block">專業諮詢</h4>
                <p className="text-xs opacity-90 hidden md:block">解決方案</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}