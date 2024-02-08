import React from 'react'

export default function Card() {
  return (
    <div>
      <div class="card" style={{ width: "18rem", maxHeight: "360px",margin:"10px" }}>
          <img style={{"overflow": "hidden"}} src="https://img.freepik.com/free-photo/delicious-soup-black-bowl_144627-20705.jpg?w=740&t=st=1707406166~exp=1707406766~hmac=7cdb8fb7059fa31e6125f18ba3592487fb2d8378f26ba4c05becdd3bed8fe910" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is some important Text</p>
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
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">
                Total Price
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
