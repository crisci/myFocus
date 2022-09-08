import "./focus.css";
import { Button, Col, Container, Row, ToggleButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import Nav from "./Navbar";

let root = document.documentElement;


function Focus(props) {
    const [pomodoro, setPomodoro] = useState(25); // eslint-disable-line no-unused-vars
    const [shortBreak, setShortBreak] = useState(5); // eslint-disable-line no-unused-vars
    const [longBreak, setLongBreak] = useState(10); // eslint-disable-line no-unused-vars
    const [timer, setTimer] = useState({color: "#FF6B6B", timer: pomodoro * 60, type: "pomodoro"}); //seconds
    const [counter, setCounter] = useState(0);
    const [status, setStatus] = useState(false); //false=stopped true=on going
    const [timerInterval, setTimerInterval] = useState();

    useEffect(() => {
        if (status) {
            setTimerInterval(
                setInterval(() => {
                    setTimer((oldTimer) => ({...oldTimer, timer: oldTimer.timer - 1}));
                }, 1000)
            );
        } else {
            clearInterval(timerInterval);
            setTimerInterval();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    function switchTimer() {
        setCounter(counter + 1);
        console.log(counter);
        if (counter % 2 === 1) {
            setTimer({color: "#FF6B6B", timer: pomodoro * 60, type: "pomodoro"});
            root.style.setProperty('--background-color', "#FF6B6B");
        } else {
            if (counter % 6 === 0 && counter !== 0) {
                setTimer({color: "#4D96FF", timer: longBreak*60, type: "longBreak"})
                root.style.setProperty('--background-color', "#4D96FF");
            } else {
                setTimer({color: "#6BCB77", timer: shortBreak*60, type: "shortBreak"});
                root.style.setProperty('--background-color', "#6BCB77");
            }
        }
    }

    function composeTimer() {
        if (timer.timer === 0) {
            switchTimer();
        }
        const seconds = timer.timer % 60 < 10 ? "0" + (timer.timer% 60) : timer.timer % 60;
        return Math.floor(timer.timer / 60) + ":" + seconds;
    }

    function startOrStop() {
        setStatus(!status);
    }

    const handleClick = (type) => {
        switch (type) {
            case shortBreak:
                setTimer({color: "#6BCB77", timer: type*60, type:"shortBreak" });
                root.style.setProperty('--background-color', "#6BCB77");
                break;
                
            case longBreak:
                setTimer({color: "#4D96FF", timer: type*60, type: "longBreak"});
                root.style.setProperty('--background-color', "#4D96FF");
                break;
            
            default:
                setTimer({color: "#FF6B6B", timer: type*60, type: "pomodoro"});
                root.style.setProperty('--background-color', "#FF6B6B");
                break;
                
                }
        setStatus(false);
    };

    function timerType(type) {
        if (type === timer.type)
            return true;
        return false;
    }

    return (
        <Row className="vh-100 m-0" style={{backgroundColor: timer.color}}>
            <Nav></Nav>
            <Col className="m-auto text-center vh-50">
                <Container className="py-5 focus-card">
                    <Container className="d-flex justify-content-evenly buttons">
                        {/* TODO: Always selected, change type of buttons  Radius*/}
                        <ToggleButton className={`mybutton ${timerType("pomodoro") ? "checked" : ""}`} onClick={() => handleClick(pomodoro)} checked={timerType("pomodoro") ? true : false}> Pomodoro </ToggleButton>
                        <ToggleButton className={`mybutton ${timerType("shortBreak") ? "checked" : ""}`}  onClick={() => handleClick(shortBreak)} checked={timerType("shortBreak") ? true : false}> Short Break </ToggleButton>
                        <ToggleButton className={`mybutton ${timerType("longBreak") ? "checked" : ""}`}  onClick={() => handleClick(longBreak)} checked={timerType("longBreak") ? true : false}> Long Break </ToggleButton>
                    </Container>
                    <Container className="timer">
                        {composeTimer()}
                    </Container>
                    <Container  className={`start-btn ${status ? "stop" : "start"}`} onClick={startOrStop}>{status ? "Stop" : "Start"}</Container>
                </Container>
            </Col>
        </Row>
    );
}

export default Focus;
