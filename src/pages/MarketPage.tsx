import { motion } from 'motion/react';
import { ShoppingBag, Download, Star, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { CONTENT_MARKET } from '../constants';

export default function MarketPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 uppercase italic">AI Market</h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto">
            검증된 AI 프롬프트, 템플릿, 워크플로우를 구매하여 <br />
            당신의 생산성을 즉시 10배 높이세요.
          </p>
        </div>

        {/* Featured Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/market-hero/1200/800" 
              alt="Featured" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
              <span className="inline-block px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">Weekly Featured</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">AI 자동화 마스터 템플릿 팩</h2>
              <p className="text-white/60 text-lg mb-8 max-w-lg">노션, 재피어, ChatGPT가 연동되는 최강의 업무 자동화 시스템을 경험하세요.</p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold w-fit hover:scale-105 transition-transform flex items-center gap-2">
                지금 구매하기 <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between">
            <div>
              <Sparkles className="w-10 h-10 text-white mb-6" />
              <h3 className="text-3xl font-bold mb-4">멤버십 혜택</h3>
              <p className="text-white/40 leading-relaxed mb-8">
                AI Brain 멤버십에 가입하시면 모든 마켓 콘텐츠를 50% 할인된 가격에 이용하실 수 있습니다.
              </p>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-center gap-2">✓ 매주 업데이트되는 신규 프롬프트</li>
                <li className="flex items-center gap-2">✓ 프리미엄 템플릿 무제한 다운로드</li>
                <li className="flex items-center gap-2">✓ 전용 커뮤니티 및 1:1 상담</li>
              </ul>
            </div>
            <button className="w-full border border-white/20 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
              멤버십 가입하기
            </button>
          </div>
        </div>

        {/* Market Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTENT_MARKET.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[8px] font-bold uppercase tracking-widest">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-2 group-hover:text-white/80 transition-colors">{item.title}</h4>
                <p className="text-white/40 text-xs mb-6 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="font-bold">₩{item.price.toLocaleString()}</span>
                  <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
