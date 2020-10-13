import React, { useState, useContext, useEffect } from 'react';
import DiskContext from '../../context/disk/DiskContext';
import emailjs from 'emailjs-com';
import M from 'materialize-css/dist/js/materialize.min.js';

const OrderDisk = (props) => {
    const diskContext = useContext(DiskContext);
    const {disk, getDisk } = diskContext;
    useEffect(() => {
        const productCode = props.match.params.productCode;
        getDisk(productCode);
        // eslint-disable-next-line
    }, []);
    const [customer, setCustomer ] = useState({
        customer_name: '',
        customer_number: '',
        order_type: ''
    });
    const { customer_name, customer_number, order_type  } = customer;
    const { name, productCode } = disk;

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
            let OrderDiskParams = {
                customer_name: customer_name,
                customer_number: customer_number,
                order_type: order_type,
                disk_name: name,
                disk_productCode: productCode
            }
            emailjs.send(
                'service_gn5xg5p',
                'template_qb4ip4s',
                OrderDiskParams,
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
                        <button className="blue btn right">Оставить заявку</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderDisk;