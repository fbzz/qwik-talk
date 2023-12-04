import { component$, $ } from "@builder.io/qwik";
import { type MarketState } from "~/routes/market";

interface CardProps {
  id: number;
  title: string;
  description: string;
  callToAction: string;
  price: number;
  state: MarketState;
}

export default component$<CardProps>(
  ({ id, title, description, callToAction, price, state }: CardProps) => {
    const addToCart = $(() => {
      state.itemsOnCart = [
        ...state.itemsOnCart,
        {
          id,
          title,
          description,
          callToAction,
          price,
          image:
            "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        },
      ];
    });

    return (
      <div class="card w-96 bg-neutral-900 shadow-xl m-4">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            width={300}
            height={300}
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" onClick$={() => addToCart()}>
              {callToAction}
            </button>
          </div>
        </div>
      </div>
    );
  }
);
