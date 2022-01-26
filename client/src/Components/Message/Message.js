import React from 'react';
import './Message.css';

const getStyle = (props) => {
  let baseClass = 'alert-';
  if(props.message.msgError){
    baseClass += 'danger';
  }else{
    baseClass += 'primary';
  }
  return baseClass;
}

const Message = props => {
  return (
    <div className={getStyle(props)} role="alert">
      {props.message}
    </div>
  )
}

export default Message
