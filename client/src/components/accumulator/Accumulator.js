import React, {useContext, useEffect } from 'react';
import AccumulatorContext from '../../context/accumulator/AccumulatorContext';
import Spinner from '../layout/Spinner';

import M from 'materialize-css/dist/js/materialize.min.js';

const Accumulator = (props) => {
    const accumulatorContext = useContext(AccumulatorContext);
    const {accumulator, loading, getAccumulator } = accumulatorContext;
    
    useEffect(() => {
        const productCode = props.match.params.productCode;
        console.log(productCode);
        getAccumulator(productCode);
        // eslint-disable-next-line
    }, []);
    const showImg = () => {
        const elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {})
    }
    if(loading){
        return <Spinner />
    } else {
        return(
            <div className="container">
                <div className="row">
                    <h4 className="center">{accumulator.name}</h4>
                    <div className="col s12 m6 l6 xl6">
                        <img src={accumulator.imageUrl} 
                        className="materialboxed responsive-img"
                        width="100%" alt="demo" onClick={() => showImg() } />
                    </div>
                    <div className="col s12 m6 l6 xl6 left">
                        <h5>Описание:</h5>
                        <hr />
                        <blockquote className="product-description">
                            {accumulator.description}
                        </blockquote>
                        <hr />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Емкость:</td>
                                    <td>{accumulator.capacity} А/ч</td>
                                </tr>
                                <tr>
                                    <td>Пусковой ток:</td>
                                    <td>{accumulator.amperage} А</td>
                                </tr>
                                <tr>
                                    <td>Размер:</td>
                                    <td>{accumulator.size}</td>
                                </tr>
                                <tr>
                                    <td>Полярность:</td>
                                    <td>{accumulator.polarity}</td>
                                </tr>
                                <tr>
                                    <td>Цена:</td>
                                    <td className="flow-text">{accumulator.price} сом</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accumulator;