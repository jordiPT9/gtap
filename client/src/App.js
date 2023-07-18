import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';
import TopNav from './layout/TopNav';
import { lprconnectSections, nexocountSections } from './constants/sections.js';

const { Sider, Content } = Layout;

const App = () => {
  const [selectedButton, setSelectedButton] = useState('lprconnect');

  const handleRadioChange = (evt) => {
    setSelectedButton(evt.target.value);
  };

  const sidebarSections = selectedButton === 'lprconnect' ? lprconnectSections : nexocountSections;
  const sidebarTitle = selectedButton === 'lprconnect' ? 'LPRConnect' : 'Nexocount';

  return (
    <Router>
      <TopNav selectedButton={selectedButton} handleRadioChange={handleRadioChange} />

      <Layout style={{ height: '100vh' }}>
        <Sider>
          <Sidebar sections={sidebarSections} title={sidebarTitle} />
        </Sider>

        <Content style={{ margin: '20px' }}>
          <MainContent sections={sidebarSections} />
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
