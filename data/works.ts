import type { Work } from "../types/works";

export const works: Work[] = [
  {
    id: 1,
    title: 'デザート作品',
    img: '/img/works1.jpg',
    category: 'patissier',
    // items:[
    //   { id: 1, title: 'pari brest', img: 'img/mv2.jpg', date: '2025-08-30'},
    //   { id: 2, title: 'pari brest', img: 'img/works8.jpg', date: '2025-07-30'}
    // ],
    slug: 'cake',
    date: '2025-10-10',
    tags: ['cake', 'dessert']
  },
  {
    id: 2,
    title: 'ToDo App',
    img: '/img/works2.jpg',
    category: 'programming',
    slug: 'todo-app',
    date: '2025-09-04',
    tags: ['App',]
  },
  {
    id: 3,
    title: 'Logo Design',
    img: '/img/figma-img2.jpg',
    category: 'programming',
    slug: 'design',
    date: '2025-08-30',
    tags: ['Logo',]
  },
  {
    id: 4,
    title: 'photo',
    img: '/img/photographing.jpg',
    category: 'programming',
    slug: 'hobby',
    date: '2025-07-10',
    tags: ['Asisai',]
  }
]