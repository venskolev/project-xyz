
import React from 'react';
import Menu from '../components/Menu/Menu.js'
import Footer from '../components/Footer/Footer.js'
import LeftSidebar from '../components/Sections/LeftSidebar.js'
import RightSidebar from '../components/Sections/RightSidebar.js'
import Feed from '../components/Feed/Feed.js'

const IndexPage = () => {
  return (
    <div>
      <Menu />
      <h1>Welcome to our social network!</h1>
      <p>This is the homepage of our project.</p>
      <div style={{ display: 'flex' }}>
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
