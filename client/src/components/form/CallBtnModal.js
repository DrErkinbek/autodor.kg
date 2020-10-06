import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import M from 'materialize-css/dist/js/materialize.min.js';

const CallBtnModal = () => {
    const [customer, setCustomer ] = useState({
        customer_name: '',
        customer_number: ''
    });
    const { customer_name, customer_number } = customer;

    const resetForm = () => setCustomer({
        customer_name: '',
        customer_number: ''
    });

    const onChange = e => setCustomer({ ...customer, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        let CallBtnParams = {
            customer_name: customer_name,
            customer_number: customer_number
        }
        emailjs.send(
            'service_gn5xg5p',
            'template_bqtju7m',
            CallBtnParams,
            'user_LluexlTTpyxIb1Jzgoe6a'
        )
        resetForm();
        M.toast({ html: 'Спасибо, мы вам обратно звоним.', classes: 'rounded green lighten-1'});
    }

    return(
        <div id="call-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                    <div className="modal-header right">
                        <a href="#!" className="modal-close">
                            <i className="small material-icons">close</i>
                        </a>
                    </div>
                    <div className="col s12 m6 l8">
                        <form onSubmit={onSubmit}>
                            <div className="center">
                                <p>Закажите обратный звонок</p>
                            </div>
                            <div className="input-field col s6">
                                <input id="icon_prefix" type="text" className="validate"
                                onChange={onChange} minLength="4"
                                placeholder="Ваша имя" name="customer_name" value={customer_name}
                                required />
                            </div>
                            <div className="input-field col s6">
                                <input id="icon_telephone" type="tel" className="validate"
                                onChange={onChange} minLength="9"
                                placeholder="Телефон номер" name="customer_number" value={customer_number}
                                required />
                            </div>
                            <button className="blue btn-small right">Отправить</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}

const modalStyle = {
    width: "75%",
    height: "75%"
}

export default CallBtnModal;