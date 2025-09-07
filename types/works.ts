
export interface Work {
  id: number | string,
  title: string,
  img?: string,
  slug?: string,
  category: 'patissier' | 'programming' | 'design' | 'hobby',
  subTitle?: string,
  date?: string | Date,
  description?: string,
  tags?: string[],
  externalUrl?: string,
}