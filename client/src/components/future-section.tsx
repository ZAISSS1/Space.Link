import { Lightbulb, Globe, Leaf, Target } from "lucide-react";

export default function FutureSection() {
  return (
    <section id="future" className="py-8 md:py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-12 content-section">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 md:mb-8">未來展望</h3>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            面向未來，聯合移動 Space Link 將持續深耕永續物流領域，透過數位轉型和技術創新，打造世界級的人才招募與派遣平台
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-8 content-section">
          {/* Technology Innovation */}
          <div className="text-center">
            <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                  <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm md:text-lg font-bold text-dark">技術創新</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">導入 AI 與物聯網技術，打造智慧化物流管理平台</p>
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
              <div className="text-center text-white">
                <Lightbulb className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                <h4 className="text-xs md:text-sm font-bold hidden md:block">AI 智慧</h4>
                <p className="text-xs opacity-90 hidden md:block">創新技術</p>
              </div>
            </div>
          </div>
          
          {/* Sustainable Development */}
          <div className="text-center">
            <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm md:text-lg font-bold text-dark">永續發展</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">推動綠色物流，減少碳排放，實現環境永續目標</p>
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
              <div className="text-center text-white">
                <Leaf className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                <h4 className="text-xs md:text-sm font-bold hidden md:block">綠色物流</h4>
                <p className="text-xs opacity-90 hidden md:block">環保永續</p>
              </div>
            </div>
          </div>
          
          {/* Talent Development */}
          <div className="text-center">
            <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                  <Target className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm md:text-lg font-bold text-dark">人才培育</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">建立完整的教育訓練體系，培養專業物流人才</p>
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
              <div className="text-center text-white">
                <Target className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                <h4 className="text-xs md:text-sm font-bold hidden md:block">人才培養</h4>
                <p className="text-xs opacity-90 hidden md:block">專業訓練</p>
              </div>
            </div>
          </div>
          
          {/* Global Expansion */}
          <div className="text-center">
            <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                  <Globe className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-sm md:text-lg font-bold text-dark">全球佈局</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">拓展國際市場，成為亞太地區領先的物流平台</p>
            </div>
            <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
              <div className="text-center text-white">
                <Globe className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                <h4 className="text-xs md:text-sm font-bold hidden md:block">國際拓展</h4>
                <p className="text-xs opacity-90 hidden md:block">全球佈局</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}