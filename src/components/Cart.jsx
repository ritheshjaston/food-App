import React, { useEffect, useState } from 'react'
import '../Styler.css'
export default function Cart() {
    const data = JSON.parse(localStorage.getItem("cart"));
    console.log(data)
    let total=0;
    data.map((d)=>(total=total+d.total));
    console.log(total)

    const handler=()=>{
        
    }
    return (
        <div>
            <h1 className='header'>Cart</h1>
            <div className="main">
                {

                    data.map((row)=>{
                        return(
                            
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
                <b>Total Amoubt:  </b> <span>{total}</span><br /><br />
                <button onClick={handler}>Check Out</button>
            </div>
        </div>
    )
}
