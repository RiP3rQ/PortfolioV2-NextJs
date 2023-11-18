export interface Technologies {
  title: string;
  image: Image;
}

export interface Paths {
  title: string;
  description: string;
  image: Image;
  technologies: Technologies[];
  startingDate: date;
  endingDate: date;
}

export interface Projects extends SanityBody {
  name: string;
  image: Image;
  linkToGithub: string;
  summary: string;
  technologies: Technologies[];
  category: string;
}
