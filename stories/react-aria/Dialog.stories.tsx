import { useOverlayTriggerState } from "@react-stately/overlays";
import { OverlayContainer, OverlayProvider } from "@react-aria/overlays";
import { useRef } from "react";
import { useButton } from "react-aria";
import { ModalDialog } from "../../components/react-aria/Dialog";

export default {
  title: "ReactAria/Dialog",
  component: ModalDialog,
};

export const Dialog = () => {
  let state = useOverlayTriggerState({});
  let openButtonRef = useRef();
  let closeButtonRef = useRef();

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  let { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  let { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  );
  return (
    <OverlayProvider>
      <button {...openButtonProps} ref={openButtonRef}>
        Open Dialog
      </button>
      {state.isOpen && (
        <OverlayContainer>
          <ModalDialog
            title="Enter your name"
            isOpen
            onClose={state.close}
            isDismissable
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="first-name">First Name:</label>
              <input id="first-name" />
              <label htmlFor="last-name">Last Name:</label>
              <input id="last-name" />
              <button
                {...closeButtonProps}
                ref={closeButtonRef}
                style={{ marginTop: 10 }}
              >
                Submit
              </button>
            </form>
          </ModalDialog>
        </OverlayContainer>
      )}
    </OverlayProvider>
  );
};
