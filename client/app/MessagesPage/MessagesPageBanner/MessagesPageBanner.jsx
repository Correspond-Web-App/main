import React from 'react';
import './MessagesPageBanner.css';

const MessagesPageBanner = () => {
  return (
    <div id="messages-page-banner-container" >

      <a href="#" className="messages-page-back">
        <button type="button">
          <i className="fas fa-arrow-left messages-page-back-arrow" />
        </button>
      </a>

      <img className="current-pal-profile-pic" src="https://wondersinthedark.files.wordpress.com/2012/09/the-big-lebowski-1.jpg" alt="Pal's Profile Picture"></img>

      <div className="current-pal-info" >
        <p className="pal-name">El Duderino</p>
        <p className="pal-bio">That's, like, your bio man.</p>
      </div>

      <div className="messages-page-banner-icons">
        <button type="button"><ion-icon name="add-circle-outline"></ion-icon></button>
        <a href="#" ><button type="button"><ion-icon name="notifications-circle-outline"></ion-icon></button></a>
        <a href="#" ><ion-icon name="ellipse-outline"></ion-icon></a>
      </div>

    </div>
  );
};

export default MessagesPageBanner;