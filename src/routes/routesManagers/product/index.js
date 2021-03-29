import React, {Component} from 'react';
import {Button, Col, Row} from "antd";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }
    onAdd = () =>{
        console.log("onAdd");
    }

    render() {
        const {onAdd} = this;
        return (
            <div>
                <h1>Product</h1>
                <Row>
                   <Col lg={24}>
                       <Button onClick={onAdd} type="primary" className="float-right">Add ProductAddition</Button>
                   </Col>

                </Row>
            </div>
        );
    }
}

export default Product;