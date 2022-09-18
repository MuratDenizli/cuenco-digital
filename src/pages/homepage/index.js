import './index.css';
import cuenco from './../../assets/images/cuenco-text.svg';
import chevronLeft from './../../assets/icons/chevron-left-solid.svg';
import Button from '../../components/button/button';
import Box from '../../components/box/box';

function Homepage() {
    return (
        <div>
            <div className="header">
                {/* <div className='icon-arrow'>
                    <img className='chevron-left' src={chevronLeft} alt='left' />
                </div> */}
                <img className='cuenco-text' src={cuenco} alt='cuenco-text' />
            </div>
            <div className='categories'>
                <Button name="Burgerler" isActive={true}/>
                <Button name="Soğuk İçecekler"/>
                <Button name="Bowl"/>
                <Button name="Sıcak İçecekler"/>
            </div>
            <div>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
        </div>
    );
}

export default Homepage;