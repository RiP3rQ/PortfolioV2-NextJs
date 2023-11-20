export interface Technologies {
  title: string;
  image: Image;
}

export interface Paths {
  title: string;
  description: string;
  image: Image;
  technologies: { image: string }[];
  startingDate: date;
  endingDate: date;
}

export interface Projects extends SanityBody {
  title: string;
  imageThumbnail: Image;
  image: Image;
  linkToGithub: string;
  summary: string;
  technologies: Technologies[];
}
