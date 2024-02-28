import { useRef } from "react";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import Modal from "../../Modal/Modal";

const Example = ({ showModal, onModalClose, imgURL, onSaveHandler }) => {
  const cropperRef = useRef(null);

  const onCrop = () => {
    const cropper = cropperRef.current;
    if (cropper) {
      const canvas = cropper.getCanvas();

      return canvas.toDataURL();
    }
  };

  return (
    <Modal
      showModal={showModal}
      onSaveHandler={() => onSaveHandler(onCrop())}
      onModalClose={onModalClose}
    >
      <div className="example">
        <div className="example__cropper-wrapper">
          <Cropper ref={cropperRef} src={imgURL} />
        </div>
      </div>
    </Modal>
  );
};

export default Example;
