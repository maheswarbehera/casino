import React from 'react';
import Content from './Content';
import Navbar from '../component/Navbar'
import Header from '../component/Header'
function Home() {
  return (
    <>
    <Header title='Login' />
    <Navbar />
    
    <Content/>
    </>
  );
}

export default Home;
