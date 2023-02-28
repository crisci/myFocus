
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ResetModal(props) {

  function successButton() {
    props.setAlertResetTimer({state: false, choise: false})
  }

  function resetButton() { 
    props.setAlertResetTimer({state: false, choise: true})
  }

    return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={successButton}>Close</Button>
          <Button variant="danger" onClick={resetButton}>Reset</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    );
}

export default ResetModal;