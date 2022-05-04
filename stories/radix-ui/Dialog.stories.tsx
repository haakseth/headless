import * as Radix_Dialog from "@radix-ui/react-dialog";
import RadixDialog from "../../components/radix-ui/Dialog";

export default {
  title: "RadixUI/Dialog",
  component: RadixDialog,
};

export const Dialog = () => {
  return (
    <Radix_Dialog.Root>
      <Radix_Dialog.Trigger>Show dialog</Radix_Dialog.Trigger>
      <RadixDialog
        title="Test"
        description="Hello, this is a test"
      ></RadixDialog>
    </Radix_Dialog.Root>
  );
};
