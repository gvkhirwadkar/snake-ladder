import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../../button/Button";
import { createPortal } from "react-dom";

export default function ModalContainer() {
  const [showModal, setShowModal] = useState(false);
  const modalContent = "Hello this is Modal";
  return (
    <>
      <Button label="Open" onClick={() => setShowModal(true)} />
      {showModal &&
        createPortal(
          <Modal
            headerText="My Modal Header"
            content={modalContent}
            onClose={() => setShowModal(false)}
            bodyText="Modal main content"
            footerText="My Modal Footer"
          />,
          document.getElementById("portal")
        )}
    </>
  );
}
