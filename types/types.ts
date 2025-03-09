import { StaticImageData } from "next/image";

export interface Work {
  id: string;
  projectYear?: string;
  slug: string;
  clientName?: string;
  projectName: string;
  projectLink?: string;
  imageUrl: StaticImageData;
  images?: StaticImageData[];
  shortDes: string;
  types: string[];
  des: string;
}
