/* eslint-disable react/prop-types */
import React from "react";
import close from "../../assets/close";

function PurposeItem(props) {
  const { p, handleDeletePurposeItem } = props;

  return (
    <div className="expenses_content_body">
      {p.purpose_items?.map((pi, index) => (
        <div className="expenses_content_body_item" key={index}>
          <div>{pi.name}</div>
          <div className="expenses_content_body_item_right">
            <div>{pi.price} рублей</div>
            <div className="expenses_content_body_item_delete">
              <img
                src={close}
                alt="close"
                onClick={() => handleDeletePurposeItem(p.id, pi.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PurposeItem;
