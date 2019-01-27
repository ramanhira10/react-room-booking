import React from 'react';
import './RoomComponent.css';

const RoomComponent = (props) => {
  
    let isBooked = props.roomObject.isBooked;

    return (
      <div className={`col-sm-3 room ${isBooked ? 'is-booked' : ''}`}>
        <div className="roomtitle">
          <input
            type="checkbox"
            onChange={() => {
                isBooked = !isBooked;
                return props.onBookingChanged(isBooked);
            }}
          /> {props.roomObject.name}
        </div>
        <div className="persons">
          <div className="adults">
            <label>Adults</label>
            <select
                disabled={props.roomObject.isBooked ? true : null}
                defaultValue={props.roomObject.adults}
                onChange={(event) => props.onAdultsChanged(parseInt(event.target.value, 10))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="childs">
            <label>Childs</label>
            <select
                disabled={props.roomObject.isBooked ? true : null}
                defaultValue={props.roomObject.childs}
                onChange={(event) => props.onChildsChanged(parseInt(event.target.value, 10))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  
  export default RoomComponent;