
import React, { useEffect } from 'react';
import logo from '../resources/logo.png';
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList';
import * as webRTCHandler from '../utils/webRTC/webRTCHandler';
import * as webRTCGroupHandler from '../utils/webRTC/webRTCGroupCallHandler';
import DirectCall from './components/DirectCall/DirectCall';
import { connect } from 'react-redux';
import DashboardInformation from './components/DashboardInformation/DashboardInformation';
import { callStates , setChatVisible } from '../store/actions/callActions';
import GroupCallRoomsList from './components/GroupCallRoomsList/GroupCallRoomsList';
import GroupCall from './components/GroupCall/GroupCall';
import LocalVideoView from './components/LocalVideoView/LocalVideoView';
import GroupCallButton from './components/GroupCallButton/GroupCallButton';
import * as webRTCGroupCallHandler from '../utils/webRTC/webRTCGroupCallHandler'
import Messenger from './components/Messenger/Messenger';
import './Dashboard.css';


const Dashboard = ({ callerUsername , username, callState , localStream, groupCallActive, remoteStream , chatvisible, message }) => {
  useEffect(() => {
    webRTCHandler.getLocalStream();
    webRTCGroupHandler.connectWithMyPeer();
  }, []);

  
  const createRoom = () => {
    webRTCGroupCallHandler.createNewGroupCall();
  };

  const leaveRoom = () => {
    webRTCGroupCallHandler.leaveGroupCall();
  };

  return (
    
    <body>
    <nav class="navbar">
   {!chatvisible && 
   <>
   <span class="name">Active Users</span>
       <ul class="navbar-nav">
          <ActiveUsersList />
        </ul>
      <span class="name">Personal Rooms</span>
    <ul class="navbar-nav">
        <GroupCallRoomsList />
     </ul> 
    
    <span>
    {!groupCallActive && localStream && callState !== callStates.CALL_IN_PROGRESS &&
         <GroupCallButton onClickHandler={createRoom} label='Create Room' />}
         
         {groupCallActive && <GroupCallButton onClickHandler={leaveRoom} label='Leave room' />} 
         </span>

        <div class="navbar-footer">
        <a href="#modal-tabbed"> <img class="image-documents" src='https://image.flaticon.com/icons/png/512/1261/1261519.png' alt="documents" width='210px'/></a>
        </div>
        </>
        }
        {remoteStream && chatvisible && callState === callStates.CALL_IN_PROGRESS && <Messenger callerUsername={callerUsername} username={username} message={message} /> }
    </nav>
   <main>
        <h1>zZ_Callz</h1>
        <div class="charts-wrapper">
        <section role="credit-card">
            <LocalVideoView localStream={localStream} />
        </section>
            <section role="chart" class="exchange-rates">

                <DirectCall />
            <GroupCall />
          {callState !== callStates.CALL_IN_PROGRESS && <DashboardInformation username={username} />}
            </section>

            
            
<div class="modal" id="modal-tabbed">
  <div class="modal-content">
    <a href="#" class="modal-close" title="Close Modal">X</a>
    <h3>How To?</h3>
    <div class="modal-area">
      <p>Getting Updated...</p>
    </div>
  </div>
</div>

        
       
        </div>
    </main>
</body>
             
  );
};


const mapStateToProps = ({ call, dashboard }) => ({
  ...call,
  ...dashboard
});

function mapDispatchToProps (dispatch) {
  return {
    setChatEnabled: (enabled) => dispatch(setChatVisible(enabled))
  };
}
export default connect(mapStateToProps)(Dashboard);
