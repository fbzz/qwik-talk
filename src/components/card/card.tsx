import { component$, $ } from "@builder.io/qwik";
import type { MarketState } from "~/models";

interface CardProps {
  id: number;
  title: string;
  description: string;
  callToAction: string;
  price: number;
  image: string;
  state: MarketState;
}

export default component$(
  ({
    id,
    title,
    description,
    callToAction,
    price,
    image,
    state,
  }: CardProps) => {
    const addToCart = $(() => {
      state.itemsOnCart = [
        ...state.itemsOnCart,
        {
          id,
          title,
          description,
          callToAction,
          price,
          image,
        },
      ];
    });

    return (
      <div class="card w-96 bg-neutral-900 shadow-xl m-4">
        <figure>
          <img src={image} alt="Shoes" width={300} height={300} />
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
