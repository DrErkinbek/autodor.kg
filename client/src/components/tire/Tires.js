import React, { useContext, useEffect} from 'react';
import TireContext from '../../context/tire/TireContext';
import Spinner from '../layout/Spinner';
import Cookies from 'js-cookie';

const Tires = (props) => {
    const tireContext = useContext(TireContext);
    const {tires, loading, getTiresBySeason } = tireContext;

    useEffect(() => {
        const season = props.match.params.season;
        Cookies.set('servingTires', 'keepServingTires=true', 
        { secure: true, expires: 7, path: '/tires' });
        getTiresBySeason(season)
        // eslint-disable-next-line
    }, []);
    if(loading){
        return <Spinner />
    } else {
        return(
            <div className="row">
                {tires.map(tire => {
                    return(
                    <div className="col s6 m3 l3 xl3" key={tire._id}>
                        <div className="card">
                            <div className="card-image tire-size">
                                <a href={`/tires/${tire.producer}/${tire.productCode}`}>
                                    <img alt={tires.name} src={tire.imageUrl} />
                                </a>
                            </div>
                            <div className="card-content center ">
                                <p className="product-title">{tire.name}</p>
                                <p>{tire.price} сом</p>
                            </div>
                            <div className="card-action center">
                                <a className="blue modal-trigger btn-small" 
                                href={`/tires/${tire.producer}/${tire.productCode}`}>Подробнее</a>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Tires;