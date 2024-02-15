import React, { useEffect, useState } from "react";
import NavDoc from "./NavDoc";
import axios from "axios";

const ViewDoc = () => {
    const [data,setData] = new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/docs/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect( ()=>{getData()},[])
  return (
    <div>
      <NavDoc />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">ID</th>
                  <th scope="col">Experience</th>
                  <th scope="col">Specialisation</th>
                </tr>
              </thead>
              <tbody>
               
               {
                data.map(
                    (value,index)=>{
                        return  <tr>
                        <td>{value.docName}</td>
                        <td>{value.docQualification}</td>
                        <td>{value.docIdProofNumber}</td>
                        <td>{value.docYearOfExp}</td>
                        <td>{value.docSpecialisation}</td>
                      </tr>
                    }
                )
               }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDoc;
