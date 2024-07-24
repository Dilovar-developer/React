import React, { Component } from "react";
import  Carousel  from "react-bootstrap/Carousel";
import image from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'


export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image}
                    alt="Rule your dream"
                    />
                    <Carousel.Caption>
                        <h3>Agency</h3>
                        <p>lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Rule your dream"
                    />
                    <Carousel.Caption>
                        <h3>Agency</h3>
                        <p>lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        )
    }
}