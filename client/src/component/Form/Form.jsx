/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Form(props) {
  const { form } = props;

  return (
    <form className="form">
      <h1>{form.title}</h1>
      {form.input.map((i, index) => (
        <div key={index}>
          <label>{i.name}</label>
          <input type={i.type} value={i.value} onChange={(e) => i.handle(e)} />
        </div>
      ))}
      <div className="form_footer">
        <button onClick={(e) => form.handleButton(e)}>{form.button}</button>
        {form.link ? <Link to={form.link}> {form.linkName} </Link> : ""}
      </div>
    </form>
  );
}

export default Form;
