import React from 'react';

function FireWork() {
  const fireWork = new Array(40).fill(0);
  return (
    <div className="firework">
      {fireWork.map((_, i) => (
        <div key={i} className="c"></div>
      ))}
    </div>
  );
}

export default FireWork;
