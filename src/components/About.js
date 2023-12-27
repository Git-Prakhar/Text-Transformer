import React from "react";

export default function About(props) {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center flex-column gap-5" style={{height: '92.9vh'}}>
      <h1 style={{color: props.mode==="black"?"white":"black", fontWeight: '700'}}>About Us</h1>
      <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
<div className="card" style={{width: '18rem', backgroundColor:props.mode, color: props.mode==="black"?"white":"black", border:"5px solid white", borderColor: props.mode==="black"?"white":"black"}}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={{width: '18rem', backgroundColor:props.mode, color: props.mode==="black"?"white":"black", border:"5px solid white", borderColor: props.mode==="black"?"white":"black"}}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={{width: '18rem', backgroundColor:props.mode, color: props.mode==="black"?"white":"black", border:"5px solid white", borderColor: props.mode==="black"?"white":"black"}}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={{width: '18rem', backgroundColor:props.mode, color: props.mode==="black"?"white":"black", border:"5px solid white", borderColor: props.mode==="black"?"white":"black"}}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
</div>
</>
  );
}
