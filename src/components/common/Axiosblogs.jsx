import React from 'react';
import Card from 'react-bootstrap/Card';
import { API_URL } from '../../App';

// AxiosCard component to display blog information
function Axiosblogs({ name,username, adrress, image, email, companyname, website }) {
  return (
    <div className='mx-auto my-4 d-flex justify-content-center col-11 col-md-6 col-lg-4 mx-auto col-sm-10' style={{padding:'center'}}>
      
      <Card style={{background:'rgb(241,242,244)'}}>
        <Card.Title className='text-center fw-bold'>{`Name: ${name}`}</Card.Title>
       
        <Card.Img variant="top" src={image} alt={name} title={name} />
        <Card.Body>
        
          <Card.Text className='text-center fw-bold'>
            <i>{`User Name: ${username}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center fw-bold'>
            <i>{`Address: ${adrress}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center fw-bold'>
            <i>{`Email: ${email}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center fw-bold'>
            <i>{`Company Name: ${companyname}`}</i>
          </Card.Text>
          <hr />
          <Card.Text className='text-center fw-bold'>
            <i>{`Website Name: ${website}`}</i>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Axiosblogs;