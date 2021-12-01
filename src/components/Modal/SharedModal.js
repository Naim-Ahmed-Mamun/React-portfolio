import React from 'react';
import { Modal } from 'react-bootstrap';

const SharedModal = ({show,handleClose}) => {
   
   return (
      <>
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Blog Details Coming Soon
            </Modal.Body>
            <Modal.Footer>
               {/* <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary">Understood</Button> */}
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default SharedModal;