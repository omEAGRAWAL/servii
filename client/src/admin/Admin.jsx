// import React from "react";

function Admin() {
  return (
    <div>
      <div className=" "> Welcome TO Admin panel</div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-centre items-center ">
          <div className="w-1/2 h-1/2">
            <div className="">Terms & Conditions</div>
            <button className="">Edit</button>
          </div>
          <div className="w-1/2 ">
            <div className="">Privacy Policy</div>
            <button className="">Edit</button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 h-1/2">
            {" "}
            <div className="">Refund Policy</div>
            <button className="">Edit</button>
          </div>

          <div className="w-1/2 h-1/2">
            <div className="">FAQs</div>
            <button className="">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
