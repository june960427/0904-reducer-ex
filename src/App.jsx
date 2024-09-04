import { useReducer } from "react";
import "./App.css";
import { Top } from "./Top";
import { Bottom } from "./Bottom";

const initialState = {
  userData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, userData: [...state.userData, action.payload] };
    case "REMOVE_USER":
      return {
        ...state,
        userData: state.userData.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Top userData={state.userData} dispatch={dispatch} />
      <Bottom userData={state.userData} dispatch={dispatch} />
    </>
  );
}

export default App;
