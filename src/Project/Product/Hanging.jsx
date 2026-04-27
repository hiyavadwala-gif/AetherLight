import React, { useState } from 'react'
import Nevbar from '../Navbar'
import Footer from '../Footer'
import Image from 'react-bootstrap/Image';
import HeadarImg from '../../assets/Hanging(1).png';
// import Cart_1 from '../../assets/hanging_cart_1.png';
// import Cart_2 from '../../assets/hanging_cart_2.png';
// import Cart_3 from '../../assets/hanging_cart_3.png';
// import Cart_4 from '../../assets/hanging_cart_4.png';
// import Cart_5 from '../../assets/hanging_cart_5.png';
// import Cart_6 from '../../assets/hanging_cart_6.png';
// import Cart_7 from '../../assets/hanging_cart_7.png';
// import Cart_8 from '../../assets/hanging_cart_8.png';
// import Cart_9 from '../../assets/hanging_cart_9.png';
// import Cart_10 from '../../assets/hanging_cart_10.png';
// import Cart_11 from '../../assets/hanging_cart_11.png';
// import Cart_12 from '../../assets/hanging_cart_12.png';
// import Cart_13 from '../../assets/hanging_cart_13.png';
// import Cart_14 from '../../assets/hanging_cart_14.png';
// import Cart_15 from '../../assets/hanging_cart_15.png';
import Card from 'react-bootstrap/Card';
import '../../Hanging_page.css'
import Sidebar from '../Sidebar';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';


function Hanging() {

    const [products, setProducts] = useState([]);



    axios.get("http://localhost:3000/products")
        .then((res) => setProducts(res.data))



    return (
        <>
            <Nevbar />

            <div className='header'>
                <Image src={HeadarImg} />
            </div>

            <section className='d-flex'>
                <Sidebar />
                <div>
                    <div className='d-flex justify-content-between carts d-flex'>
                        {products.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price">
                                            FROM {item.price}
                                        </Card.Text>
                                        <Link to="/addcart"><button className='cart_button'>Add to Cart</button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                    <div className='d-flex justify-content-between carts d-flex'>
                        {products.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price" >
                                            FROM {item.price}
                                        </Card.Text>
                                        <button className='cart_button'>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                    <div className='d-flex justify-content-between carts d-flex'>
                        {products.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price">
                                            FROM {item.price}
                                        </Card.Text>
                                        <button className='cart_button'>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                    <div className='d-flex justify-content-between carts d-flex'>
                        {products.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price">
                                            FROM {item.price}
                                        </Card.Text>
                                        <button className='cart_button'>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                    <div className='d-flex justify-content-between carts d-flex'>
                        {products.map((item) => (
                            <Col md={3} key={item.id}>
                                <Card className="custom-card">
                                    <div className="image-wrapper">
                                        <Card.Img variant="top" src={item.image} />
                                    </div>

                                    <Card.Body className="text-center">
                                        <Card.Title className="product-title">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="price">
                                            FROM {item.price}
                                        </Card.Text>
                                        <button className='cart_button'>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Hanging