import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default function CardComponent(props) {
   var imageCard = props.isImageCard? (
   <Card className="bg-dark text-white"  >
      <Card.Img src={props.data.image} alt="Card image" style={{opacity:'0.2',height:'90%'}}/>
      <Card.ImgOverlay>
        <Card.Title style={props.data.title_style}>{props.data.title}</Card.Title>
        <Card.Text style={props.data.description_style}>
         {props.children}
        </Card.Text>
        <div style={{textAlign:'center',marginTop:'50px'}}>
          {props.data.isButton1 ?  
          (<Button  variant="primary" style={props.data.button_style}>{props.data.btnTitle}
          </Button>):null}
          {props.data.isButton2 ?  
          (<Button  variant="primary" style={props.data.button_style}>{props.data.btnTitle2}
          </Button>):null}
        </div>

        <Card.Text style={props.data.description2_style}>{props.data.description2}</Card.Text>
      </Card.ImgOverlay>
 </Card>):null;


  let smallCards = props.isSmallCard? (
  <Card style={{ width: '18rem',boxShadow:'10px 5px 5px 5px grey' }}>
  <Card.Img variant="top" src={props.image} style={{height:'150px'}}/>
  <Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text>
      {props.description}
  </Card.Text>
  {props.isList ?
  (   <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.listData.des1}</ListGroup.Item>
        <ListGroup.Item>{props.listData.des2}</ListGroup.Item>
      </ListGroup>
  ):null}
  {props.isButton ?(<Button variant="primary">{props.btnName}</Button> ):null}
  </Card.Body>
</Card>):null




  return (
    <>
    {props.isSmallCard? smallCards:null}
    {props.isImageCard? imageCard:null}
    </>
)}
