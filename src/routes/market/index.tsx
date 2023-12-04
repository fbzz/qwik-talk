import { component$, useStore, useComputed$ } from "@builder.io/qwik";
import Card from "~/components/card/card";
import Cart from "~/components/cart/cart";
import Checkout from "~/components/checkout/checkout";

export interface MarketItems {
  id: number;
  title: string;
  description: string;
  callToAction: string;
  price: number;
  image: string;
}

const mockData: MarketItems[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for Product 1",
    callToAction: "Buy Now",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for Product 2",
    callToAction: "Shop Now",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for Product 3",
    callToAction: "View Details",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for Product 4",
    callToAction: "Add to Cart",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description for Product 5",
    callToAction: "Explore",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description for Product 6",
    callToAction: "Buy Now",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 7,
    title: "Product 7",
    description: "Description for Product 7",
    callToAction: "Shop Now",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description for Product 8",
    callToAction: "View Details",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 9,
    title: "Product 9",
    description: "Description for Product 9",
    callToAction: "Add to Cart",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    id: 10,
    title: "Product 10",
    description: "Description for Product 10",
    callToAction: "Explore",
    price: 100,
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
];

export type MarketState = {
  itemsOnCart: MarketItems[];
  isCheckingOut: boolean;
};

export default component$(() => {
  const marketState = useStore<MarketState>({
    itemsOnCart: [],
    isCheckingOut: false,
  });

  const totalValue = useComputed$(() => {
    return marketState.itemsOnCart.reduce((acc, val) => acc + val.price, 0);
  });

  return (
    <>
      <div class="flex flex-wrap align-center justify-center p-20 ">
        {mockData.map((item, key) => {
          return <Card {...item} key={key} state={marketState} />;
        })}
        {marketState.itemsOnCart.length > 0 ? (
          <Cart state={marketState} totaValue={totalValue} />
        ) : null}
        {marketState.isCheckingOut ? (
          <Checkout state={marketState} totalValue={totalValue} />
        ) : null}
      </div>
    </>
  );
});
