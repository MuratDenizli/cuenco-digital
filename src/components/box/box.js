import './index.css';


function Box(props) {
    const { name, description, price, img } = props.data;
    return (
        <div className='box'>
            <div className='img'>
                <img src={img}></img>
            </div>
            <div className='content'>
                <span className='name'>{name}</span>
                <span className='description'>{description}</span>
                <div className='price-area'>
                    <span className='price-icon'>&#x20BA;</span>
                    <span className='price'> {price}</span>
                </div>
            </div>
        </div>
    );
}

export default Box;