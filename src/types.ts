export interface Lecture {
  id: string;
  title: string;
  category: string;
  description: string;
  instructor: string;
  price: number;
  image: string;
  rating: number;
  students: number;
}

export interface Review {
  id: string;
  content: string;
  author: string;
  role: string;
  rating: number;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface ContentItem {
  id: string;
  title: string;
  type: 'prompt' | 'template' | 'workflow' | 'ebook';
  price: number;
  image: string;
  description: string;
}
