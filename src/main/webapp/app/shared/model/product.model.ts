export interface IProduct {
  id?: string | number;
  title?: string;
  oldPrice?: number;
  newPrice?: number;
  discount?: number;
  img?: string;
  slug?: string;
}

export const defaultValue: Readonly<IProduct> = {};
