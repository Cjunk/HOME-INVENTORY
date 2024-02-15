/* The purpose of this page is to view data. wether it is the ITEM MASTER LIST, the LOCATION LIST or the SOH

Components
1 - ITEM MASTER
2 - LOCATION MASTER
3 - SOH

Each one will be a separate component. 
*/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function ViewPage(props) {
    const [currentPage,setCurrentPage] = useState(3)
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        document.title = "Home Harmony: Views";
    }, [])
    return (
        <div>
            <h2>THIS IS THE DATA VIEWING PAGE</h2>
            <div>
                <button>SOH</button>
                <button>ITEM MASTER</button>
                <buton>LOCATION MASTER</buton>
            </div>
            {props.pageNumber = 1 ? <ViewItemMaster /> : props.pageNumber = 2 ? <ViewLocationMaster /> : <ViewSOH />}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        </div>
    );
}
export default ViewPage;