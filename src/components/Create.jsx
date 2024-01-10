import React, { useState } from 'react';
import Topbar from './TopBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axiosblogs from './common/Axiosblogs';

function Create() {
  // State variables to store form data
  let [name, setName] = useState('');
  let [username, setusername] = useState('');
  let [adrress, setAdrress] = useState('');
  let [image, setImage] = useState('');
  let [email, setEmail] = useState('');
  let [companyname, setCompanyName] = useState('');
  let [website, setWebsite] = useState('');

  
  let navigate = useNavigate();

  // Function to handle blog creation
  let handleCreate = async () => {
    try {
      
      let data = { name,username, adrress, image, email, companyname, website, status: true };

      
      let res = await axios.post(API_URL, data);

      
      if (res.status === 201) {
        
        toast.success('Blog Created Successfully');

       
        navigate('/dashboard');
      }
    } catch (error) {
      // Handle any errors during the blog creation process
    }
  };

  return <>
  {/* TopBar component for navigation */}
    <Topbar />
      {/* Form for creating a new blog */}
      <div className='mt-4'>
        
        <Form className='mt-4'>
          <Form.Group className="mb-3 text-center">
            <Form.Label className='fw-bold'>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="text-center fw-bold" />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className='fw-bold'>User Name</Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={(e) => setusername(e.target.value)} className="text-center fw-bold" />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className='fw-bold'>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" onChange={(e) => setAdrress(e.target.value)} className="text-center fw-bold" />
          </Form.Group>

          <Form.Group className="mb-3 text-center">
            <Form.Label className='fw-bold'>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} className="text-center fw-bold" />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className='fw-bold'>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="text-center fw-bold" />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className='fw-bold'>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} className="text-center fw-bold" />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className='fw-bold'>Website Name</Form.Label>
            <Form.Control type="text" placeholder="Website Name" onChange={(e) => setWebsite(e.target.value)} className="text-center fw-bold" />
          </Form.Group>
          <div className='text-center'>
            
            <Button variant="success" className='fw-bold' onClick={() => handleCreate()}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <div>
       
        <h2 className='text-center'>Preview</h2>
       
        {/* Display a preview of the created blog using Axiosblogs */}
        <Axiosblogs name={name} username={username} adrress={adrress} image={image} email={email} companyname={companyname} website={website} />
      </div>
    </>
}

export default Create;