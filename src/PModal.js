import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";


function PModal(props) {

  const [newPomodoro, setNewPomodoro] = useState(props.pomodoro);
  const [newShortBreak, setNewShortBreak] = useState(props.shortBreak);
  const [newLongBreak, setNewLongBreak] = useState(props.longBreak);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.resetTimers(newPomodoro, newShortBreak, newLongBreak);
    props.handleClose();
  }

  const modalClose = () => {
    setNewPomodoro(props.pomodoro);
    setNewShortBreak(props.shortBreak);
    setNewLongBreak(props.longBreak);
    props.handleClose();
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Timer (minutes)</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Label>Pomodoro</Form.Label>
              <Form.Control type="number" min={0} max={60} value={newPomodoro} onChange={event => setNewPomodoro(parseInt(event.target.value))}></Form.Control>
            </Col>
            <Col>
              <Form.Label>Short Break</Form.Label>
              <Form.Control type="number" min={0} max={60} value={newShortBreak} onChange={event => setNewShortBreak(parseInt(event.target.value))}></Form.Control>
            </Col>
            <Col>
              <Form.Label>Long Break</Form.Label>
              <Form.Control type="number" min={0} max={60} value={newLongBreak} onChange={event => setNewLongBreak(parseInt(event.target.value))}></Form.Control>
            </Col>
          </Row>
          <Row className="m-auto pt-3 justify-content-end">
            <Button type="submit" className="rounded-pill modal-btn mx-2 w-25" onClick={handleSubmit}>
              Save
            </Button>
          </Row>
        </Form>

      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  )


}





export default PModal;