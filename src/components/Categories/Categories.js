import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/category.css";
import { catData } from "./categories_data.js";
export default function Categories() {
  const [categoryData, setCategoryData] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://speaker-server-4zojz.ondigitalocean.app/api/events/category`
      )
      .then((data) => {
        setCategoryData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="category">
        <p className="head1">CATEGORIES</p>
        <p className="desc">WIDE RANGE OF CATEGORIES FOR SPEAKERORE USERS</p>
        <div className="catcards">
          <div className="catcards-section">
            {catData &&
              catData?.map((data) => {
                return (
                  <div className="catcard">
                    <img className="catimgs" src={data.img_path} alt={""} />
                    <p className="catsub">{data?.title}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="fp-options">
          <p className="head1">which one are you?</p>
          <div className="fpo-card-parent">
            <div className="fpo-card">
              <p className="fpoc-head">SPEAKER</p>
              <p className="fpoc-subhead">
                Get nearby event detail by SpeakerOre
              </p>
              <img
                className="fpoc-img"
                src={require("../images/category.jpg")}
                alt={""}
              />
              <p className="fpoc-text">
                {" "}
                I am willing to look for events to get an opportunity to speak
                in one of the greatest events.
              </p>
              <button className="fpoc-btn"> checkout events</button>
            </div>
            <div className="fpo-card">
              <p className="fpoc-head">SPEAKER</p>
              <p className="fpoc-subhead">
                Get nearby event detail by SpeakerOre
              </p>
              <img
                className="fpoc-img"
                src={require("../images/category.jpg")}
                alt={""}
              />
              <p className="fpoc-text">
                {" "}
                I am willing to look for events to get an opportunity to speak
                in one of the greatest events.
              </p>
              <button className="fpoc-btn"> checkout events</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
