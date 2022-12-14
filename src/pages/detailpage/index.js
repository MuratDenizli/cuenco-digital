import { useNavigate, useParams } from "react-router-dom";
import './index.css';
import chevronLeft from './../../assets/icons/chevron-left-solid.svg';
import timer from './../../assets/icons/timer.svg';
import price from './../../assets/icons/price.svg';
import edit from './../../assets/icons/edit.svg';
import cuenco from './../../assets/images/cuenco-text.svg';
import cuencoData from './../../data/cuenco-digital.json'
import { useEffect } from "react";

function Detailpage() {
    const { id } = useParams();
    const data = getItem(id);
    const navigate = useNavigate();

   

    function getItem(id) {
        let result = {};
        for (let i = 0; i < cuencoData.data.length; i++) {
            const element = cuencoData.data[i];
            const res = element.list.find(t => t.id == id)
            if (res) {
                result = res;
                break;
            }
        }
        return result;
    }

    return (
        <div>
            <div className="header">
                <div className='icon-arrow'>
                    <img className='chevron-left' src={chevronLeft} alt='left' onClick={() => { navigate(-1) }} />
                </div>
                <img className='cuenco-text' src={cuenco} alt='cuenco-text' />
            </div>
            <div className="detail-content">
                <img className="photo" src={data.img}></img>
                <div className="product">
                    <span className="name">{data.name}</span>
                    <span className="desc">{data.description}</span>
                </div>
                <div className="detail">
                    <div className="detail-box">
                        <img className="icon" src={timer}></img>
                        <span className="detail-desc">Hazırlanma Süresi: {data.time}dk</span>
                    </div>
                    <div className="detail-box">
                        <img className="icon" src={price}></img>
                        <span className="detail-desc">Ücret: {data.price} <span className='price-icon'>&#x20BA;</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailpage;