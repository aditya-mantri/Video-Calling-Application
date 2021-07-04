import React, { useState } from 'react';
import { sendMessageUsingDataChannel } from '../../../utils/webRTC/webRTCHandler';
import MessageDisplayer from './MessageDisplayer';
import './Messenger.css';
import "../chatContent/chatContent.css";

const Messenger = ({ message ,  callerUsername }) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnKeyDownEvent = (e) => {
    if (e.keyCode === 13) {
      sendMessageUsingDataChannel(inputValue);
      setInputValue('');
    }
  };

  const handleOnSubmitPress = () => {
      sendMessageUsingDataChannel(inputValue);
      setInputValue('');
  };

  return (
    <>
       <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <p>{callerUsername}</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {message.map((mssg , idx)  => {
              return (
                <MessageDisplayer
                  animationDelay={idx + 2}
                  key={idx+1}
                  got={mssg.received}
                  msg={mssg.content}
                />
              );
            })}
            <div/>
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
             type='text'
             value={inputValue}
             onChange={(e) => { setInputValue(e.target.value); }}
             onKeyDown={handleOnKeyDownEvent}
             placeholder='Type your message'
            />
            <button onClick={handleOnSubmitPress} className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
       
    </>
  );
};

export default Messenger;
