import * as React from "react"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import PRODUCTS from "./constants/products"
import Card from "../Blog/Card/Card"

const Blog = () => {
    return (<Container fluid={true} className="container__blog">
                <Row>
                    {PRODUCTS.map((data) =>
                        <Col key={data.id}>
                            <Card
                                // {...data}
                                title={data.title}
                                desc={data.desc}
                                headline={data.headline}
                                image={data.image}
                                id={data.id}
                            />
                        </Col>
                    )}
                </Row>
        </Container>
    )
};
export default Blog

