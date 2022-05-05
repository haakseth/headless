import { Button } from "@septima/bricks-react";
import { useState } from "react";
import HeadlessUIDialog from "../../components/headless-ui/Dialog";

export default {
  title: "HeadlessUI/Dialog",
  component: HeadlessUIDialog,
};

export const Dialog = () => {
  let [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div>
        <Button onClick={openModal}>Open dialog</Button>
      </div>
      <HeadlessUIDialog isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
