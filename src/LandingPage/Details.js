import React from "react";
import "../CSS/design.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
// import '../../Backend/auth'
// import '../../Backend/App'
import '../Backend/userSchema'

const Details = () => {
  const [image,setimage]=useState("")
  function convertto64(e){
    console.log(e);
    var reader=new FileReader()
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
console.log(reader.result);
setimage(reader.result)
    };
    reader.onerror=error=>{
      console.log("Error:",error);
    };
  }
    const history = useHistory();
  const [user, setUser] = useState({
    File: "",
    Auth: "",
    Loc: "",
    Desc: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { File, Auth, Loc, Desc } = user;
    const res = await fetch("/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        File,
        Auth,
        Loc,
        Desc,
      }),
    });

    if (!File || !Auth || !Loc || !Desc) {
      window.alert("Empty Field");
    }
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
        history.push("/PostView");
    }
  };

  return (
    <>
      <form method="post">
        <div className="design">
          <div className="file" onChange={handleInputs} >
            <input
              type="file"
              name="File"
              id="File"
              value={user.File}
              onChange={convertto64}
              required
              placeholder="No File Chosen"
            />
          </div>
          <div className="two">
            <input
              type="text"
              name="Auth"
              id="Auth"
              placeholder="Author"
              value={user.Auth}
              onChange={handleInputs}
              required
            />
            <input
              type="text"
              name="Loc"
              id="Loc"
              placeholder="Location"
              value={user.Loc}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="de">
            <input
              type="text"
              name="Desc"
              id="Desc"
              placeholder="Description"
              value={user.Desc}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="Final">
            <input
              type="submit"
              value="Post"
              id="signup"
              className="btn btn-dark text-light border border-info"
              onClick={PostData}
              //   required
            />
          </div>
        </div>
      </form>
      <div>
        <h1>Image Selected:</h1>
        {image==="" || image===null ?"":<img width={100} height={100} src={image} alt="pic"  /> }
      </div>
    </>
  );
};

export default Details;
