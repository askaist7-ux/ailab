import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Brain, BookOpen, ShoppingBag, Users, 
  MessageSquare, Sparkles, ArrowRight, Github, 
  Twitter, Linkedin, Instagram, Search, Globe,
  Cpu, Zap, BarChart, Rocket, Shield, HelpCircle,
  Mail, Phone, MapPin
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// Pages
import HomePage from './pages/HomePage';
import LecturesPage from './pages/LecturesPage';
import MarketPage from './pages/MarketPage';
import InstructorsPage from './pages/InstructorsPage';
import ToolPage from './pages/ToolPage';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI 강의', path: '/lectures' },
    { name: 'AI 마켓', path: '/market' },
    { name: '강사진', path: '/instructors' },
    { name: 'AI 툴', path: '/tools' },
    { name: '소식', path: '/news' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-3" : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Brain className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">AI Brain</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location.pathname === link.path ? "text-white" : "text-white/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white/60 hover:text-white transition-colors">로그인</button>
          <Link 
            to="/lectures" 
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-colors"
          >
            시작하기
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/60 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10 my-2" />
              <button className="text-left text-lg font-medium text-white/60">로그인</button>
              <Link 
                to="/lectures" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-white text-black px-5 py-3 rounded-full text-center font-bold"
              >
                시작하기
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Brain className="w-8 h-8 text-white" />
              <span className="text-xl font-bold tracking-tighter text-white uppercase">AI Brain</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              AI는 도구가 아닙니다. 당신의 두 번째 두뇌입니다. 
              미래를 준비하는 가장 빠른 방법을 제시합니다.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
              <Github className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">서비스</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link to="/lectures" className="hover:text-white">AI 강의</Link></li>
              <li><Link to="/market" className="hover:text-white">AI 마켓</Link></li>
              <li><Link to="/tools" className="hover:text-white">무료 AI 툴</Link></li>
              <li><Link to="/instructors" className="hover:text-white">강사진 소개</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">고객지원</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">공지사항</li>
              <li className="hover:text-white cursor-pointer">기업 교육 문의</li>
              <li className="hover:text-white cursor-pointer">1:1 상담</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">연락처</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@aibrain.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 02-1234-5678</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 서울특별시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-xs text-white/20">
          <p>© 2026 AI Brain. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">개인정보처리방침</span>
            <span className="hover:text-white cursor-pointer">이용약관</span>
            <span className="hover:text-white cursor-pointer">쿠키설정</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lectures" element={<LecturesPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/tools" element={<ToolPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
