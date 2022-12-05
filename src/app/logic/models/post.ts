export interface Post {
  id: number,
  created_at: string,
  author: string,
  author_name: string,
  liked_by: string[],
  content: string,
  images: string[],
}

