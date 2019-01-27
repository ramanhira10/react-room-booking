import React, {Component} from 'react';
import RoomComponent from '../RoomComponent/RoomComponent';
import './RoomList.css';

const roomListStorage = [{
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
}]
localStorage.setItem('roomList', JSON.stringify(roomListStorage));

class RoomList extends Component {
  
    state = {
      roomList: []
    };

    componentWillMount () {

      this.setState({
        roomList: JSON.parse(localStorage.getItem('roomList'))
      });
    }
    
    handleOnSubmit = (event) => {
      event.preventDefault();

      alert(JSON.stringify(this.state));
      localStorage.setItem('roomList', JSON.stringify(this.state.roomList));
    }

    updateState = (roomIndex, objToUpdate) => {
      
      let _roomList = [...this.state.roomList];
      
      _roomList[roomIndex] = Object.assign({}, _roomList[roomIndex], objToUpdate);

      this.setState({
          roomList: _roomList
      });
    }
    
    onBookingChanged = (roomIndex, isBooked) => {

      this.updateState(roomIndex, {
        isBooked: isBooked
      });
    }

    onAdultsChanged = (roomIndex, numberOfAdults) => {
      
      this.updateState(roomIndex, {
        adults: numberOfAdults
      });
    }
    
    onChildsChanged = (roomIndex, numberOfChilds) => {
      
      this.updateState(roomIndex, {
        childs: numberOfChilds
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