import React from 'react';
import GroupCallRoomsListItem from './GroupCallRoomsListItem';
import { connect } from 'react-redux';
import './GroupCallRoomsList.css';
import lgog from '../../../resources/concall.png'

const GroupCallRoomsList = (props) => {
  const { groupCallRooms , callState } = props;
  return (
    <>
   
      {groupCallRooms.map(room => <GroupCallRoomsListItem key={room.roomId} room={room} callState={callState} />)}
     
    </>
  );
};

const mapStoreStateToProps = ({ dashboard, call }) => (
  {
    ...dashboard,
    ...call
  }
);

export default connect(mapStoreStateToProps)(GroupCallRoomsList);
//<img src={lgog} height="70px" width="70px" alt=''/>