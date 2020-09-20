import React from 'react';

const CallButton = () => {
    return(
        <div className="fixed-action-btn">
            <a href="#call-modal" className="btn-floating btn-large blue darken-2 pulse modal-trigger">
                <i className="large material-icons">phone_in_talk</i>
            </a>
        </div>
    )
}

export default CallButton;