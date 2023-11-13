export interface Paths {
  id: string;
  name: string;
  image: Image;
  description: string;
  technologies: Technologies[];
  startingDate: date;
  endingDate: date;
}

export interface Technologies {
  id: string;
  title: string;
  image: Image;
}
