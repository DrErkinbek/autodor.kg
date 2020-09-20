import React from 'react';

const Pagination = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12 center">
                    <ul className="pagination">
                        <li className="active blue"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!">4</a></li>
                        <li className="waves-effect"><a href="#!">5</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        
    )
}

export default Pagination;