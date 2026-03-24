import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import img_1 from "../assets/Image/3.jpg light.jpeg"
import img_2 from "../assets/Image/2.jpg light.jpeg"
import img_3 from "../assets/Image/1.jpg light.jpeg"
import img_4 from "../assets/Image/8.jpg light.jpeg"
import img_5 from "../assets/Image/5.jpg light.jpeg"
import img_6 from "../assets/Image/6.jpg light.jpeg"

function Product() {
  return (
    <>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={img_1} />
        <Card.Body>
          <Card.Title> ITEM NO : 150 X 200 BK</Card.Title>
          <Card.Text>


            LAMP : LED <br />
            SIZE : D150MM X H1200MM <br />
            FINISH : ANTIQUE BRASS + BLACK MARBLE + WHITE MARBLE <br />
            MATERIAL : METAL + ACRYLIC <br />
            PRICE : 6500 <br />


          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img_2} />
        <Card.Body>
          <Card.Title>ITEM NO.: 2026-1SQ</Card.Title>
          <Card.Text>LAMP : 1XE14 <br />
            SIZE : W100MM X FH210MM X H1200MM  <br />
            FINISH : ANTIQUE BRASS <br />
            MATERIAL : METAL + ONYX MARBLE <br />
            PRICE : 7900
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img_3} />
        <Card.Body>
          <Card.Title> ITEM NO.: 2026-RD</Card.Title>
          <Card.Text>

            LAMP : 1XE14 <br />
            SIZE : W100MM X FH210MM X H1200MM  <br />
            FINISH : ANTIQUE BRASS <br />
            MATERIAL : METAL + ONYX MARBLE <br />
            PRICE : 7900 <br />

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
 <CardGroup>

      <Card>
        <Card.Img variant="top" src={img_4} />
        <Card.Body>
          <Card.Title> ITEM NO : 150 X 200 BK     </Card.Title>
          <Card.Text>


            LAMP : LED <br />
            SIZE : D150MM X H1200MM <br />
            FINISH : ANTIQUE BRASS + BLACK MARBLE + WHITE MARBLE <br />
            MATERIAL : METAL + ACRYLIC <br />
            PRICE : 6500 <br />


          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img_5} />
        <Card.Body>
          <Card.Title>ITEM NO.: 2026-1SQ</Card.Title>
          <Card.Text>LAMP : 1XE14 <br />
            SIZE : W100MM X FH210MM X H1200MM  <br />
            FINISH : ANTIQUE BRASS <br />
            MATERIAL : METAL + ONYX MARBLE <br />
            PRICE : 7900
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img_6} />
        <Card.Body>
          <Card.Title> ITEM NO.: 2026-RD</Card.Title>
          <Card.Text>

            LAMP : 1XE14 <br />
            SIZE : W100MM X FH210MM X H1200MM  <br />
            FINISH : ANTIQUE BRASS <br />
            MATERIAL : METAL + ONYX MARBLE <br />
            PRICE : 7900 <br />

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
)
}


export default Product