/*
    This is the SOH_card which is shown to shwo the individual inventory card with full details


    @params: setcurrentSohId={setcurrentSohId}
                setScreenView={setScreenView}
*/
/*
cat_name: null;
item_barcode: "61011884701793955833";
item_descr: "Description for item Item30";
item_name: "Item30";
item_prime_photo: "IMG_1835.jpg";
location_name: null;
photo_key: "u54e12va4a7kmc7psk1utefu2&";
setScreenView: ƒ();
setcurrentSohId: ƒ();
soh_ID: 2;
soh_date_added: "2024-02-13T02:49:14.000Z";
soh_item: "65493";
soh_last_updated: "2024-02-13T02:49:14.000Z";
soh_locationID: "LOC002";
soh_qty: 5005;
type_name: null;*/
import React from "react";
import "./styles/soh_card.css";

const Soh_card = ({ setScreenView, currentsohcarddata }) => {
  console.log(currentsohcarddata);
  return (
    <div>
      <h1>The SOH CARD</h1>
      <div className="element-content-container">
        <div className="img-wrapper">
          <img
            id={"picture"}
            src={`https://dl.dropboxusercontent.com/scl/fi/rdc48784286ll24f5o3xc/${currentsohcarddata.item_prime_photo}?rlkey=${currentsohcarddata.photo_key}`}
            alt={currentsohcarddata.item_prime_photo}
            className="grid-item item-image"
          />
        </div>
        <div>
          {currentsohcarddata ? (
            <ul className="details-list">
              <li>
                <div className="eachListRow">
                  <a classname="listTitle">Location ID:</a>{" "}
                  <a className="listDetail">
                    {currentsohcarddata.soh_locationID}
                  </a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>Quantity:</a> <a>{currentsohcarddata.soh_qty}</a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>Cat Name:</a> <a>{currentsohcarddata.cat_name || "N/A"}</a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>Item Barcode:</a> <a>{currentsohcarddata.item_barcode}</a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>Description:</a> <a>{currentsohcarddata.item_descr}</a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>Item Name:</a> <a>{currentsohcarddata.item_name}</a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>Location Name:</a>{" "}
                  <a>{currentsohcarddata.location_name || "N/A"}</a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>Date Added:</a> <a>{currentsohcarddata.soh_date_added}</a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>SOH Item:</a> <a>{currentsohcarddata.soh_item}</a>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <a>Last Updated:</a>{" "}
                  <a>{currentsohcarddata.soh_last_updated}</a>
                </div>
              </li>

              <li>
                <div className="eachListRow">
                  <a>Type Name:</a>{" "}
                  <a>{currentsohcarddata.type_name || "N/A"}</a>
                </div>
              </li>
            </ul>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>
      <button onClick={() => setScreenView(1)}>GO BACK</button>
    </div>
  );
};

export default Soh_card;
