import { Spin } from 'antd';

const LoadingData = () => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Spin percent='auto' size="large" />
    </div>
  );
  
}

export default LoadingData