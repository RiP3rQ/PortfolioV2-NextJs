export interface Technologies {
  id: string;
  title: string;
  image: Image;
}

export interface Paths {
  id: string;
  name: string;
  image: Image;
  description: string;
  technologies: Technologies[];
  startingDate: date;
  endingDate: date;
}

export interface Projects extends SanityBody {
  id: string;
  name: string;
  image: Image;
  linkToGithub: string;
  summary: string;
  technologies: Technologies[];
  category: string;
}
