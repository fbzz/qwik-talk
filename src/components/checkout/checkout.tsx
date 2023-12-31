import { component$, $ } from "@builder.io/qwik";
import type { MarketState } from "~/models";

interface CheckoutProps {
  state: MarketState;
  totalValue: number;
}

export default component$(({ state, totalValue }: CheckoutProps) => {
  const onFinish = $(() => {
    alert("Thanks for buying with us");
    state.isCheckingOut = false;
    state.itemsOnCart = [];
  });

  const removeItem = $((id: number) => {
    state.itemsOnCart = state.itemsOnCart.filter(
      (filteringItem) => filteringItem.id !== id
    );
  });

  const onCancel = $(() => {
    state.isCheckingOut = false;
  });

  return (
    <>
      {state.isCheckingOut ? (
        <div
          class="fixed w-6/12 h-full bg-white top-0 right-0 z-50 text-black flex items-center flex-col p-20 overflow-auto"
          id="checkout"
        >
          <h1 class="font-extrabold ">Checkout</h1>
          <div class="divider divider-primary font-extrabold">Items</div>

          {state.itemsOnCart.map((item, key) => {
            return (
              <>
                <div class="flex w-full " key={key}>
                  <div class="flex-2">
                    <img
                      src={item.image}
                      alt="Shoes"
                      class="rounded-lg"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div class="flex-1 p-5">
                    <p class="font-extrabold">{item.title}</p>
                    <span class="font-extralight">{item.description}</span>
                  </div>
                  <div class="flex-2 p-5">
                    <p>$ {item.price}</p>
                    <p
                      class="text-red-500 cursor-pointer"
                      onClick$={() => {
                        removeItem(item.id);
                      }}
                    >
                      Remove
                    </p>
                  </div>
                </div>

                <div class="divider"></div>
              </>
            );
          })}

          <div class="divider divider-primary font-extrabold">Total</div>
          <div>${totalValue}</div>
          <div class="divider divider-primary"></div>
          <div class="flex space-x-2">
            <button
              class="btn btn-primary text-white"
              onClick$={() => onFinish()}
            >
              Finish checkout!
            </button>
            <button
              class="btn btn-danger text-white"
              onClick$={() => onCancel()}
            >
              Cancel!
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
});
