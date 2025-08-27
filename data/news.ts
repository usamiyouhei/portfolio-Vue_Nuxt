import type { News } from "~/types/news";

export const news: News[] = [
  {
    id: 'n3',
    title: 'New Portfolio',
    date: '2025-10-23',
    image: '/img/news-img2.jpg',
    slug: '2025-10-23_new_portfolio',
    excerpt: '新しいデザインでポートフォリオを制作中です。',
  },
  {
    id: 'n2',
    title: '新作デザートのお知らせ',
    date: '',
    image: '/img/news-img3.jpg',
    slug: '',
    excerpt: '',
  },
  {
    id: 'n1',
    title: '',
    date: '',
    image: '/img/news-img1.jpg',
    slug: '',
    excerpt: '',
  },
  {
    id: 'n4',
    title: '',
    date: '',
    image: '/img/news-img2.jpg',
    slug: '',
    excerpt: '',
  },
  { id: 'n10', title: '記事タイトル10', date: '2025-08-10', slug: 'article-10', image: '/img/news-img1.jpg' },
  { id: 'n9', title: '記事タイトル9', date: '2025-08-09', slug: 'article-9', image: '/img/news-img2.jpg' },
  { id: 'n8', title: '記事タイトル8', date: '2025-08-08', slug: 'article-8', image: '/img/news-img3.jpg' },
  {
    id: 'n5',
    title: '',
    date: '',
    image: '/img/news-img1.jpg',
    slug: '',
    excerpt: '',
  },
]
const allNews: News[] = [
  { id: 'n3', title: '新作デザートのお知らせ', date: '2025-08-21', slug: 'new-dessert', image: '/img/news-img3.jpg' },
  { id: 'n2', title: 'イベント出店情報', date: '2025-08-19', slug: 'event-booth', image: '/img/news-img1.jpg' },
  { id: 'n1', title: 'サイトをリニューアルしました', date: '2025-08-10', slug: 'site-renewal', image: '/img/news-img2.jpg' },
]