
import './EventCard.css';

const EventCard=()=>{
return(
    <div className="container">
        <div className="row justify-content-center rowcontent">
        <div className='col-auto event-card'>
            <div style={{padding:'7px'}}>
            <h3>Event name</h3>
            <h3>Event name</h3>
            <button className="btn btn-primary" type="submit" >Mark as attended</button>
            </div>
        </div>
        </div>
        
    </div>
)
}
export default EventCard;