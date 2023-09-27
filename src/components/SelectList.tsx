import {
  type QwikIntrinsicElements,
  Slot,
  component$,
  useStyles$,
} from "@builder.io/qwik";

type SelectListProps = QwikIntrinsicElements["x-selectlist"];
import styles from "./selectlist.css?inline";

export default component$((props: SelectListProps) => {
  useStyles$(styles);

  return (
    <>
      <x-selectlist
        onClick$={() => console.log("coming from service worker!")}
        data-test
        {...props}
      >
        <Slot />
      </x-selectlist>
    </>
  );
});
