import React, { useEffect, useState } from 'react';
import Topbar from './TopBar';
import { API_URL } from '../App';
import Axiosblogs from './common/Axiosblogs';
import axios from 'axios';
import { toast } from 'react-toastify';


function Home() {
  
  let [axiosData, setAxiosData] = useState([]);

  
  useEffect(() => {
    getAxios();
  }, []);

  
  let getAxios = async () => {
    try {
      
      let res = await axios.get(API_URL);

      
      if (res.status === 200) {
       
        toast.success('Blogs fetched Successfully!');

        
        setAxiosData(res.data.filter(e => e.status === false));
      }
    } catch (error) {
     
      toast.error('Error fetching data from the API');
    }
  };

  return <>
      <Topbar />

      <div className="container">
      <div className="row">
        
        {axiosData.map((e) => {
        
          return (
            <Axiosblogs
              name={e.name}
              username={e.username}
              adrress={e.address}
              image={e.image}
              email={e.email}
              companyname={e.companyname}
              website={e.website}
              key={e.id}
              
            />
          );
        })}
        
        </div>
      </div>
    </>
}

export default Home;