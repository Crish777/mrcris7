export interface BlogsProps {
  blogs: Blogs[];
}

export interface Blogs {
  sys: Sys;
  titleBlog: string;
  summary: string;
  miniatura: Miniatura;
}

export interface Miniatura {
  url: string;
}

export interface Sys {
  id: string;
}
