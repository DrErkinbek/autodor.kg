import React, { useContext, useEffect } from 'react';
import AccessoryContext from '../../context/accessory/AccessoryContext';
import PaginateContext from '../../context/pagination/PaginateContext';
import Spinner from '../layout/Spinner';
import Cookies from 'js-cookie';

const Accessories = () => {
    const accessoryContext = useContext(AccessoryContext);
    const paginateContext = useContext(PaginateContext);

    const { loading, getAccessories } = accessoryContext;
    const { currentAccessories } = paginateContext;
    
    useEffect(() => {
        Cookies.set('servingAccessories', 'keepServingAccessories=true', 
        { secure: true, expires: 7, path: '/accessories' });
        getAccessories();
        // eslint-disable-next-line
    }, []);

    if(loading){
        return <Spinner />
    } else {
        return(
            <div className="row">
                {currentAccessories.map(accessory => (
                    <div className="col s12 m3 l3 xl3" key={accessory._id}>
                        <div className="card z-depth-4">
                            <div className="card-image">
                                <a href={`/accessories/${accessory.productCode}`}>
                                    <img alt="" src={accessory.imageUrl} />
                                </a>
                            </div>
                            <div className="card-content">
                                <a href={`/accessories/${accessory.productCode}`}>
                                    <p className="center product-title">{accessory.name}</p>
                                </a>
                                <p className="center">{accessory.price} сом</p>
                            </div>
                            <div className="card-action">
                                <div className="center">
                                    <a href={`/accessories/${accessory.productCode}`} 
                                    className="blue btn-small center">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Accessories;