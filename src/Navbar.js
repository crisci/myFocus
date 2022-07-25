import { Container, Navbar } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";

function Nav(props) {

    return (
        <Navbar bg="primary" variant="dark" className="navbar navbar-dark bg-primary fixed-top" style={{backgroundColor: "transparent"}}>
            <Container fluid style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
                <Navbar.Brand style={{fontWeight:"500"}}>
                    myFocus
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end" style={{color:"white"}}>
                    <BsFillGearFill style={{width:"1.4em", height: "1.4em", marginRight: "1em"}}/>
                    <IoStatsChartSharp style={{width:"1.4em", height: "1.4em", marginRight: "1em"}}/>
                    <BiUserCircle style={{width:"1.6em", height: "1.6em"}}/>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Nav;