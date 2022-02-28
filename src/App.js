import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const formSparkURL = "https://submit-form.com/NuSEHagg";

  const initialState = {
    fullname: "",
    email: "",
    message: "",
  };

  const [state, setState] = useState(initialState);

  const submitForm = async (e) => {
    e.preventDefault();
    await postSubmission();
  }

  const postSubmission = async () => {
    const payload = {
      ...state,
    };

    try {
      const result = await axios.post(formSparkURL, payload);
      console.log(result);
      setState(initialState);
      alert("Thank you for fill the Form, We will give resposne soon");
    } catch (error) {
      console.log(error);
      alert("Failed, please try again");
    }

  }

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="fullname">FullName</label><br />
          <input type="text" name="fullname" id="fullname" value={state.fullname} onChange={inputEvent} /> <br />

          <label htmlFor="email">Email</label>  <br />
          <input type="email" name="email" id="email" value={state.email} onChange={inputEvent} />  <br />

          <label htmlFor="message">Message</label>  <br />
          <textarea name="message" id="message" value={state.message} onChange={inputEvent}></textarea>  <br />
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  )
}

export default App;