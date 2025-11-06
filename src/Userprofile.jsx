import userStyle from "./css/userProfile.module.css";
function Userprofile() {
  return (
    <>
      <div>
        <h2 className={userStyle.heading}>
          This is an example of style with css modules in this component
        </h2>
        <div className={userStyle.toggleGrid}>
         <div className={userStyle.cardStyle}>
          <img
            className={userStyle.img}
            src={"pexels-pixabay-257540.jpg"}
            alt="dog image"
          />
          <div className={userStyle.textColor}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className={userStyle.cardStyle}>
          <img
            className={userStyle.img}
            src={"pexels-pixabay-257540.jpg"}
            alt="dog image"
          />
          <div className={userStyle.textColor}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className={userStyle.cardStyle}>
          <img
            className={userStyle.img}
            src={"pexels-pixabay-257540.jpg"}
            alt="dog image"
          />
          <div className={userStyle.textColor}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className={userStyle.cardStyle}>
          <img
            className={userStyle.img}
            src={"pexels-pixabay-257540.jpg"}
            alt="dog image"
          />
          <div className={userStyle.textColor}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className={userStyle.cardStyle}>
          <img
            className={userStyle.img}
            src={"pexels-pixabay-257540.jpg"}
            alt="dog image"
          />
          <div className={userStyle.textColor}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
          </div>
        </div>
         <div className={userStyle.cardStyle}>
          <img
            className={userStyle.img}
            src={"pexels-pixabay-257540.jpg"}
            alt="dog image"
          />
          <div className={userStyle.textColor}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
          </div>
        </div>
         <div className={userStyle.cardStyle}>
          <img
            className={userStyle.img}
            src={"pexels-pixabay-257540.jpg"}
            alt="dog image"
          />
          <div className={userStyle.textColor}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
          </div>
        </div>
         <div className={userStyle.cardStyle}>
          <img
            className={userStyle.img}
            src={"pexels-pixabay-257540.jpg"}
            alt="dog image"
          />
          <div className={userStyle.textColor}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
}
export default Userprofile;
