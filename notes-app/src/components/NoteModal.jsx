import React, { useEffect } from "react";
import Modal from 'react-modal'


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

function NoteModal(props) {
      Modal.setAppElement('#root');
      const { title} = props
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
  function openModal() {
    setIsOpen(true);
  }

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
return (
    <div>
        <button onClick={openModal}>Read</button>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
        <div>I am a modal I am a modal</div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
)
}

export default NoteModal
  