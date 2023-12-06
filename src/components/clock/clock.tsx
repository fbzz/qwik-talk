import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const timeStamp = useSignal("");

  useVisibleTask$(() => {
    const tick = () => {
      timeStamp.value = new Date().toLocaleTimeString();
    };
    tick();
    setInterval(tick, 1000);
  });

  return <div class="flex w-full justify-center h-16">{timeStamp.value}</div>;
});
