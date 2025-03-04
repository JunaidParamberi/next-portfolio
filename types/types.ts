import { StaticImageData } from "next/image";

export interface Work {
  id: number | string;
  projectYear: string ,
  projectLink : string
  clientName : string;
  slug: string;
  projectName: string;
  imageUrl: string | StaticImageData; // Allow both types
  shortDes: string;
  types: string[];
  des: string;
  images: string[];
}
