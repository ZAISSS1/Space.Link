import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-sustainable-green text-white">
      <div className="container mx-auto text-center content-section">
        <h3 className="text-3xl font-bold mb-6">準備好加入我們了嗎？</h3>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          成為聯合移動的一員，一起創造更永續的未來。我們提供優良的工作環境、競爭力薪資以及完整的職涯發展機會。
        </p>
        <a 
          href="https://lin.ee/5dGshlA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-sustainable-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
        >
          <span className="mr-3">立即聯繫我們</span>
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}