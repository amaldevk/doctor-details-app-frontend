import React, { useState } from "react";
import NavDoc from "./NavDoc";
import axios from "axios";

const AddDoc = () => {
  const [doc, setInput] = new useState({
    docName: "",
    docQualification: "",
    docIdProofNumber: "",
    docSpecialisation: "",
    docYearOfExp: "",
  });
  const inputHandler=(event)=>{
    setInput({...doc,[event.target.name]:event.target.value})
  }
  const readValues = ()=>{
    axios.post("http://localhost:3001/api/docs/add",doc).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status == "success") {
                alert("data uploaded")
                setInput(
                    {
                        docName: "",
                        docQualification: "",
                        docIdProofNumber: "",
                        docSpecialisation: "",
                        docYearOfExp: "",
                      }
                )
            } 
            else {
                alert("failed")
            }
        }
    )
    
  }
  return (
    <div>
      <NavDoc />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" name="docName" value={doc.docName} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form-label">
                  Qualification
                </label>
                <input type="text" className="form-control" name="docQualification" value={doc.docQualification} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form-label">
                  ID proofNO
                </label>
                <input type="text" className="form-control" name="docIdProofNumber" value={doc.docIdProofNumber} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form-label">
                  Specification
                </label>
                <input type="text" className="form-control" name="docSpecialisation" value={doc.docSpecialisation} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form-label">
                  Experience
                </label>
                <input type="text" className="form-control" name="docYearOfExp" value={doc.docYearOfExp} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                <button className="btn btn-success" onClick={readValues}>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoc;
