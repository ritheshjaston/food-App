import React from 'react'

export default function Card(props) {

  let options=props.options;
  
  let prizeoptions=Object.keys(options);
  return (
    <div>
      <div class="card" style={{ width: "19rem", maxHeight: "fit-content",margin:"10px",color:"black" }}>
          <img style={{"height": "200px",objectFit:"fill"}} src={props.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            {/* <p class="card-text">{props.description}</p> */}
            <div className="container w-100 ">
              <select className="m-2   bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2  bg-success rounded">
                {prizeoptions.map((data)=>(<option key={data} value={data}>{data}</option>))}

              </select>
              <br />
              <div className="d-inline h-100 fs-5">
                Total Price
              </div>
              <hr />
              <button className='btn bg-success ml-2'>Add to Cart</button>
            </div>
          </div>
        </div>
    </div>
  )
}
