import { component$, type Signal } from "@builder.io/qwik";
import type { MarketState } from "~/routes/market";

interface CartProps {
  state: MarketState;
  totaValue: Readonly<Signal<number>>;
}

export default component$<CartProps>(({ state, totaValue }: CartProps) => {
  return (
    <div class="fixed bottom-0 h-16 flex w-full justify-center font-semibold">
      <div class=" w-4/12 bg-primary h-full flex justify-between place-items-center rounded-t-md px-10 ">
        You have {state.itemsOnCart.length} Products at the cart, Total: $
        {totaValue.value}
        <button
          class="btn btn-secondary ml-3 text-white"
          onClick$={() => (state.isCheckingOut = true)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
});
