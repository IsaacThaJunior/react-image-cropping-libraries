import { useRef } from "react";
import Cropper from "react-perspective-cropper";
import Modal from "../../Modal/Modal";

export default function ReactPerspectiveCropper({
  showModal,
  onModalClose,
  imgURL,
  onSaveHandler,
}) {
  const cropperRef = useRef();

  return (
    <Modal
      showModal={showModal}
      onSaveHandler={() => onSaveHandler(onCrop())}
      onModalClose={onModalClose}
    >
      <Cropper ref={cropperRef} image={imgURL} />
    </Modal>
  );
}
