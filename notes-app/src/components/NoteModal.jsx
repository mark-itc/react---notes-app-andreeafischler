import React, { useEffect } from "react";
import Modal from 'react-modal'


function NoteModal(props) {
      Modal.setAppElement('#root');
      const { title } = props
      const [modalIsOpen, setIsOpen] = React.useState(false);
      
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
  function openModal() {
    setIsOpen(true);
  }
    
  function closeModal() {
     setIsOpen(false);
  }

     
return (
    <div>
        <button className="open-modal" onClick={openModal}>Read</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>{title}</h2>
        <div>body text</div>
        <button className="close-modal" onClick={closeModal}>close</button>
      </Modal>
    </div>
)
}

export default NoteModal
  