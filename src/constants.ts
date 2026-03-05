import { Lecture, Review, Instructor, ContentItem } from './types';

export const LECTURES: Lecture[] = [
  {
    id: '1',
    title: 'AI 업무 자동화 마스터 클래스',
    category: 'AI 업무 자동화',
    description: 'ChatGPT와 자동화 툴을 활용하여 업무 시간을 90% 단축하는 비법',
    instructor: '김민수',
    price: 159000,
    image: 'https://picsum.photos/seed/ai-work/800/600',
    rating: 4.9,
    students: 1240
  },
  {
    id: '2',
    title: 'AI 콘텐츠 수익화 전략',
    category: 'AI 수익화',
    description: 'AI로 생성한 콘텐츠로 월 300만원 이상의 부수입을 만드는 로드맵',
    instructor: '이지혜',
    price: 129000,
    image: 'https://picsum.photos/seed/ai-money/800/600',
    rating: 4.8,
    students: 850
  },
  {
    id: '3',
    title: '기업용 AI 챗봇 구축 실무',
    category: 'AI 챗봇 제작',
    description: '우리 회사만의 맞춤형 AI 챗봇을 코딩 없이 구축하는 방법',
    instructor: '박준형',
    price: 199000,
    image: 'https://picsum.photos/seed/ai-chatbot/800/600',
    rating: 4.7,
    students: 520
  },
  {
    id: '4',
    title: 'AI 마케팅 퍼포먼스 극대화',
    category: 'AI 마케팅',
    description: 'AI를 활용한 타겟팅과 광고 소재 제작으로 ROAS 500% 달성하기',
    instructor: '최유진',
    price: 149000,
    image: 'https://picsum.photos/seed/ai-marketing/800/600',
    rating: 4.9,
    students: 930
  }
];

export const REVIEWS: Review[] = [
  { id: '1', content: 'AI로 업무시간이 절반으로 줄었습니다.', author: '이정훈', role: '마케팅 팀장', rating: 5 },
  { id: '2', content: 'AI 콘텐츠로 부수입이 생겼습니다.', author: '박소연', role: '프리랜서', rating: 5 },
  { id: '3', content: '회사에서 바로 적용했습니다.', author: '최민기', role: '기업교육 수강생', rating: 5 },
  { id: '4', content: '챗GPT 활용이 완전히 달라졌습니다.', author: '김지수', role: '대학생', rating: 5 },
  { id: '5', content: 'AI 강의 중 가장 실용적이었습니다.', author: '정다은', role: '개인 사업자', rating: 5 },
  { id: '6', content: 'AI 자동화 덕분에 직원 생산성이 올라갔습니다', author: '강동원', role: '스타트업 대표', rating: 5 },
  { id: '7', content: 'AI 마케팅 전략이 정말 놀라웠습니다', author: '윤서아', role: '마케터', rating: 5 },
  { id: '8', content: '강의 후 바로 프로젝트를 만들었습니다', author: '임재현', role: '개발자', rating: 5 },
  { id: '9', content: 'AI를 처음 이해했습니다', author: '한예슬', role: '취준생', rating: 5 },
  { id: '10', content: '기업 교육으로 최고였습니다', author: '오지호', role: 'HR 담당자', rating: 5 },
  { id: '11', content: '콘텐츠 제작 속도가 10배 빨라졌습니다', author: '송혜교', role: '크리에이터', rating: 5 },
  { id: '12', content: 'AI 수익화 방향이 명확해졌습니다', author: '조인성', role: 'N잡러', rating: 5 }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: '1',
    name: '김민수',
    role: 'AI 자동화 전문가',
    bio: '전 글로벌 테크 기업 AI 전략 팀장. 현재 AI 업무 자동화 컨설팅사 대표.',
    image: 'https://picsum.photos/seed/instructor1/400/400',
    specialties: ['업무 자동화', 'ChatGPT 활용', '워크플로우 설계']
  },
  {
    id: '2',
    name: '이지혜',
    role: 'AI 콘텐츠 크리에이터',
    bio: '구독자 50만 AI 전문 유튜버. AI를 활용한 디지털 에셋 제작 전문가.',
    image: 'https://picsum.photos/seed/instructor2/400/400',
    specialties: ['콘텐츠 수익화', '이미지 생성 AI', '비디오 생성 AI']
  }
];

export const CONTENT_MARKET: ContentItem[] = [
  {
    id: '1',
    title: '고효율 마케팅 프롬프트 팩',
    type: 'prompt',
    price: 29000,
    image: 'https://picsum.photos/seed/prompt/400/300',
    description: '클릭률을 높이는 100가지 이상의 검증된 마케팅 프롬프트'
  },
  {
    id: '2',
    title: 'AI 자동화 노션 템플릿',
    type: 'template',
    price: 45000,
    image: 'https://picsum.photos/seed/template/400/300',
    description: '업무 일지부터 프로젝트 관리까지 AI와 연동되는 노션 시스템'
  }
];
