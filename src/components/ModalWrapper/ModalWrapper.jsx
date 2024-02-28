import ReactAvatarEditor from "../Croppers/ReactAvatarEditor/ReactAvatarEditor";
import ReactCropper from "../Croppers/ReactCropper/ReactCropper";
import ReactEazyCrop from "../Croppers/ReactEazyCrop/ReactEazyCrop";
import ReactImageCrop from "../Croppers/ReactImageCrop/ReactImageCrop";
import ReactAdvancedCropper from "../Croppers/ReactAdvancedCropper/ReactAdvancedCropper";
import ReactPerspectiveCropper from "../Croppers/ReactPerspectiveCropper/ReactPerspectiveCropper.1";

const ModalWrapper = ({
  modal,
  showModal,
  onModalClose,
  imgURL,
  onSaveHandler,
}) => {
  switch (modal) {
    case "React Cropper":
      return (
        <ReactCropper
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    case "React Image Crop":
      return (
        <ReactImageCrop
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    case "React Easy Crop":
      return (
        <ReactEazyCrop
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    case "React Avatar Editor":
      return (
        <ReactAvatarEditor
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    case "React Advanced Cropper":
      return (
        <ReactAdvancedCropper
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    case "React Perspective Cropper":
      return (
        <ReactPerspectiveCropper
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    default:
      return "";
  }
};

export default ModalWrapper;
