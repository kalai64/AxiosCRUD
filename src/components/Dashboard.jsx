import React, { useEffect, useState } from 'react';
import TopBar from './Topbar';
import { API_URL } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Dashboard() {
    // Navigate hook for programmatic navigation
    let navigate = useNavigate();

    // State to store fetched data from the API
    let [axiosData, setAxiosData] = useState([]);


    // Effect hook to fetch data from the API on component mount
    useEffect(() => {
        getAxios();
    }, []);

   // Function to fetch data from the API
    let getAxios = async () => {
        try {
            
            let res = await axios.get(API_URL);

            
            if (res.status === 200) {
               
                setAxiosData(res.data);
            }
        } catch (error) {
            
            toast.error("Error fetching data from the API");
        }
    };

    // Function to toggle the status of a blog
    let toggleBlog = async (e) => {
        try {
           
            e.status = !e.status;

           
            let res = await axios.put(`${API_URL}/${e.id}`, e);

            
            if (res.status === 200) {
               
                toast.success('Blog Status Changed!');
                getAxios();
            }
        } catch (error) {
           
            toast.error("Error toggling blog status");
        }
    };

   // Function to handle blog deletion
    let handleDelete = async (id) => {
        try {
           
            let res = await axios.delete(`${API_URL}/${id}`);
                      
            if (res.status === 200) {
                
                toast.success('Blog Deleted Successfully!');
                getAxios();
            }
        } catch (error) {
            
            toast.error("Internal Server Error");
        }
    };

    return <>  
    {/* TopBar component for navigation */}
          <TopBar />

            <div>
               
                <Table responsive bordered striped hover className="overflow-auto mt-4">
                    <thead>
                        <tr >
                         
                            <th className='text-center fw-bold' style={{color:'blue'}}>#</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>Name</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>User Name</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>Address</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>Image</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>Email</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>Company Name</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>Website Name</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>Status</th>
                            <th className='text-center fw-bold' style={{color:'blue'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping through axiosData to render each blog */}
                        {axiosData.map((e, i) => {
                           
 
                            return (
                                <tr key={i}>
                                    
                                    <td className='text-center'><b>{i + 1}</b></td>
                                    <td className='text-center'><i><b>{e.name}</b></i></td>
                                    <td className='text-center'><i><b>{e.username}</b></i></td>
                                    <div style={{ width: "300px", overflow: "hidden", whiteSpace: "wrap", textOverflow: "ellipsis" }}>
                                        <td className='d-flex justify-content-center'>
                                            
                                            <i className='text-center'><b>{` ${e.address}`}</b></i>
                                        </td>
                                    </div>
                                    <td className='text-center'>
                                        
                                        <img src={e.image} alt={e.name} style={{ width: "12em", height: '8em' }}  title={e.name} />
                                    </td>
                                    <td className='text-center'><i><b>{e.email}</b></i></td>
                                    <td className='text-center'><i><b>{e.companyname}</b></i></td>
                                    <td className='text-center'><i><b>{e.website}</b></i></td>
                                    <td className='text-center'>
                                        
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={e.status} onChange={() => toggleBlog(e)} />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='text-center'>
                                       {/* Edit and Delete buttons */}
                                        <Button variant="info" className='mt-2' onClick={() => navigate(`/edit/${e.id}`)}><b>Edit</b></Button>
                                        <br className="d-md-none" />
                                        <Button variant="danger" className='mt-2 mx-2' onClick={() => handleDelete(e.id)}><b>Delete</b></Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </>
}

export default Dashboard;