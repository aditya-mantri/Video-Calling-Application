import React from 'react';

import './DashboardInformation.css';
import hi from '../../../resources/hi.png';
const DashboardInformation = ({ username }) => {
  return (
    <div >
      <span >
      <h1> {username}  <img height="170px" width="170px" src={hi} alt=''/></h1>
      </span>
      <span >
       Lets make a Call.
      </span>
    </div>
  );
};

export default DashboardInformation;
