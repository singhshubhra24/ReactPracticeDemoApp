const Reusecomponent = ({ id,name,age,email}) => {
    // console.log(data);
    
  return (
    <div style={{
    border: "1px solid green",
    padding: "10px",
    margin: "10px",
    width: "400px",
    borderRadius: "5px",
  }}>
      <h3>
        ID: <span style={{ color: "red" }}>{id}</span>
      </h3>
      <h3>
        NAME: <span style={{ color: "green" }}>{name}</span>
      </h3>
      <h3>
        AGE: <span style={{ color: "blue" }}>{age}</span>
      </h3>
       <h3>
        EMAIL: <span style={{ color: "purple" }}>{email}</span>
      </h3>
    </div>
  );
};
export default Reusecomponent;