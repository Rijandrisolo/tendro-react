import React, { useState } from "react";

const Index = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <form>
        <input
          type='text'
          name='email'
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <input
          type='password'
          name='password'
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Submit</button>{" "}
        {/* Ajoutez un bouton de soumission */}
      </form>
    </>
  );
};

export default Index;
