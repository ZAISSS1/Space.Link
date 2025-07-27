import { Users, Award, TrendingUp, Building, Star, Target, Handshake, CheckCircle, Zap, Heart, Shield, Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-16 px-4 bg-light-green relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-20 h-20 bg-emerald-300 rounded-full floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-teal-300 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-40 w-12 h-12 bg-green-300 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-4 md:mb-12 content-section">
          <h3 className="text-xl md:text-3xl font-bold text-dark mb-2 md:mb-8">關於我們</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-600 leading-snug md:leading-relaxed px-2 md:px-0">
              <span className="font-semibold text-gray-800">聯合移動 Space Link</span> 是台灣領先的永續物流派遣平台，連結人才與機會的橋樑。
              <span className="hidden md:inline"><br />我們致力於重新定義傳統物流行業，建立基於信任與品質的夥伴關係。<br />為求職者提供靈活工作機會，為企業提供可靠物流解決方案。</span>
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* 核心價值圖標 - 手機版單行顯示 */}
          <div className="grid grid-cols-4 gap-2 md:gap-8 mb-6 md:mb-8 content-section">
            {/* Sustainable Logistics */}
            <div className="text-center">
              <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                    <Leaf className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-dark">永續物流</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">環保配送，減少碳排放足跡</p>
              </div>
              <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
                <div className="text-center text-white">
                  <Leaf className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                  <h4 className="text-xs md:text-sm font-bold hidden md:block">綠色物流</h4>
                  <p className="text-xs opacity-90 hidden md:block">環保永續</p>
                </div>
              </div>
            </div>

            {/* Talent Connection */}
            <div className="text-center">
              <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-dark">人才連結</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">連結優秀人才與就業機會</p>
              </div>
              <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
                <div className="text-center text-white">
                  <Users className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                  <h4 className="text-xs md:text-sm font-bold hidden md:block">人才媒合</h4>
                  <p className="text-xs opacity-90 hidden md:block">專業服務</p>
                </div>
              </div>
            </div>

            {/* Trust Quality */}
            <div className="text-center">
              <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                    <Heart className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-dark">信任品質</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">建立長期信任的夥伴關係</p>
              </div>
              <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
                <div className="text-center text-white">
                  <Heart className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                  <h4 className="text-xs md:text-sm font-bold hidden md:block">品質保證</h4>
                  <p className="text-xs opacity-90 hidden md:block">信任承諾</p>
                </div>
              </div>
            </div>

            {/* Innovation Technology */}
            <div className="text-center">
              <div className="hidden md:block bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                    <Zap className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-dark">創新技術</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">運用科技提升服務效率</p>
              </div>
              <div className="w-16 h-16 md:w-40 md:h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl md:rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
                <div className="text-center text-white">
                  <Zap className="w-4 h-4 md:w-12 md:h-12 mx-auto mb-0 md:mb-2" />
                  <h4 className="text-xs md:text-sm font-bold hidden md:block">智慧創新</h4>
                  <p className="text-xs opacity-90 hidden md:block">科技賦能</p>
                </div>
              </div>
            </div>
          </div>
          

          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 content-section px-4">
            {/* Partnership Statistics */}
            <div className="text-center">
              <div className="bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                    <Handshake className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-dark">合作夥伴</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">遍佈全台灣的企業客戶，穩定合作關係</p>
              </div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
                <div className="text-center text-white">
                  <div className="text-lg md:text-2xl font-bold mb-1">1000+</div>
                  <p className="text-xs opacity-90">企業夥伴</p>
                </div>
              </div>
            </div>
            
            {/* Service Cases */}
            <div className="text-center">
              <div className="bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                    <Target className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-dark">服務案件</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">豐富物流派遣經驗，涵蓋各種專案</p>
              </div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
                <div className="text-center text-white">
                  <div className="text-lg md:text-2xl font-bold mb-1">5000+</div>
                  <p className="text-xs opacity-90">成功案例</p>
                </div>
              </div>
            </div>
            
            {/* Satisfaction Rate */}
            <div className="text-center">
              <div className="bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                    <Star className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-dark">滿意度</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">客戶高度認可專業服務品質</p>
              </div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
                <div className="text-center text-white">
                  <div className="text-lg md:text-2xl font-bold mb-1">95%</div>
                  <p className="text-xs opacity-90">客戶滿意</p>
                </div>
              </div>
            </div>
            
            {/* Trust Quality */}
            <div className="text-center">
              <div className="bg-white p-3 md:p-6 rounded-2xl mb-3 md:mb-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mb-2 md:mb-0 md:mr-4">
                    <Shield className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-dark">信任品質</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">永續經營理念，建立長期信任</p>
              </div>
              <div className="w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg floating-animation flex items-center justify-center mx-auto">
                <div className="text-center text-white">
                  <Shield className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-1 md:mb-2" />
                  <h4 className="text-xs md:text-sm font-bold">信任保證</h4>
                  <p className="text-xs opacity-90">品質承諾</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}