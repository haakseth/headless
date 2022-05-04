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
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <HeadlessUIDialog isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
