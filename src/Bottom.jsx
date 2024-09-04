/* eslint-disable react/prop-types */
const TableElement = ({ user, index, dispatch }) => {
  const { name, age, region } = user;

  const handleOnClick = () => {
    dispatch({ type: "REMOVE_USER", payload: index });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{region}</td>
      <td>
        <button onClick={handleOnClick}>X</button>
      </td>
    </tr>
  );
};

export const Bottom = ({ userData, dispatch }) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <td>이름</td>
          <td>나이</td>
          <td>지역</td>
          <td>삭제</td>
        </tr>
      </thead>
      <tbody>
        {userData.map((user, index) => (
          <TableElement
            key={index}
            user={user}
            index={index}
            dispatch={dispatch}
          />
        ))}
      </tbody>
    </table>
  );
};
