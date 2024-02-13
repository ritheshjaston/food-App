import React, { useEffect, useState } from 'react'

export default function Card(props) {

  let options = props.options;
  const [price, setprice] = useState("");
  const [count, setcount] = useState(1);
  const [amount, setamount] = useState("");
  const [horf, sethorf] = useState("");
  // let prizeoptions = Object.keys(options);
  // console.log(options)
  const [data, setdata] = useState({});

  const handler = () => {
    localStorage.setItem("cart", JSON.stringify(data))
  }


  const change = (e) => {
    console.log(e)
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);




  }
  const getprice = async (e) => {
    const existingData = JSON.parse(localStorage.getItem("cart")) || [];

    const newData = {
      id: e,
      quantity: count,
      size: horf,
      total: price
    };
    await setdata(newData);
    const finalData = [...existingData, newData];
    await localStorage.setItem("cart", JSON.stringify(finalData));
    console.log(finalData);
  };

  useEffect(() => {
    setprice(count * amount)
    console.log(horf)
  }, [count, amount])

  console.log(props._id);
  return (
    <div>
      <div class="card" style={{ width: "19rem", maxHeight: "fit-content", margin: "10px", color: "black" }}>
        <img style={{ "height": "200px", objectFit: "fill" }} src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          {/* <p class="card-text">{props.description}</p> */}
          <div className="container w-100 ">
            <select className="m-2   bg-success rounded" onChange={(e) => setcount(e.target.value)} >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2  bg-success rounded" onChange={(e) => {
              setamount(e.target.value);
              sethorf(e.target.options[e.target.selectedIndex].text)
            }} >
              <option value="">
                  Select
                </option>
              {Object.entries(options).map(([key, value]) => (
                <option name={key} value={value}>
                  {key}
                </option>
              ))}
              {/* {prizeoptions.map((data)=>(<option key={data} value={data}>{data}</option>))} */}

            </select>
            <br />
            <div className="d-inline h-100 fs-5">
              Total Price <b style={{ color: "red" }}>{(price == 0) ? "" : price}</b>
            </div>
            <hr />
            {
              localStorage.getItem("UserId") ?<button className='btn bg-success ml-2' onClick={() => getprice(props._id)}>Add to Cart</button>:""
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}
