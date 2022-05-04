import * as Dialog from "@radix-ui/react-dialog";

const RadixDialog = (props: any) => {
  const { title, description } = props;
  return (
    <Dialog.Portal>
      <Dialog.Overlay>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(4px)",
          }}
        ></div>
      </Dialog.Overlay>
      <Dialog.Content>
        <div
          style={{
            background: "white",
            position: "absolute",
            border: "solid black 1px",
          }}
        >
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <Dialog.Close>close</Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
export default RadixDialog;
