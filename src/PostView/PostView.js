import React from "react";
import "../Backend/userSchema";
import PIC from "../Pic/pic1.png";
import heart from "../Pic/heart.png";
import share from "../Pic/share.png";
import "../CSS/postview.css";
// import '../../Backend/auth'
// import '../../Backend/App'
import "../Backend/userSchema";
import { useState, useEffect } from "react";
const PostView = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  let name = month[date.getMonth()];
  //  ****************************************************************************
  const [user, setuser] = useState([]);
  let API = '/postview';
  const fetchapi = async (url) => {
    try {
      const res = await fetch(url);
      setuser(await res.json());
      console.log(setuser);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchapi(API);
  },[]);
let arr=[]
arr.push(user)
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

return (
    <>
      <div className="Post">
        <div>
  <div>
        <div>
            <div className="dot clr2">...</div>
            <div className="first">
              <span className="lmargin Bold clr1">Rishabh Kumar</span>
              <span className="lmargin clr2">Banglore</span>
            </div>
          </div>
          <div>
            <div className="Image">
              <img src={PIC} alt="Pic" />
            </div>
          </div>
          <div>
            <div className="dates">
              <span className="clr1">{date.getDate() + " "}</span>
              <span className="clr1">{name + " "}</span>
              <span className="clr1">{date.getUTCFullYear()}</span>
            </div>
            <div>
              <span className="lmargin">
                <img src={heart} alt="Heart " />
              </span>
              <span className="lmargin">
                <img src={share} alt="share " />
              </span>
            </div>
            <div className="lmargin">
              <span className="clr2">64 likes</span>
            </div>

            <div className="lmargin font1">
              <h1>DEMO</h1>
            </div>
          </div>
      </div>
        </div>
      </div>
    </>
  );
};
export default PostView;
