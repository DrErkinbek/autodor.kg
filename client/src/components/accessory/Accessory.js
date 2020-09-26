import React, { useContext, useEffect } from 'react';
import AccessoryContext from '../../context/accessory/AccessoryContext';
import Spinner from '../layout/Spinner';
import M from 'materialize-css/dist/js/materialize.min.js';
import Cookies from 'js-cookie'

const Accessory = (props) => {
    const accessoryContext = useContext(AccessoryContext);
    const {accessory, loading, getAccessory } = accessoryContext;

    useEffect(() => {
        const productCode = props.match.params.productCode;
        getAccessory(productCode);
        Cookies.set('servingAccessory', 'keepServingAccessory=true', 
        { secure: true, expires: 7, path: `/accessories/${productCode}` });
        // eslint-disable-next-line
    }, [])
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
                    <h4 className="center">{accessory.name}</h4>
                    <div className="col s12 m6 l6 xl6">
                        <img src={accessory.imageUrl} 
                        className="materialboxed responsive-img"
                        alt="demo" onClick={() => showImg() } />
                    </div>
                    <div className="col s12 m6 l6 xl6 left">
                        <h5>Описание:</h5>
                        <hr />
                        <blockquote className="product-description">{accessory.description} 
                        </blockquote>
                        <hr />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Производитель:</td>
                                    <td>{accessory.producer}</td>
                                </tr>
                                <tr>
                                    <td>Код продукта:</td>
                                    <td>{accessory.productCode}</td>
                                </tr>
                                <tr>
                                    <td>{accessory.feature}:</td>
                                    <td>{accessory.featureValue}</td>
                                </tr>
                                <tr>
                                    <td>Цена:</td>
                                    <td className="flow-text">{accessory.price} сом</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accessory;