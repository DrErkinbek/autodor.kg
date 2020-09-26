import React, { useContext } from 'react';
import PaginateContext from '../../context/pagination/PaginateContext';
import {Link} from 'react-router-dom';

const Pagination = () => {
    const paginateContext = useContext(PaginateContext);

    const { cardPerPage, paginate, totalCards } = paginateContext;

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++ ){
        pageNumbers.push(i);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col s12 center">
                    <ul className="pagination">
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <Link onClick={() => paginate(number)} to="/accessories" 
                                    className="active blue paginate-item">
                                    {number}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pagination;