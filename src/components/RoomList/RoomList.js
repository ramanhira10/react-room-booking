import React, {Component} from 'react';
import RoomComponent from '../RoomComponent/RoomComponent';
import './RoomList.css';

class RoomList extends Component {
  
    state = {
      roomList: [
        {
          id: 1,
          name: 'Room 1',
          adults: 2,
          childs: 2,
          isBooked: false
        }, {
          id: 2,
          name: 'Room 2',
          adults: 2,
          childs: 2,
          isBooked: false
        }, {
          id: 3,
          name: 'Room 3',
          adults: 2,
          childs: 2,
          isBooked: false
        }, {
          id: 4,
          name: 'Room 4',
          adults: 2,
          childs: 2,
          isBooked: false
        }
      ]
    };
    
    handleOnSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }
    
    onBookingChanged = (roomIndex, isBooked) => {
        
      let _roomList = [...this.state.roomList];
      
      _roomList[roomIndex] = Object.assign({}, _roomList[roomIndex], {
        isBooked: isBooked
      });
      
      this.setState({
          roomList: _roomList
      });
    }
    
    onAdultsChanged = (roomIndex, numberOfAdults) => {
      
      let _roomList = [...this.state.roomList];
      
      _roomList[roomIndex] = Object.assign({}, _roomList[roomIndex], {
        adults: numberOfAdults
      });
      
      this.setState({
          roomList: _roomList
      });
    }
    
    onChildsChanged = (roomIndex, numberOfChilds) => {
      
      let _roomList = [...this.state.roomList];
      
      _roomList[roomIndex] = Object.assign({}, _roomList[roomIndex], {
        childs: numberOfChilds
      });
      
      this.setState({
          roomList: _roomList
      });
    }
    
    render () {
      
      return (
        <div className="row room-list">
          <form onSubmit={this.handleOnSubmit}>
            {this.state.roomList.map((room, index) => {
              return (
                <RoomComponent
                  key={room.id}
                  roomObject={room}
                  onBookingChanged={(isBooked) => {this.onBookingChanged(index, isBooked)}}
                  onAdultsChanged={(adults) => {this.onAdultsChanged(index, adults)}}
                  onChildsChanged={(childs) => {this.onChildsChanged(index, childs)}}
                />
              );
            })}
            <div className="row foot">
              <div className="col-sm-3">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </div>
        </form>
      </div>
    );
    }
  }

  export default RoomList;