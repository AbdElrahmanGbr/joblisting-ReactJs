import Header from './components/header';
import data from './assets/database/data.json'
import JobBoard from "./components/JobsBoard";
import {useEffect, useState} from "react";

function App() {
    const [jobs, setJobs] = useState([]);
    useEffect(() =>{
        setJobs(data);
    },[]);

    console.log(jobs);
  return (
    <>
      <Header />
        {jobs.length === 0 ?(
            <p>Fetching jobs data..</p>
        ) : (
            jobs.map((job) =>  <JobBoard job={job} key={job.id} /> )
        )}
    </>
  );
}

export default App;
