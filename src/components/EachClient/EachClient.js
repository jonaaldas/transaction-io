import React, {useContext} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
// import '/Users/jonathanaldas/Documents/CODE/react-practice/transactions-io2/transactions-io-2/src/components/EachClient/EachClient.css'
import '../../components/EachClient/EachClient.css'
import {Client} from '../../context/DataContext'
import {  useParams } from 'react-router-dom';

export default function EachClient() {

    const {state, handleChecked1} = useContext(Client)
    const clientID = useParams();
    const eachClient = state.filter(function (client) {
            // eslint-disable-next-line eqeqeq
            return client.id == clientID.id;
        })
    console.log(eachClient[0])

    function whichQuestions(){
        if(eachClient[0].transaction === 'Seller'){
            
             const sellerQ = eachClient[0].Seller.map(seller => {
                function handleChecked(e){
                    handleChecked1(eachClient[0].id, seller.id)
                }
                return (
                    <div key={seller.id}>
                        <Col>
                            <div className="actions-cont">
                                <hr/>
                                <Row id='input-row'>
                                    <input 
                                        type="checkbox" 
                                        id="action" 
                                        name="action"
                                        checked={seller.checked}
                                        onChange={handleChecked}
                                        />
                                    <label>{seller.action}</label>
                                </Row>
                            </div>
                        </Col>
                    </div>
                )
            })
            return sellerQ
        } else if(eachClient[0].transaction === 'Buyer'){
            const buyerQ = eachClient[0].Buyer.map(buyer => {
                function handleChecked(e){
                    handleChecked1(eachClient[0].id, buyer.id)
                }
                return (
                    <div key={buyer.id}>
                        <Col>
                            <div className="actions-cont">
                                <hr/>
                                <Row id='input-row'>
                                    <input 
                                        type="checkbox" 
                                        id="action" 
                                        name="action"
                                        checked={buyer.checked}
                                        onChange={handleChecked}
                                        />
                                    <label>{buyer.action}</label>
                                </Row>
                            </div>
                        </Col>
                    </div>
                )
            })
            return buyerQ
        }
    }
    return (
        <>
            <Container className='cont' >
                <Col>
                    <Row>
                        <p>   Transaction for: {eachClient[0].name}</p>
                    </Row>
                    <Row>
                        <p>Address: {eachClient[0].address}</p> 
                    </Row>
                    <Row>
                        <p>Phone: {eachClient[0].phoneNumber}</p>
                    </Row>
                    <Row>
                        <p>Email: {eachClient[0].email}</p>
                    </Row>
                    <Row>
                        <p>Price: {eachClient[0].price}</p>
                    </Row>
                </Col>
                <hr />
                {
                    whichQuestions()
                }
            </Container>
        </>
  )
}