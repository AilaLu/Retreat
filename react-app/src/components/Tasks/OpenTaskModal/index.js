import React from "react";
import { useModal } from "../../../context/Modal";

export function OpenTaskModal({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonStyle, //the button css
  src, //the icon for tasks
  alt, //task title
  width,
  height,
  key,
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <button onClick={onClick} className={buttonStyle} disabled={false}>
      {buttonText}{" "}
      <img key={key} width={width} height={height} src={src} alt={alt} />
    </button>
  );
}
