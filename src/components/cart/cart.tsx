import { component$, $ } from "@builder.io/qwik";
import type { MarketState } from "~/routes/market";

interface CartProps {
  state: MarketState;
  totaValue: number;
}

export default component$<CartProps>(({ state, totaValue }: CartProps) => {
  const startCheckout = $(() => {
    state.isCheckingOut = true;
  });

  return (
    <div class="fixed bottom-0 h-16 flex w-full justify-center font-semibold">
      <div class=" w-4/12 bg-primary h-full flex justify-between place-items-center rounded-t-md px-10 ">
        You have {state.itemsOnCart.length} Products at the cart, Total: $
        {totaValue}
        <button
          class="btn btn-secondary ml-3 text-white"
          onClick$={() => startCheckout()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
});
