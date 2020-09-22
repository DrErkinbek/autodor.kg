import React, { useContext, useEffect } from 'react';
import AccumulatorContext from '../../context/accumulator/AccumulatorContext';
import Spinner from '../layout/Spinner';

const Accumulators = (props) => {
    const accumulatorContext = useContext(AccumulatorContext);
    const {accumulators, loading, getAccumulatorByBrand } = accumulatorContext;
    useEffect(() => {
        const brand = props.match.params.brand;
        getAccumulatorByBrand(brand);
        // eslint-disable-next-line
    }, []);
    
    if(loading) {
        return <Spinner />
    } else {
        return(
            <div className="row">
                {accumulators.map(accumulator => (
                    <div className="col s12 m3 l3 xl3" key={accumulator._id}>
                        <div className="card z-depth-4">
                            <div className="card-image">
                                <a href={`/brands/${accumulator.producer}/${accumulator.productCode}`}>
                                    <img alt="Kainar" src={accumulator.imageUrl} />
                                </a>
                            </div>
                            <div className="card-content">
                                <p className="center product-title">{accumulator.name}</p>
                                <p className="center">{accumulator.price} сом</p>
                            </div>
                            <div className="card-action">
                                <div className="center">
                                    <a href={`/brands/${accumulator.producer}/${accumulator.productCode}`}
                                    className="waves-effect blue waves-light btn-small center">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default Accumulators;