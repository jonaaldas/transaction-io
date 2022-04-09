import React, {useContext, useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import '/Users/jonathanaldas/Documents/CODE/react-practice/transactions-io2/transactions-io-2/src/components/Add-Client/AddClient.css'
import {Client} from '../../context/DataContext'
import { v4 } from 'uuid';

export default function AddClient() {
    const {state, updateTask, addClient} = useContext(Client)
    const navigate = useNavigate();
    
    const id = useParams().id;

    const [formClient, setFormClient] = useState({
        id: '',
        transaction: '',
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        price: '',
        Buyer: [
            {
                id: v4(),
                action: 'Attorney Review Started',
                checked: true
            },
            {
                id: v4(),
                action: 'Attorney Review Ended',
                checked: true
            },
            {
                id: v4(),
                action: 'Inspection Was ordered',
                checked: false
            },
            {
                id: v4(),
                action: 'Apprasial was ordered',
                checked: false
            },
            {
                id: v4(),
                action: 'Closed',
                checked: false
            }    
        ],
        Seller: [
                    {
                        id: v4(),
                        action: 'Listing Paper Work singed ',
                        checked: false
                    },
                    {
                        id: v4(),
                        action: 'Photos has been ordered',
                        checked: false
                    },
                    {
                        id: v4(),
                        action: 'Listing is live',
                        checked: false
                    },
                    {
                        id: v4(),
                        action: 'Showings has started',
                        checked: false
                    },
                    {
                        id: v4(),
                        action: 'Got an offer',
                        checked: false
                    }
                ] 
      });


      function handleChange(e){
        setFormClient(prevFormClient => {
                return {
                    ...prevFormClient,
                    [e.target.name]: e.target.value, 
                  }
          })
      }

      function handleSubmitClient(e){
        e.preventDefault();
        if(formClient.id){
            updateTask(formClient)
        } else {
            addClient(formClient, formClient.price);
        }
        navigate({ pathname: '/' })
    }



    // useEffect
    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        const taskFound = state.find((client) => client.id == id)

        if(taskFound){
          setFormClient(taskFound)
        }

      }, [id, state])

  return (
    <div className='addClientCont'>
        <h3 className="text">
           { formClient.id ? 'Edit Client' : 'Add New Transaction'}
            </h3>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Type Of Transaction</Form.Label>
                <Form.Select 
                    aria-label="Default select example"
                    onChange={handleChange}
                    name='transaction'
                    value={formClient.transaction}
                >
                <option>Select Type of transaction</option>
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>                    
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Clients Name</Form.Label>
                <Form.Control 
                    type="Text" 
                    placeholder="Clients Name" 
                    onChange={handleChange}
                    name='name'
                    value={formClient.name}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Clients Address</Form.Label>
                <Form.Control 
                    type="Text" 
                    placeholder="Clients Address" 
                    onChange={handleChange}
                    name='address'
                    value={formClient.address}
                />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Phone Number" 
                    onChange={handleChange}
                    name='phoneNumber'
                    value={formClient.phoneNumber}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="Email" 
                    placeholder="Email" 
                    onChange={handleChange}
                    name='email'
                    value={formClient.email}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                    type="Number" 
                    placeholder="Price" 
                    onChange={handleChange}
                    name='price'
                    value={formClient.price}
                />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmitClient}>
                Enter
            </Button>
        </Form>
    </div>
  )
}
