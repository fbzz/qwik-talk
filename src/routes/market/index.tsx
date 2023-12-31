import { component$, useStore, useComputed$ } from "@builder.io/qwik";
import Card from "~/components/card/card";
import Cart from "~/components/cart/cart";
import Checkout from "~/components/checkout/checkout";
import { mockData } from "../../models/mock";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { MarketItems, MarketState } from "~/models";
import Clock from "~/components/clock/clock";

export const useProductDetails = routeLoader$(async () => {
  return mockData as MarketItems[];
});

//Serialization === $ boundry
//the $ is called symbols, a symbol can be a component or even smaller, like a function
//Basically we're telling qwik that this component CAN BE splitted on the build
//The worst kind of code magic is the kind that's invisible to the developer.
export default component$(() => {
  //Or initi application state
  //Present the state as a proxy that can observe read/writes to the store
  const marketState = useStore<MarketState>({
    itemsOnCart: [],
    isCheckingOut: false,
  });

  //Get data from some endpoints, pretty similar to getStatic props from next
  const products = useProductDetails();

  /**
   * Always listen to changes of the signal used inside
   * and with that will re-calculate
   */
  const totalValue = useComputed$(() => {
    return marketState.itemsOnCart.reduce((acc, val) => acc + val.price, 0);
  });

  return (
    <>
      <div class="flex flex-wrap align-center justify-center p-20 ">
        {products.value.map((item) => {
          return <Card {...item} key={item.id} state={marketState} />;
        })}
        <Cart state={marketState} totaValue={totalValue.value} />
        <Checkout state={marketState} totalValue={totalValue.value} />
      </div>

      <Clock />
    </>
  );
});
