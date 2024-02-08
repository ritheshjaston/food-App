import React from 'react'

export default function Card() {
  return (
    <div>
      <div class="card" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="..." class="card-img-top" alt="..." />
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
