import React, { useState, useContext, useEffect } from 'react';
import TireContext from '../../context/tire/TireContext';
import emailjs from 'emailjs-com';
import M from 'materialize-css/dist/js/materialize.min.js';

const OrderTire = (props) => {
    const tireContext = useContext(TireContext);
    const {tire, getTire } = tireContext;
    useEffect(() => {
        const productCode = props.match.params.productCode;
        getTire(productCode);
        // eslint-disable-next-line
    }, []);
    const [customer, setCustomer ] = useState({
        customer_name: '',
        customer_number: '',
        order_type: ''
    });
    const { customer_name, customer_number, order_type  } = customer;
    const { name, productCode } = tire;

    const resetForm = () => setCustomer({
        customer_name: '',
        customer_number: '',
        order_type: ''
    });
    const onChange = e => setCustomer({ ...customer, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(order_type === ''){
            M.toast({ html: 'Выберите способ доставки.', classes: 'rounded red lighten-1'});
        } else {
            let OrderTireParams = {
                customer_name: customer_name,
                customer_number: customer_number,
                order_type: order_type,
                tire_name: name,
                tire_productCode: productCode
            }
            emailjs.send(
                'service_gn5xg5p',
                'template_1x4dmp4',
                OrderTireParams,
                'user_LluexlTTpyxIb1Jzgoe6a'
            )
            resetForm();
            M.toast({ html: 'Мы приняли вашу заявку', classes: 'rounded green lighten-1'});
        }
    }
    return(
        <div className="container">
            <div className="row">
                <form onSubmit={onSubmit}>
                    <div className="col s12 m6 l6 xl6">
                        <div className="form-group">
                            <label>Ваше имя</label>
                            <input className="form-control" type="text"
                            onChange={onChange} minLength="4"
                            name="customer_name" value={customer_name}
                            required />
                        </div>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                        <div className="form-group">
                            <label>Ваш номер</label>
                            <input className="form-control" type="tel"
                            onChange={onChange} minLength="9"
                            name="customer_number" value={customer_number}
                            required />
                        </div>
                    </div>
                    <div className="col s6 m6 l6 xl6">
                        <label>
                            <input type="checkbox" checked={order_type === 'Доставка'}
                            name="order_type" value="Доставка" onChange={onChange} />
                            <span>Доставка</span>
                        </label>
                    </div>
                    <div className="col s6 m6 l6 xl6">
                        <label>
                            <input type="checkbox" checked={order_type === 'Самовывоз'}
                            name="order_type" value="Самовывоз" onChange={onChange} />
                            <span>Самовывоз</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <button className="blue btn right">Заказать</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderTire;