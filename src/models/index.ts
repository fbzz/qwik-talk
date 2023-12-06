export interface MarketItems {
  id: number;
  title: string;
  description: string;
  callToAction: string;
  price: number;
  image: string;
}

export type MarketState = {
  itemsOnCart: MarketItems[];
  isCheckingOut: boolean;
};
