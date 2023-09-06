import React, { Children } from "react";

interface ModalProps {
  modalOpen: boolean;
  setOpenModal: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setOpenModal, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <label 
          onClick={() => setOpenModal(false)}
          className='btn btn-sm btn-cicle absolute right-2 top-2'>
            X
        </label> 
        {children}
      </div>
    </div>
)};

export default Modal;
