import logo from './../../logo.svg';
import './index.css';

function Loading() {
    return (
        <div className='loadingBackground'>
            <img src={logo} className="logo" alt="logo" />
        </div>

    );
}

export default Loading;