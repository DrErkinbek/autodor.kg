import React from 'react';

const SearchBar = () => {
    return(
        <div className="row">
            <div className="col s12 m12 l12">
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search"
                            placeholder="Ищите по размеру" />
                                <label className="label-icon" htmlFor="search">
                                    <i className="material-icons">search</i>
                                </label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default SearchBar;