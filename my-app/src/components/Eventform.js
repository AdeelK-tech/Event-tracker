
import React,{useState} from 'react'
import './Eventform.css'

const Eventform = (props) => {
  const[eventname,seteventname]= useState('')
  const eventNameHandler=({target})=>{
    const value=target.value;
    seteventname(value);
    console.log(eventname)
    
  }
  const[date,setDate]=useState('');
  const dateChangeHandler=({target})=>{
    const value=target.value;
    setDate(value);
    console.log(date)
  }
  const eventSubmitHandler=(e)=>{
    e.preventDefault();
    const event={
      eventname,
      date
    }
    
    props.eventAdded(event);
    seteventname('');
    setDate('');
  }

  return (
    <div className="container ">
      <form >
        <div className="row row-content">
          <div className="form-group row ">
            <label className="col-md-2 col-form-label">Event</label>
            <div className="col-md-10">
              <input  value={eventname} className="form-control" onChange={eventNameHandler}></input>
            </div>
          </div>
          </div>
          

          <div className="row row-content">
          <div className="form-group row ">
            <label className="col-md-2 col-form-label">Date</label>
            <div className="col-md-10">
              <input type="text" value={date} className="form-control"onChange={dateChangeHandler}></input>
            </div>
          </div>
          </div>
          <div className=' offset-md-7 col-md-4 row-content'>
        <button type='submit' className='btn btn-primary' onClick={eventSubmitHandler}>Add</button>
        </div>
      </form>
    </div>
  )
}
export default Eventform
