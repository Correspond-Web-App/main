import React, { useState, useEffect } from 'react';
import './NewMessageInput.css';
import FilePicker from './FilePicker.jsx';

const NewMessageInput = ({ handleAddMessage }) => {
  const [currentMessageText, setCurrentMessageText] = useState('');
  const [showingFilePicker, showFilePicker] = useState(false);

  return (
    <form id="new-message-form" >
      <input
        type='text'
        id='new-message-input'
        onChange={(e) => setCurrentMessageText(e.target.value)}
      >
      </input>
      <button
        type='submit'
        id="submit-new-message"
        onClick={(e) => {
          e.preventDefault();
          if (currentMessageText.length) {
            handleAddMessage(currentMessageText);
            setCurrentMessageText('');
          }
        }
        }>
        <i className="fas fa-pen-nib" />
      </button>
      {
        showingFilePicker ? <FilePicker /> : null
      }
      <button id="new-message-upload"
        onMouseEnter={() => {showFilePicker(false)}}
        onClick={(e) => {e.preventDefault(); showFilePicker(true)}}>
        <i class="fas fa-upload"></i>
      </button>
    </form>
  );
};

export default NewMessageInput;