import React, { useEffect, useState } from 'react'
import '../Styler.css'

export default function Myorder() {
    const [data, setdata] = useState();
    const [finaldata, setfinaldata] = useState([]);
    const [filteredDataCount, setFilteredDataCount] = useState(0);
    useEffect(() => {
        loaddata();
    }, [])

    const loaddata = async () => {
        try {
            let res = await fetch("http://localhost:5000/api/myoredrs", {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                }
            });
            res = await res.json();
            console.log(res, "results");
            setdata(res);

            let filteredData = [];

            res.forEach((dat) => {
                console.log(dat, "c data");

                dat.forEach((d) => {
                    console.log(d, "DD");

                    if (d.cartdata) {
                        const userId = JSON.parse(localStorage.getItem("UserId")).id;
                        const tempFilteredData = d.cartdata.filter((dd) => dd.client_id === userId);
                        console.log(tempFilteredData, "filtered data");

                        filteredData = [...filteredData, ...tempFilteredData];
                    }
                });
            });

            setfinaldata(filteredData);
            setFilteredDataCount(filteredData.length);

            console.log(localStorage.getItem("UserId"), "User id");
            console.log(JSON.parse(localStorage.getItem("UserId")).id, "User id");
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    console.log(finaldata, "finaldata state")
    if (!data) {
        return (
            <div>
                <h1 className='header'>Myorders</h1>
                <h5 style={{ textAlign: "center", color: "#FFC107", marginTop: "50px" }}>No Orders yet placed</h5>
            </div>
        );
    }
    return (
        <div>
            <h1 className='header'>My Orders</h1>
            <div className="main">
                {

                    finaldata?.map((row) => {
                        return (

                            <div className="sub">
                                <div >
                                    <img className='images' src={row.img} alt="" />
                                </div>
                                <div className='inerdata'>
                                    <h3>{row.title}</h3><br />
                                    <table >
                                        <tr>
                                            <td><h5>Quantity : </h5></td>
                                            <td> <h4>{row.quantity}</h4></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Size : </h5> </td>
                                            <td> <h4>{row.size}</h4></td>

                                        </tr>

                                    </table>
                                </div>
                                <div className='Amt'>
                                    <tr>
                                        <td><h3>Rs: </h3></td>
                                        <td><h2>{row.total} </h2></td>
                                    </tr>
                                </div>

                            </div>
                        );
                    })
                }
            </div>
            <div className='cal'>
                <b>Total Orders:  </b> <span>{filteredDataCount}</span><br /><br />
                {/* <button onClick={handler}>Check Out</button> */}
            </div>
        </div>
    )
}
