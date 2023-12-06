import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({
    message: "Hello",
  });

  return (
    <>
      <div class="flex flex-wrap align-center justify-center p-20 ">
        {state.message}
      </div>
    </>
  );
});
