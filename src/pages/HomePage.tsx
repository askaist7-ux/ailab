import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, Brain, Cpu, Zap, BarChart, Rocket, 
  Shield, Users, MessageSquare, Sparkles, Globe,
  Search, Play, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { LECTURES, REVIEWS, INSTRUCTORS } from '../constants';

const HERO_SLIDES = [
  {
    title: "AI는 도구가 아닙니다.\n당신의 두 번째 두뇌입니다.",
    subtitle: "AI를 배우는 순간 일하는 방식이 완전히 달라집니다.",
    button: "AI 강의 시작하기",
    bg: "https://picsum.photos/seed/space-ai/1920/1080?blur=2",
    accent: "우주 + 신경망 + 빛나는 데이터 흐름"
  },
  {
    title: "AI로 돈 버는 시대\n이미 시작되었습니다",
    subtitle: "AI 강의, AI 자동화, AI 콘텐츠 수익화. 단 8주면 가능합니다.",
    button: "AI 수익화 배우기",
    bg: "https://picsum.photos/seed/robot-money/1920/1080?blur=2",
    accent: "AI 로봇 + 돈 흐름 + 데이터 그래프"
  },
  {
    title: "미래를 준비하는\n가장 빠른 방법",
    subtitle: "기업, 공공기관, 개인. 누구나 AI 전문가가 될 수 있습니다.",
    button: "강의 신청하기",
    bg: "https://picsum.photos/seed/hologram-human/1920/1080?blur=2",
    accent: "사람 + AI 홀로그램 인터페이스"
  }
];

const CATEGORIES = [
  "AI 입문", "AI 업무 자동화", "AI 콘텐츠 제작", "AI 마케팅", 
  "AI 데이터 분석", "AI 챗봇 제작", "AI 수익화", "AI 스타트업",
  "AI 교육 강사 과정", "AI 자격증 과정"
];

