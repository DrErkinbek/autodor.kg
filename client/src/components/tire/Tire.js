import React, { useContext, useEffect} from 'react';
import TireContext from '../../context/tire/TireContext';
import Spinner from '../layout/Spinner';
import M from 'materialize-css/dist/js/materialize.min.js';

const Tire = (props) => {
    const tireContext = useContext(TireContext);
    const {tire, loading, getTire} = tireContext;

    useEffect(() => {
        const productCode = props.match.params.productCode;
        getTire(productCode);
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
                    <h4 className="center">{tire.name}</h4>
                    <div className="col s12 m6 l6 xl6">
                        <img src={tire.imageUrl} width="100%" alt="demo"
                        onClick={() => showImg()} className="materialboxed responsive-img" />
                    </div>
                    <div className="col s12 m6 l6 xl6 left">
                        <h5>Описание:</h5>
                        <hr />
                        <blockquote className="product-description">{tire.description}</blockquote>
                        <hr />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Ширина:</td>
                                    <td>{tire.width}</td>
                                </tr>
                                <tr>
                                    <td>Высота:</td>
                                    <td>{tire.height}</td>
                                </tr>
                                <tr>
                                    <td>Диаметр:</td>
                                    <td>{tire.diameter}</td>
                                </tr>
                                <tr>
                                    <td>Сезонность:</td>
                                    <td>{tire.season}</td>
                                </tr>
                                <tr>
                                    <td>Цена:</td>
                                    <td className="flow-text">{tire.price} сом</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tire;