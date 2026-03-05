import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Image as ImageIcon, MessageSquare, 
  Zap, ArrowRight, Loader2, Download, Copy,
  RefreshCw, Send, Brain
} from 'lucide-react';
import { gemini } from '../services/gemini';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';

type ToolType = 'image' | 'text' | 'marketing';

export default function ToolPage() {
  const [activeTool, setActiveTool] = useState<ToolType>('image');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError(null);
    setResult(null);

    try {
      if (activeTool === 'image') {
        const imageUrl = await gemini.generateImage(prompt);
        setResult(imageUrl);
      } else if (activeTool === 'text') {
        const text = await gemini.chat(prompt, "You are a helpful AI assistant specialized in education and productivity.");
        setResult(text);
      } else if (activeTool === 'marketing') {
        const text = await gemini.chat(
          `Generate a marketing copy for: ${prompt}`,
          "You are a world-class marketing expert. Create compelling, high-converting copy."
        );
        setResult(text);
      }
    } catch (err) {
      console.error(err);
      setError('생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 uppercase italic">AI Tools</h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto">
            누구나 무료로 이용할 수 있는 강력한 AI 도구입니다. <br />
            당신의 아이디어를 현실로 만드세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            {[
              { id: 'image', label: 'AI 이미지 생성', icon: ImageIcon, desc: '텍스트를 고화질 이미지로' },
              { id: 'text', label: 'AI 글쓰기 도우미', icon: MessageSquare, desc: '아이디어 구체화 및 요약' },
              { id: 'marketing', label: '마케팅 카피 생성', icon: Zap, desc: '광고 문구 및 SNS 포스팅' }
            ].map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveTool(tool.id as ToolType);
                  setResult(null);
                  setPrompt('');
                }}
                className={cn(
                  "w-full p-6 rounded-2xl border text-left transition-all group",
                  activeTool === tool.id 
                    ? "bg-white border-white text-black" 
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                )}
              >
                <tool.icon className={cn("w-6 h-6 mb-4", activeTool === tool.id ? "text-black" : "text-white")} />
                <h3 className="font-bold mb-1">{tool.label}</h3>
                <p className={cn("text-xs", activeTool === tool.id ? "text-black/60" : "text-white/40")}>{tool.desc}</p>
              </button>
            ))}
          </div>

          {/* Main Workspace */}
          <div className="lg:col-span-9">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="mb-8">
                <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
                  {activeTool === 'image' ? '이미지 설명 (Prompt)' : '내용 입력'}
                </label>
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={
                      activeTool === 'image' 
                        ? "예: 우주 공간에서 코딩하는 로봇, 시네마틱 조명, 4k" 
                        : "무엇을 도와드릴까요?"
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 min-h-[150px] text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="absolute bottom-4 right-4 bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        생성 중...
                      </>
                    ) : (
                      <>
                        생성하기
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Result Area */}
              <div className="min-h-[400px] border border-dashed border-white/10 rounded-2xl flex items-center justify-center bg-black/20 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {isGenerating ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center"
                    >
                      <Brain className="w-12 h-12 text-white/20 mx-auto mb-4 animate-pulse" />
                      <p className="text-white/40 animate-pulse">AI가 최선을 다해 생성하고 있습니다...</p>
                    </motion.div>
                  ) : result ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full h-full p-8"
                    >
                      {activeTool === 'image' ? (
                        <div className="relative group h-full flex items-center justify-center">
                          <img 
                            src={result} 
                            alt="Generated" 
                            className="max-w-full max-h-[500px] rounded-xl shadow-2xl"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-3 bg-black/60 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all">
                              <Download className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-black/60 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all">
                              <RefreshCw className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="prose prose-invert max-w-none">
                          <div className="flex justify-end mb-4">
                            <button className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors">
                              <Copy className="w-4 h-4" /> 복사하기
                            </button>
                          </div>
                          <ReactMarkdown>{result}</ReactMarkdown>
                        </div>
                      )}
                    </motion.div>
                  ) : error ? (
                    <div className="text-center text-red-400">
                      <p>{error}</p>
                    </div>
                  ) : (
                    <div className="text-center text-white/20">
                      <Sparkles className="w-12 h-12 mx-auto mb-4" />
                      <p>프롬프트를 입력하고 생성하기 버튼을 눌러주세요.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
