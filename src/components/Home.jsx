import React, { useEffect, useState } from 'react';
import Topbar from './Topbar';
import { API_URL } from '../App';
import Axiosblogs from './common/Axiosblogs';
import axios from 'axios';
import { toast } from 'react-toastify';


function Home() {
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
       
        toast.success('Blogs fetched Successfully!');

        
        setAxiosData(res.data.filter(e => e.status === false));
      }
    } catch (error) {
     
      toast.error('Error fetching data from the API');
    }
  };

  return <>
  {/* TopBar component for navigation */}
      <Topbar />

      <div className="container">
      <div className="row">
        {/* Mapping through axiosData to render Axiosblogs for each blog */}
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