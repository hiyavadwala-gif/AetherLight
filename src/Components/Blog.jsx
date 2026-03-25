import React from 'react'
import Card from 'react-bootstrap/Card';
import { CardGroup, Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import img_1 from "../assets/Image/Minimal Light.png"
import img_2 from "../assets/Image/BrightLight.png"
import img_3 from "../assets/Image/ECO-Frindly.png"
function Blog() {
  return (
    <>
    
      <Row>
        <Card style={{ width: '18rem' }}>

          <Card.Img variant="top" src={img_1} />
          <Card.Body>
            <Card.Title> Minimalist Lighting Ideas for Modern Homes</Card.Title>
            <Card.Text>


              A Guide to Understated Elegance When it comes to creating a stylish, clutter-free modern home,
              lighting plays a starring role. It’s not just about illumination — it’s about atmosphere, functionalit...

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img_3} />
          <Card.Body>
            <Card.Title> Eco-Friendly Illumination: How Ankur Lighting Is Leading Sustainable Manufacturing</Card.Title>
            <Card.Text>

              In today's world, luxury and design must walk hand-in-hand with responsibility.
              For the environmentally conscious homeowner, choosing lighting is no longer just about aesthetics


            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

<Col>1 of 1</Col>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img_2} />
          <Card.Body>
            <Card.Title>
              5 Ways Smart Lighting Enhances Comfort During the Winter Months</Card.Title>
            <Card.Text>

              The winter months, characterized by short, dark days and long, chilly evenings,
              demand a home environment that maximizes comfort, security, and warmth.

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Row>
    </>
  )
}

export default Blog