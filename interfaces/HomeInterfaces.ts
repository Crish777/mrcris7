import Error from 'next/error';

export interface HomeProps {
  projects: ProjectsMrCris7[];
  isError: Error;
}

export interface ProjectsMrCris7 {
  sys: Sys;
  description: Description;
  name: string;
  url: string;
  projectMediaCollection: ProjectMediaCollection;
}

export interface Description {
  json: JSON;
}

export interface JSON {
  data: Data;
  content: JSONContent[];
  nodeType: string;
}

export interface JSONContent {
  data: Data;
  content: ContentContent[];
  nodeType: string;
}

export interface ContentContent {
  data: Data;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Data {}

export interface ProjectMediaCollection {
  items: Item[];
}

export interface Item {
  sys: Sys;
  title: string;
  url: string;
}

export interface Sys {
  id: string;
}
