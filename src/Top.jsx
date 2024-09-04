/* eslint-disable react/prop-types */
import { useState } from "react";

export const Top = ({ userData, dispatch }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");

  const handleOnclick = () => {
    if (name === "" || age === "" || region === "") return;
    dispatch({ type: "ADD_USER", payload: { name, age, region } });
    setName("");
    setAge("");
    setRegion("");
  };

  return (
    <>
      <h1>전체 회원 수 : {userData.length}</h1>
      <label htmlFor="name"> 이름 : </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="나이"> 나이 : </label>
      <input
        type="text"
        name="나이"
        id="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor="지역"> 지역 : </label>
      <input
        type="text"
        name="지역"
        id="지역"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />

      <button onClick={handleOnclick}>추가</button>
    </>
  );
};
