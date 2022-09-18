import './index.css';

import logo from './../../assets/images/yemek.jpeg';

function Box(props) {
    return (
        <div className='box'>
            <div className='img'>
                <img src={logo}></img>
            </div>
            <div className='content'>
                <span className='name'>Fried Chicken</span>
                <span className='description'>Golden brown fried Chicken</span>
                <div className='price-area'>
                    <span className='price-icon'>&#x20BA;</span>
                    <span className='price'> 100</span>
                </div>
            </div>
        </div>
    );
}

export default Box;