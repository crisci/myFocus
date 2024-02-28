import { Container, Navbar } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
import {BiUserCircle} from "react-icons/bi"
import {IoStatsChartSharp} from "react-icons/io5"
import StatsModal from "./StatsModal";
import { useState } from "react";
import PModal from "./PModal";

function Nav(props) {

    const [show, setShow] = useState(false);
    const [stats, setStats] = useState(false);

    const handleClose = () => {setShow(false); setStats(false)};
    const handleShow = () => setShow(true);

    const handleStats = () => setStats(true)



    return (
        <Navbar variant="dark" className="navbar navbar-dark fixed-top" style={{backgroundColor: "transparent !important"}}>
            <Container fluid style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
                <Navbar.Brand style={{fontWeight:"500"}}>
                    myFocus
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end" style={{color:"white"}}>
                    <BsFillGearFill role="button" style={{width:"1.4em", height: "1.4em", marginRight: "1em"}} onClick={handleShow}/>
                    <IoStatsChartSharp role="button" style={{width:"1.4em", height: "1.4em", marginRight: "1em"}} onClick={handleStats}/>
                    <BiUserCircle role="button" style={{width:"1.6em", height: "1.6em"}}/>
                </Navbar.Collapse>
            </Container>
            <PModal show={show} handleClose={handleClose} pomodoro={props.pomodoro} shortBreak={props.shortBreak} longBreak={props.longBreak} resetTimers={props.resetTimers}/>
            <StatsModal show={stats} handleClose={handleClose}/>
        </Navbar >
    );
}

export default Nav;