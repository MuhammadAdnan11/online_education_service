import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomeCard(props) {
  return (
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={props.imgrsc1} />
      <Card.Body>
        <Card.Title className="fw-bolder">{props.cardTitle}</Card.Title>
        <Card.Text>
          {props.cardName}
        </Card.Text>

        <Card.Text>
          {props.cardText}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;