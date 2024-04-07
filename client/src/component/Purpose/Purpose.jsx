import React, { useEffect, useState } from "react";
import PurposeItem from "./PurposeItem";
import close from "../../assets/close";
import ModalPurpos from "./Modal/ModalPurpos";
import ModalPurposItem from "./Modal/ModalPurposItem";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePurpose,
  deletePurposeItem,
  getPurpose,
} from "../../redux/purpose-reducer";

function Purpose() {
  const [togglerModalPurpos, setTogglerModalPurpos] = useState(false);
  const [togglerModalPurposItem, setTogglerModalPurposItem] = useState(false);
  const [purposeId, setPurposeId] = useState(null);

  const purpose = useSelector((state) => state.purposeReducer.purposes);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const handleTogglerModalPurpos = () => {
    setTogglerModalPurpos(!togglerModalPurpos);
  };
  const handleTogglerModalPurposItem = (id) => {
    setPurposeId(id);
    setTogglerModalPurposItem(!togglerModalPurposItem);
  };

  const handleDeletePurpose = (purposeId) => {
    dispatch(deletePurpose(purposeId, user.id));
  };

  const handleDeletePurposeItem = (purposeId, purposeItemId) => {
    dispatch(deletePurposeItem(purposeId, purposeItemId, user.id));
  };

  return (
    <section className="expenses">
      {purpose.map((p, index) => (
        <div className="expenses_content" key={index}>
          <div className="expenses_content_header">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2>{p.name}</h2>
              <span style={{ marginLeft: "20px", fontSize: "18px" }}>
                {p.price}р
              </span>
            </div>

            <img
              src={close}
              alt="close"
              className="delete"
              onClick={() => handleDeletePurpose(p.id)}
            />
          </div>
          <PurposeItem
            p={p}
            handleDeletePurposeItem={handleDeletePurposeItem}
          />
          <div className="expenses_content_footer">
            <button onClick={() => handleTogglerModalPurposItem(p.id)}>
              добавить
            </button>
          </div>
        </div>
      ))}
      <div className="purpos_button">
        <button onClick={handleTogglerModalPurpos}>добавить</button>
      </div>
      {togglerModalPurpos ? (
        <ModalPurpos
          handleToggler={handleTogglerModalPurpos}
          userId={user.id}
        />
      ) : (
        ""
      )}
      {togglerModalPurposItem ? (
        <ModalPurposItem
          handleToggler={handleTogglerModalPurposItem}
          purposeId={purposeId}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Purpose;
