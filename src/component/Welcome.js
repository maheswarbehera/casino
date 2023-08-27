import React from 'react';

function Welcome(props) {
  return (
    <div className='welcome-bg'>
      <div className="container">

        <h4 className='welcome py-3 m-0 text-center'>WELCOME TO OUR <span style={{color:'#FAFF00'}}>{props.title}</span></h4>
      </div>
    </div>
  );
}

export default Welcome;
