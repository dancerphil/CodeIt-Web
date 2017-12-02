import React from 'react';

export default ({ children, style }) => {
  // const postStyle = Object.assign({ padding: '3rem', userSelect: 'none', color: 'white' }, style);
  return (
    <div className="p-5 text-white" style={Object.assign({ textAlign: 'center' }, style)}>
      {children}
    </div>
  );
};
