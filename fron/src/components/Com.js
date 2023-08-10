import axios from "axios";
import React, { useEffect, useState } from "react";

const Com = () => {
    const [data, setData] = useState([{ fname: '', lname: [] }]);
    const [data1, setData1] = useState('');
  
    const handleClick = () => {
      setData([...data, { fname: '', lname: [] }]);
    };
  
    const handleChange = (e, i) => {
      const { name, value, files } = e.target;
      const updatedData = [...data];
      if (name === 'lname') {
        updatedData[i][name] = Array.from(files).map((file) => (file));
      } else {
        updatedData[i][name] = value;
      }
      setData(updatedData);
    };
  
    const handleDelete = (i) => {
      const updatedData = [...data];
      updatedData.splice(i, 1);
      setData(updatedData);
    };
  
    const collectData = async() => {
      const collectedData = {
        data: data.map(({ fname, lname }) => ({ fname, lname })),
        data1: data1
      };
      const formData = new FormData();
      // formData.append('data',data.map(({ fname, lname }) => ({ fname, lname })))
      formData.append('data',"idgsfh")
      data.map(item => item.lname.map(i => {
        console.log("i",i)
        formData.append('data1', i)
      }))
      console.log(collectedData);
      console.log('formData', formData)

      await axios.post('http://localhost:8000/api/user/postmulti',formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
    };
    
  return (
    <>
      <div class="mb-3 container">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={data1}
          onChange={e => setData1(pre => e.target.value)}
        />
      </div>

      {/* ----------------------------------------------------------- */}
      <div>

      <div className="App">
        {data.map((val, i) => (
          <div key={i}>
            <input
              type="text"
              className="form-control"
              name="fname"
              value={val.fname}
              onChange={(e) => handleChange(e, i)}n 
            />{' '}
            <br />
            <input
              type="file"
              multiple="multiple"
              className="form-control"
              name="lname"
              onChange={(e) => handleChange(e, i)}
            />{' '}
            <br />
            {val.lname.map((path, index) => (
              <img key={index} src={path} alt={`Image ${index}`} width="100" height="100" />
            ))}
            <button onClick={() => handleDelete(i)}>Delete</button> <br />
          </div>
        ))}
        <button onClick={handleClick}>Add</button>

      </div><br /><br />
        <button onClick={collectData}>Submit</button>
    </div>

      {/* ------------------------------------------------- */}
    </>
  );
};

export default Com;


