import { Container, Modal} from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import last7Days from "./Utils";

Chart.register(...registerables);
Chart.defaults.plugins.legend.display = false;

function StatsModal(props) {


  return (
    <Modal show={props.show} onHide={props.handleClose} style={{  }} centered>
      <Modal.Header closeButton>
        <Modal.Title><h1 style={{margin: 0}}>Statistics</h1></Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Container >
                <Line data={{
                    labels: last7Days(),
                    datasets: [{
                      data: [10, 5, 3.5, 7, 8, 6, 0],
                      fill: false,
                      borderColor: 'rgb(75, 192, 192)',
                      tension: 0.4
                    }]
                }}/>

            </Container>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  )


}





export default StatsModal;