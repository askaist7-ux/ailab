import { motion } from 'motion/react';
import { Search, Filter, Star, Users, ArrowRight } from 'lucide-react';
import { LECTURES } from '../constants';
import { Link } from 'react-router-dom';

export default function LecturesPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase italic">AI Lectures</h1>
            <p className="text-white/40 text-lg">실무 중심의 AI 커리큘럼으로 미래를 선점하세요.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input 
              type="text" 
              placeholder="배우고 싶은 AI 분야를 검색하세요"
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['전체', 'AI 입문', 'AI 업무 자동화', 'AI 콘텐츠 제작', 'AI 마케팅', 'AI 데이터 분석', 'AI 챗봇 제작', 'AI 수익화'].map((cat) => (
            <button 
              key={cat}
              className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LECTURES.map((lecture) => (
            <motion.div
              key={lecture.id}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={lecture.image} 
                  alt={lecture.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {lecture.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-white">
                    <Star className="w-4 h-4 fill-white" />
                    <span className="text-sm font-bold">{lecture.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/40">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{lecture.students.toLocaleString()}명 수강중</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white/80 transition-colors">{lecture.title}</h3>
                <p className="text-white/40 text-sm mb-8 line-clamp-2">{lecture.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-xl font-bold">₩{lecture.price.toLocaleString()}</span>
                  <Link 
                    to={`/lectures/${lecture.id}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <ArrowRight className="w-5 h-5 text-black" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
