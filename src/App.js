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
        if (filters.includes(tag)) return;
        setFilters([...filters, tag]);
    }

    const filteredJobs = jobs.filter(filterFunc);
    const handleFilterClick = (passedFilter) => {
        setFilters(filters.filter(f => f !== passedFilter));
    }
    return (
        <>
            <Header/>
            {
                filters.length > 0 && (
                    <div className='bg-white flex shadow-md my-16 mx-10 p-6 rounded'>

                        {filters.map((filter) => <span onClick={() => handleFilterClick(filter)}
                                                       className='cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 rounded sm:mb-0'>
                            <span className='text-teal-500 bg-teal-100 p-2'>{filter}</span>
                            <span className='bg-teal-500 text-teal-100 p-2'>✕</span>
                            </span>
                        )}
                    </div>
                )}
            {jobs.length === 0 ? (
                <p>Fetching jobs data..</p>
            ) : (
                filteredJobs.map((job) => <JobBoard job={job} key={job.id} handleTagClick={handleTagClick}/>)
            )}
        </>
    );
}

export default App;
