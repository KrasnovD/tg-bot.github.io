import React, { useState } from 'react';
import Logo from '../../images/hardWorkers.jpg'
const MainPage = () => {
  const [clickerValue, updateClickerValue] = useState(0);
  return (
      <div className="container">
        <div className="clickerParent rounded mt-4">
          <div className="clickerDisplay d-flex align-items-center justify-content-center border border-secondary rounded display-2">
            {clickerValue}
          </div>
          <div className="clickerButtonContainer d-flex flex-row">
            <button
                className=""
                onClick={() => updateClickerValue(clickerValue + 1)}
            >
              <img src={Logo}  alt={'Logo'} className="w-100 h-100 rounded-full "/>
            </button>
          </div>
        </div>
      </div>
  )
}

export default MainPage;
