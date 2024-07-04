import React, {useState} from 'react';
import Logo from '../../images/hardWorkers.jpg'
import Boosts from '../BoostsModal/Boosts';
import Upgrades from '../UpgradesModal/Upgrades';

const MainPage = () => {
    const [clickerValue, updateClickerValue] = useState(0);
    const [isOpenB, updateStatusB] = useState(false);
    const [isOpenU, updateStatusU] = useState(false);
    return (
        <div className="container">
            <div className="clickerParent rounded mt-4">
                <div
                    className="clickerDisplay d-flex align-items-center justify-content-center border border-secondary rounded display-2">
                    {clickerValue}
                </div>
                <div className="clickerButtonContainer d-flex flex-row">
                    <button
                        className=""
                        onClick={() => updateClickerValue(clickerValue + 1)}
                    >
                        <img src={Logo} alt={'Logo'} className="w-100 h-100 rounded-full "/>
                    </button>
                </div>
                <div>
                    <button
                        className="w-20 h-10 mx-1 border rounded border-black bg-white"
                        onClick={() => updateStatusB(true)}
                    >
                        Boosts
                    </button>
                    <button
                        className="w-20 h-10 mx-1 border rounded border-black bg-white"
                    >
                        Refs
                    </button>
                    <button
                        className="w-20 h-10 mx-1 border rounded border-black bg-white"
                    >
                        Tasks
                    </button>
                    <button
                        className="w-20 h-10 mx-1 border rounded border-black bg-white"
                        onClick={() => updateStatusU(true)}
                    >
                        Upgrades
                    </button>
                </div>
                <Boosts open={isOpenB} close={() => updateStatusB(false)}/>
                <Upgrades open={isOpenU} close={() => updateStatusU(false)}/>
            </div>
        </div>
    )
}

export default MainPage;
