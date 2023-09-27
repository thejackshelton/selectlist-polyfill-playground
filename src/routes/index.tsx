import { component$, useOn, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Option from "../components/Option";
import SelectList from "../components/SelectList";

export default component$(() => {
  useOn(
    "qvisible",
    $(async () => {
      // @ts-ignore
      await import("selectlist-polyfill");
    })
  );

  return (
    <>
      <SelectList style={{ background: "red" }}>
        <button>hi</button>
        <Option disabled onClick$={() => console.log("hi!")}>
          Option 1
        </Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
      </SelectList>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
