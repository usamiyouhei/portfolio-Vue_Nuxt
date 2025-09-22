
export type Cat = 'patissier' | 'programming' | 'design' | 'hobby'
export interface Work {
  id: number | string,
  title: string,
  img?: string,
  slug?: string,
  category: Cat,
  subTitle?: string,
  date?: string | Date,
  tags?: string[],
  externalUrl?: string,
  images?: string[],
  description?: string,
  // patissier/hobby
  recipe?: { ingredients: string[], steps: string[]},
  platingNotes?: string[],
  tools?: string[],
  // programming
  stack?: string[],
  links?:{ demo?: string, repo?: string, article?: string}


}