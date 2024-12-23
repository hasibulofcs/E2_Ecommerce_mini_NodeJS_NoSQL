export interface IFTags {
  type: string;
  value: string;
}

export interface IFInventory {
  quantity: number;
  inStock: boolean;
}

export interface IFProducts {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IFTags[];
  inventory: IFInventory;
}
