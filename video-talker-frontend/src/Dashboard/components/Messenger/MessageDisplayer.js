import React from 'react';
import "../chatContent/chatContent.css";
const MessageDisplayer = (props) => {
  
return (
  <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${props.got ? "other" : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{props.msg}</div>
          <div className="chat__meta">
        {props.got && <span>moments ago</span>}
         {!props.got && <span>Seen</span>}
          </div>
        </div>
      </div>
);


}

export default MessageDisplayer;
