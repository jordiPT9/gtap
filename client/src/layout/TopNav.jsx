import { Radio } from 'antd';

const TopNav = ({ selectedButton, handleRadioChange }) => {
  return (
    <div >
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
