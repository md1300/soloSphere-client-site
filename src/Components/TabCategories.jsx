import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'
const TabCategories = () => {
       const [jobs,setJobs]=useState([])
        useEffect(()=>{
          const getData=async()=>{
            const {data}=await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
          }
          getData()
        },[])

    return (
        <div>              
             <Tabs >
                <div className='container px-6 py-7 mx-auto'>
                    <h1 className='text-2xl font-semibold text-center text-gray-800 lg:text-3xl'>
                        Browser jobs by catagories
                    </h1>
                    <p className='max-w-2xl mx-auto my-6 text-center text-gray-500'> three catagories are available for the time being,three are web development ,graphics design, digital marketing,Browse them by clicking on the tab below</p>
                    <div className='flex items-center justify-center'>
                   <TabList>
                     <Tab>web development</Tab>
                     <Tab>graphics design</Tab>
                     <Tab>digital marketing</Tab>
                   </TabList>
                   </div>
               
                   <TabPanel>
                     <div className='grid grid-cols-1 gap-8 mt-8 lx:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                      {
                        jobs.filter(f=>f.category==="Web Development").map(job=><JobCard key={job._id} job={job}></JobCard>)
                      }
                     </div>
                   </TabPanel>
                   <TabPanel>
                   <div className='grid grid-cols-1 gap-8 mt-8 lx:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                      {
                        jobs.filter(f=>f.category==="Graphics Design").map(job=><JobCard key={job._id} job={job}></JobCard>)
                      }
                     </div>
                   </TabPanel>
                   <TabPanel>
                       <div className='grid grid-cols-1 gap-8 mt-8 lx:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                         {
                            jobs.filter(f=>f.category==="Digital Marketing").map(job=><JobCard key={job._id} job={job}></JobCard>)
                         }
                       </div>
                   </TabPanel>
                    </div>
               
             </Tabs>
        </div>
    );
};

export default TabCategories;