import "./focus.css";
import { Badge, Col, Container, Row, ToggleButton, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Nav from "./Navbar";
import ResetModal from "./ResetModal";

let root = document.documentElement;


function Focus(props) {
    const [pomodoro, setPomodoro] = useState(25); // eslint-disable-line no-unused-vars
    const [shortBreak, setShortBreak] = useState(5); // eslint-disable-line no-unused-vars
    const [longBreak, setLongBreak] = useState(10); // eslint-disable-line no-unused-vars
    const [timer, setTimer] = useState({color: "#DF5353", timer: pomodoro * 60, type: "pomodoro"}); //seconds
    const [counter, setCounter] = useState(1);
    const [status, setStatus] = useState(false); //false=stopped true=on going
    const [timerInterval, setTimerInterval] = useState();
    const [alertResetTimer, setAlertResetTimer] = useState({state: false, choise: false});

    useEffect(() => {
        setTimer({color: "#DF5353", timer: pomodoro * 60, type: "pomodoro"});
        root.style.setProperty('--background-color', "#DF5353");
    }, [pomodoro, shortBreak, longBreak]);

    useEffect(() => {
        if (status) {
            setTimerInterval(
                setInterval(() => {
                    setTimer((oldTimer) => ({...oldTimer, timer: oldTimer.timer - 1}));
                }, 1000)
            );
        } else {
            clearInterval(timerInterval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    useEffect(() => {
        if(alertResetTimer.choise) {
            //TODO: reset timer and counter
            setAlertResetTimer({state: false, choise: false})
        }

    }, [alertResetTimer.choise])

    useEffect(() => {
        if(timer.timer === 0) {
            setCounter(counter + 1); //asyncronous so once that counter is updated so the timer can switch useEffect(() => {...}, [counter])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer.timer]);

    useEffect(() => {
        switchTimer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter]);

    function resetTimers(newPomodoro, newShortBreak, newLongBreak) {
        setPomodoro(newPomodoro);
        setShortBreak(newShortBreak);
        setLongBreak(newLongBreak);
    }

    function switchTimer() {
        if (counter % 2 === 1) {
            setTimer({color: "#DF5353", timer: pomodoro * 60, type: "pomodoro"});
            root.style.setProperty('--background-color', "#DF5353");
        } else {
            if (counter % 8 === 0 && counter !== 0) {
                setTimer({color: "#4D96FF", timer: longBreak*60, type: "longBreak"})
                root.style.setProperty('--background-color', "#4D96FF");
            } else {
                setTimer({color: "#6BCB77", timer: shortBreak*60, type: "shortBreak"});
                root.style.setProperty('--background-color', "#6BCB77");
            }
        }
    }

    function composeTimer() {
        const seconds = timer.timer % 60 < 10 ? "0" + (timer.timer% 60) : timer.timer % 60;
        return Math.floor(timer.timer / 60) + ":" + seconds;
    }

    function startOrStop() {
        setStatus(!status);
    }


    function showModal() {
        setAlertResetTimer({state:true, choise: false});
    }

    //TODO: switch timer update counter click
    const handleClick = (type) => {
        switch (type.desc) {
            case "shortBreak":
                setTimer({color: "#6BCB77", timer: type.minutes*60, type: type.desc });
                root.style.setProperty('--background-color', "#6BCB77");
                break;
                
            case "longBreak":
                setTimer({color: "#4D96FF", timer: type.minutes*60, type: type.desc});
                root.style.setProperty('--background-color', "#4D96FF");
                break;
            
            default:
                setTimer({color: "#DF5353", timer: type.minutes*60, type: type.desc});
                root.style.setProperty('--background-color', "#DF5353");
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
            <Nav pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} resetTimers={resetTimers} />
            {alertResetTimer.state ? <ResetModal alertResetTimer={alertResetTimer} setAlertResetTimer={setAlertResetTimer}></ResetModal> : <></>}
            <Col className="m-auto text-center vh-50">
                <Container className="py-5 focus-card">
                    <Container className="d-flex justify-content-evenly buttons">
                        {/* TODO: Always selected, change type of buttons  Radius*/}
                        <ToggleButton className={`mybutton ${timerType("pomodoro") ? "checked" : ""}`} onClick={() => handleClick({minutes: pomodoro, desc: "pomodoro"})}> Pomodoro </ToggleButton>
                        <ToggleButton className={`mybutton ${timerType("shortBreak") ? "checked" : ""}`}  onClick={() => handleClick({minutes: shortBreak, desc: "shortBreak"})}> Short Break </ToggleButton>
                        <ToggleButton className={`mybutton ${timerType("longBreak") ? "checked" : ""}`}  onClick={() => handleClick({minutes: longBreak, desc: "longBreak"})}> Long Break </ToggleButton>
                    </Container>
                    <Container className="timer">
                        {composeTimer()}
                        <Button className='badge-btn mt-5' onClick={showModal}><Badge>{Math.floor((counter)/2)}</Badge></Button>
                    </Container>
                    <Container  className={`start-btn ${status ? "stop" : "start"}`} onClick={startOrStop}>{status ? "Stop" : "Start"}</Container>
                </Container>
            </Col>
        </Row>
    );
}

export default Focus;
