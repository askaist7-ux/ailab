import { motion } from 'motion/react';
import { Users, Star, MessageSquare, ArrowRight, Globe, Linkedin, Twitter } from 'lucide-react';
import { INSTRUCTORS } from '../constants';

export default function InstructorsPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 uppercase italic">Instructors</h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto">
            현업에서 검증된 AI 전문가들이 <br />
            당신의 실무 역량을 한 차원 높여드립니다.
          </p>
        </div>

        <div className="space-y-24">
          {INSTRUCTORS.map((instructor, idx) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col gap-12 items-center",
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="w-full md:w-1/2 aspect-square rounded-3xl overflow-hidden relative group">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 block">{instructor.role}</span>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 italic tracking-tighter">{instructor.name}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  {instructor.bio}
                </p>
                
                <div className="mb-10">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Specialties</h4>
                  <div className="flex flex-wrap gap-3">
                    {instructor.specialties.map(s => (
                      <span key={s} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    강의 보기
                  </button>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                      <Twitter className="w-5 h-5" />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
