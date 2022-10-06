import React, {useState,useEffect} from 'react'
import Loading from './Loading';
import './App.css';
const url = "https://course-api.com/react-tabs-project";
function App() {
  const  [loading,setLoading] = useState(true)
  const [getJobs,setGetJobs] = useState([])
  const [value, setValue] = useState(0)
  const fetchJobs = async()=>{
    const res = await fetch(url)
    const jobs = await res.json()
    setGetJobs(jobs)
    setLoading(false)
  }
  useEffect(()=>{
    fetchJobs()
  },[])
  if(loading){
    return <Loading/>
  }
    const { company, dates, duties, title } = getJobs[value];
  return (
    <section className="section">
      <div className='title'>
    <h2>experience</h2>
    <div className='underLine'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {getJobs.map((job, index)=>{
            return <button key={job.id} onClick={()=>setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
              {job.company}
            </button>
          })}
        </div>
        {/*job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty,index)=>{
            return (
              <div key={index} className='job-desc'> <span className='job-icon'> >>> </span>
              <p>{duty}</p>
              </div>
          )})}
        </article>
      </div>
    </section>
  );
}

export default App;

