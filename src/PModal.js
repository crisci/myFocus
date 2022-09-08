import { useState } from "react";
import { Button, Col, Form, FormGroup, Modal, Row } from "react-bootstrap";


function PModal(props) {

    const [newPomodoro, setNewPomodoro] = useState(props.pomodoro);
    const [newShortBreak, setNewShortBreak] = useState(props.shortBreak);
    const [newLongBreak, setNewLongBreak] = useState(props.longBreak);


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const modalClose = () => {
        setNewPomodoro(props.pomodoro);
        setNewShortBreak(props.shortBreak);
        setNewLongBreak(props.longBreak);
        props.handleClose();
    }

    return(
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Timer (minutes)</h5>
            <Form>
                <Row>
                <Col>
                    <Form.Label>Pomodoro</Form.Label>
                    <Form.Control type="number" min={0} max={60} defaultValue={props.pomodoro} onChange={event => setNewPomodoro(parseInt(event.target.value))}></Form.Control>
                </Col>
                <Col>
                    <Form.Label>Short Break</Form.Label>
                    <Form.Control type="number" min={0} max={60} defaultValue={props.shortBreak}></Form.Control>
                </Col>
                <Col>
                    <Form.Label>Long Break</Form.Label>
                    <Form.Control type="number" min={0} max={60} defaultValue={props.longBreak}></Form.Control>
                </Col>
                </Row>
            </Form>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary!important" onClick={modalClose}>
            Close
          </Button>
          <Button variant="primary!important" onClick={modalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )


}





export default PModal;