const TARGET_TABS = [
  {
    id: 'corporate',
    label: '기업 교육',
    targets: ['대기업', '스타트업', '중소기업'],
    lectures: ['AI 업무자동화', 'AI 마케팅', 'AI 데이터 분석', 'AI 챗봇 구축'],
    button: '기업 강의 신청'
  },
  {
    id: 'government',
    label: '관공서 교육',
    targets: ['지자체', '공공기관', '학교'],
    lectures: ['AI 행정자동화', 'AI 문서 작성', 'AI 데이터 활용', 'AI 시민 서비스 챗봇'],
    button: '관공서 강의 신청'
  },
  {
    id: 'general',
    label: '일반인 교육',
    targets: ['취준생', '직장인', '프리랜서'],
    lectures: ['AI 활용 입문', 'AI 콘텐츠 제작', 'AI 유튜브 자동화', 'AI 수익화'],
    button: '강의 신청하기'
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('corporate');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img 
              src={HERO_SLIDES[currentSlide].bg} 
              alt="Hero Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 whitespace-pre-line leading-tight">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link 
                to="/lectures" 
                className="bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2"
              >
                {HERO_SLIDES[currentSlide].button}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border border-white/20 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
                무료 체험하기
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "h-1 transition-all duration-500 rounded-full",
                currentSlide === idx ? "w-12 bg-white" : "w-4 bg-white/20"
              )}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">AI Categories</h2>
              <p className="text-white/40 text-lg">당신에게 필요한 AI 전문 분야를 선택하세요.</p>
            </div>
            <Link to="/lectures" className="text-white/60 hover:text-white flex items-center gap-2 group">
              전체 강의 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="p-8 border border-white/10 rounded-2xl flex flex-col items-center text-center gap-4 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <span className="text-xs font-bold">0{idx + 1}</span>
                </div>
                <span className="font-bold text-sm md:text-base">{cat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Tabs Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">Targeted Solutions</h2>
            <p className="text-white/40 text-lg">대상별 맞춤형 AI 커리큘럼을 제안합니다.</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {TARGET_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-bold transition-all",
                  activeTab === tab.id ? "bg-white text-black" : "bg-white/5 text-white/40 hover:bg-white/10"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-12 border border-white/10"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">{TARGET_TABS.find(t => t.id === activeTab)?.label}</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {TARGET_TABS.find(t => t.id === activeTab)?.targets.map(target => (
                    <span key={target} className="px-4 py-1 bg-white/10 rounded-full text-xs text-white/60">{target}</span>
                  ))}
                </div>
                <div className="space-y-4 mb-10">
                  {TARGET_TABS.find(t => t.id === activeTab)?.lectures.map(lecture => (
                    <div key={lecture} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span className="text-lg text-white/80">{lecture}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all">
                  {TARGET_TABS.find(t => t.id === activeTab)?.button}
                </button>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${activeTab}/800/450`} 
                  alt="Target" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-black fill-black ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">Student Reviews</h2>
            <p className="text-white/40 text-lg">이미 수많은 수강생들이 AI로 삶을 변화시키고 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-3 h-3 text-white" />
                    ))}
                  </div>
                  <p className="text-lg font-medium leading-relaxed mb-8 italic">"{review.content}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{review.author}</p>
                    <p className="text-xs text-white/40">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 uppercase italic">Learning Process</h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: '강의 신청 및 수강', desc: '자신에게 맞는 커리큘럼을 선택하고 즉시 학습을 시작하세요.' },
                  { step: '02', title: '실습 및 프로젝트', desc: '이론을 넘어 실제 AI 툴을 활용한 프로젝트를 수행합니다.' },
                  { step: '03', title: '전문가 피드백', desc: '현업 전문가의 1:1 멘토링과 피드백을 통해 실력을 완성하세요.' },
                  { step: '04', title: '수익화 및 취업', desc: '완성된 포트폴리오로 수익화하거나 원하는 기업에 취업하세요.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 group">
                    <span className="text-4xl font-bold text-white/10 group-hover:text-white transition-colors">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full" />
              <img 
                src="https://picsum.photos/seed/process/800/1000" 
                alt="Process" 
                className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">Top Instructors</h2>
              <p className="text-white/40 text-lg">최고의 실무 전문가들이 당신의 성장을 돕습니다.</p>
            </div>
            <Link to="/instructors" className="text-white/60 hover:text-white flex items-center gap-2 group">
              전체 강사진 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSTRUCTORS.map((instructor) => (
              <motion.div
                key={instructor.id}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="md:w-1/2 aspect-square">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{instructor.role}</span>
                  <h3 className="text-3xl font-bold mb-4">{instructor.name}</h3>
                  <p className="text-white/60 mb-8 text-sm leading-relaxed">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map(s => (
                      <span key={s} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">AI News & Blog</h2>
              <p className="text-white/40 text-lg">최신 AI 트렌드와 기술 소식을 전해드립니다.</p>
            </div>
            <button className="text-white/60 hover:text-white flex items-center gap-2 group">
              전체 소식 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: '2026.03.05', title: 'Gemini 3.1 업데이트: 이미지 생성 품질의 혁명', category: 'Technology' },
              { date: '2026.03.01', title: 'AI로 업무 시간을 50% 단축하는 5가지 방법', category: 'Productivity' },
              { date: '2026.02.25', title: '2026년 주목해야 할 AI 스타트업 트렌드', category: 'Business' }
            ].map((news, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                  <img 
                    src={`https://picsum.photos/seed/news-${idx}/800/450`} 
                    alt="News" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{news.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{news.date}</span>
                </div>
                <h4 className="text-xl font-bold group-hover:text-white/80 transition-colors">{news.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 uppercase italic leading-none">
              Ready to <br /> Evolve?
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-black/60">
              지금 바로 AI 전문가로 거듭나세요. <br />
              당신의 성장을 위한 모든 것이 준비되어 있습니다.
            </p>
            <Link 
              to="/lectures" 
              className="inline-flex items-center gap-3 bg-black text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-black/80 transition-all hover:scale-105"
            >
              강의 신청하기
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
