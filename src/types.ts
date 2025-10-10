export interface Creators {
  id: number;
  name: string;
  imageUrl: string;
  role: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  imageUrl: string;
  category: "Artists" | "Company" | "Influencer";
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  link?: string;
}
