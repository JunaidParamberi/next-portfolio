import { StaticImageData } from "next/image";

export interface Work {
  id: number | string;
  slug: string;
  projectName: string;
  imageUrl: string | StaticImageData; // Allow both types
  shortDes: string;
  types: string[];
  des: string;
}
