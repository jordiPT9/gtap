import React from 'react';
import { Radio } from 'antd';

const TopNav = ({ selectedButton, handleRadioChange }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 10, padding: 10, backgroundColor: "#001529" }}>
      <Radio.Group value={selectedButton} onChange={handleRadioChange}>
        <Radio.Button value="lprconnect" style={{ fontWeight: selectedButton === 'lprconnect' ? 'bold' : '' }}>
          LPRConnect
        </Radio.Button>
        <Radio.Button value="nexocount" style={{ fontWeight: selectedButton === 'nexocount' ? 'bold' : '' }}>
          Nexocount
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default TopNav;
