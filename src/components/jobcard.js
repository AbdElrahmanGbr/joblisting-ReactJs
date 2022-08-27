import Jobs from '../assets/database/data.json'
export default function Jobcard() {
  return (
  <div className="container mx-auto w-2/4 bg-red-50 pb-0 pt-10">
    {
      Jobs && Jobs.map( job => {
        return(
            <div className="flex border-2 py-3 my-3 justify-between" key={job.id}>
              <div>
                <img src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0Z4IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da21bd3f53a3aafa626755318e045cc70dc40f0d/QSC_LOGO_BLUE.jpg" alt="company image" />
                {job.type}
                {job.company}
              </div>
              <div>
                {job.id}
              </div>
            </div>
        )
      })
    }
  </div>
  )
}
