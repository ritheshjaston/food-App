import React from "react";
import "../App.css";
export default function Searchbar() {
    return (
        <div className="searchbarz w-100">
            <nav className="navbar navbar-light w-50 ">
                <div className="container-fluid w-100" >
                    <form className="d-flex w-100">
                        <input 
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success m-2 " type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
