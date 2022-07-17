import "./focus.css";
import { Button, Col, Container, Row, ToggleButton } from "react-bootstrap";
import { useEffect, useState } from "react";

function Focus(props) {
    const [pomodoro, setPomodoro] = useState(25); // eslint-disable-line no-unused-vars
    const [shortBreak, setShortBreak] = useState(5); // eslint-disable-line no-unused-vars
    const [longBreak, setLongBreak] = useState(10); // eslint-disable-line no-unused-vars
    const [timer, setTimer] = useState({color: "rgb(247, 80, 80)", timer: pomodoro * 60}); //seconds
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
            setTimer({color: "#FF6B6B", timer: pomodoro * 60});
        } else {
            if (counter % 6 === 0 && counter !== 0) {
                setTimer({color: "#4D96FF", timer: longBreak*60})
            } else {
                setTimer({color: "#6BCB77", timer: shortBreak*60});
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
                setTimer({color: "#6BCB77", timer: type*60})
                break;
                
            case longBreak:
                setTimer({color: "#4D96FF", timer: type*60})
                break;
            
            default:
                setTimer({color: "#FF6B6B", timer: type*60});
                break;
                
                }
        setStatus(false);
    };

    return (
        <Row className="vh-100 m-0">
            <Col className="m-auto text-center">
                <Container className="py-5 focus-card" style={{backgroundColor: timer.color}}>
                    <Container className="d-flex justify-content-evenly buttons">
                        <ToggleButton className="mybutton" onClick={() => handleClick(pomodoro)}> Pomodoro </ToggleButton>
                        <ToggleButton className="mybutton" onClick={() => handleClick(shortBreak)}> Short Break </ToggleButton>
                        <ToggleButton className="mybutton" onClick={() => handleClick(longBreak)}> Long Break </ToggleButton>
                    </Container>
                    <Container className="timer">
                        {composeTimer()}
                    </Container>
                    {/* <Container className="counter-pomodoro">
                        #{Math.ceil(counter / 2)}
                    </Container> */}
                    <Button onClick={startOrStop}>{status ? "Stop" : "Start"}</Button>
                </Container>
            </Col>
        </Row>
    );
}

export default Focus;
