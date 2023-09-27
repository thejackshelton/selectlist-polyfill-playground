import { type QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";

type SelectOptionProps = QwikIntrinsicElements["x-option"];

export default component$((props: SelectOptionProps) => {
  return (
    <>
      <x-option
        {...props}
        onClick$={() => console.log("hi!")}
        style={{ background: "red" }}
      >
        {/* @ts-ignore */}
        <Slot />
      </x-option>
    </>
  );
});
