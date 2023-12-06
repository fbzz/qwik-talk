import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const counter = useSignal(0);

  return (
    <>
      <div class="flex flex-col flex-wrap p-20 items-center ">
        <button class="btn btyn-primary m-5" onClick$={() => counter.value++}>
          +1
        </button>
        <button class="btn btn-secondary m-5" onClick$={() => counter.value--}>
          -1
        </button>
        <span class="m-5">{counter}</span>
      </div>
    </>
  );
});
