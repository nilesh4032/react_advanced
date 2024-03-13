import React from 'react'

const ErrorEx = () => {
  let title = "title 1";
  const handleClick = () => {
    title='title 2';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      {/* title values does not chnage without the usestate because it dors not get re-rendered */}
      <button type="button" className='btn' onClick={handleClick}>change title</button>
    </React.Fragment>
  );
}

export default ErrorEx
