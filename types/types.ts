import { StaticImageData } from "next/image";

export interface Work {
  id: number;
  item: string;
  imageUrl: string | StaticImageData; // Allow both types
  shortDes: string;
  types: string[];
  des: string;
}
