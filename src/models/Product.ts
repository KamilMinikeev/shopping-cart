import { ReactNode } from "react";

export interface Product {
  id: number;
  img: string;
  title: string;
  star: ReactNode;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
}
