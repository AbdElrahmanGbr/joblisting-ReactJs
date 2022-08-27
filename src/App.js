import Header from './components/header';
import data from './assets/database/data.json'
import JobBoard from "./components/JobsBoard";
import {useEffect, useState} from "react";

function App() {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState([]);
    useEffect(() => {
        setJobs(data);
    }, []);

    const filterFunc = ({role, level, tools, languages}) => {
        if (filters.length === 0) {
            return true;
        }
        const tags = [role, level];
        if (tools) {
            tags.push(...tools);
        }
        if (languages) {
            tags.push(...languages);
        }
        return tags.some(tag => filters.includes(tag));
    };

    const handleTagClick = (tag) => {
        setFilters([...filters, tag]);
    }

    const filteredJobs = jobs.filter(filterFunc);
    return (
        <>
            <Header/>

            {jobs.length === 0 ? (
                <p>Fetching jobs data..</p>
            ) : (
                filteredJobs.map((job) => <JobBoard job={job} key={job.id} handleTagClick={handleTagClick}/>)
            )}
        </>
    );
}

export default App;
