import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/storeItem";
import storeItems from "../data/item.json"

export function Store () {
 return( <>
    <h1>Store</h1>
    <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map(item=>( 
            // <Col>
            //     Hi Bro
            // </Col>
            <Col key={item.id}>
                {/* {JSON.stringify(item)} */}
                <StoreItem {...item} />
                </Col>
        ))}
    </Row>
 </>)
}