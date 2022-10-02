import './index.css';
import cuenco from './../../assets/images/cuenco-text.svg';
import chevronLeft from './../../assets/icons/chevron-left-solid.svg';
import Button from '../../components/button/button';
import Box from '../../components/box/box';
import cuencoData from '../../../src/data/cuenco-digital.json'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    const [menuData, setMenuData] = useState(cuencoData.data);
    const [active, setActive] = useState(cuencoData.data[0]);
    const [filterList, setFilterList] = useState(cuencoData.data[0].list);
    const selectedTab = localStorage.getItem('active');

    const handleAnchorClick = (event, name) => {
        event.preventDefault();
        const active = cuencoData.data.find(item => item.name === name);
        setActive(active);
        const filterList = cuencoData.data.find(item => item.name === name).list;
        setFilterList(filterList);
    };

    useEffect(() => {
        window.scroll({
            top: 20,
            left: 0,
            behavior: 'smooth',
        });
        // handleAnchorClick(event,)
    });

    return (
        <div>
            <div className="header">
                {/* <div className='icon-arrow'>
                    <img className='chevron-left' src={chevronLeft} alt='left' />
                </div> */}
                <img className='cuenco-text' src={cuenco} alt='cuenco-text' />
            </div>
            <div className='menu'>
                <div className='categories'>
                    {menuData.map((data, i) =>
                        <Button key={i} isActive={active.name === data.name} name={data.name} onClick={(e) => handleAnchorClick(e, data.name)} />
                    )}
                </div>
                <div>
                    {filterList.map((data, i) =>
                        <Link to={`detailpage/${data.id}`}>
                            <Box key={i} data={data} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Homepage;