import React from 'react';
import chart1 from '../images/Chart.png'
import chart2 from '../images/Chart (1).png'
import chart3 from '../images/piechart.png'

function Graph() {
  return (
    <>
       <div className='pb-5 mb-5'>
      <div className='ms-5'>
        <img src={chart1} className='img-fluid' alt="" />
      </div>
      <div className='ms-5'>
        <img src={chart2} className='img-fluid' alt="" />
      </div>
      <div className='mb-5 pb-5' style={{ textAlign: "center" }}>
        <img src={chart3} className='img-fluid' alt="" />
      </div>
    </div>
    </>
  );
}

export default Graph;
