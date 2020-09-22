import React, { useContext, useEffect } from 'react';
import AccessoryContext from '../../context/accessory/AccessoryContext';
import Spinner from '../layout/Spinner';

const Accessories = () => {
    const accessoryContext = useContext(AccessoryContext);
    const { accessories, loading, getAccessories } = accessoryContext;
    
    useEffect(() => {
        getAccessories();
        // eslint-disable-next-line
    }, []);

    if(loading){
        return <Spinner />
    } else {
        return(
            <div className="row">
                {accessories.map(accessory => (
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
                                    className="waves-effect waves-light blue btn-small center">Подробнее</a>
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