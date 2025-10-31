import assets from './assets/pexels-pixabay-257540.jpg';
import { useState } from 'react';
// Make Button for Dynamic Style

function CssStyleExample(){
    const [cardStyle,setCardStyle] =useState({
        border: "1px solid #cccccc54",
        width: "200px",
        boxShadow: "2px 0px 2px 2px #cccccc8a"
})
    const [textColor,setTextcolor] =useState('red');
    const [grid,setGrid] =useState(true);


    const updateTheme = (bgColor, textColor)=>{
    setCardStyle({...cardStyle, backgroundColor:bgColor})
    setTextcolor(textColor)
}

 return(
    <>
    <h1 style={{color : "red", backgroundColor: "grey"}}>This is an example of inline css in this component</h1>
    <button onClick={()=>updateTheme('#ccc', 'green')}>Grey Theme</button>
    <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
    <button onClick={()=>{setGrid(!grid)}}>Toggle Grid</button>

    <div style ={{display: grid?'flex':'block', gap: "20px", flexWrap:"wrap"}}>
    <div style ={cardStyle}>
        <img style={{width:"200px", padding:"2px"}} src={"pexels-pixabay-257540.jpg"} alt="dog image" />
        <div style={{color:textColor}}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
        </div>
    </div>
    <div style ={cardStyle}>
        <img style={{width:"200px",padding:"2px"}} src={"pexels-pixabay-257540.jpg"} alt="dog image" />
        <div style={{color:textColor}}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
        </div>
    </div>
    <div style ={cardStyle}>
        <img style={{width:"200px"}} src={"pexels-pixabay-257540.jpg"} alt="dog image" />
        <div style={{color:textColor}}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
        </div>
    </div>
    <div style ={cardStyle}>
        <img style={{width:"200px"}} src={"pexels-pixabay-257540.jpg"} alt="dog image" />
        <div style={{color:textColor}}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
        </div>
    </div>
    <div style ={cardStyle}>
        <img style={{width:"200px"}} src={"pexels-pixabay-257540.jpg"} alt="dog image" />
        <div style={{color:textColor}}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
        </div>
    </div>
    <div style ={cardStyle}>
        <img style={{width:"200px"}} src={"pexels-pixabay-257540.jpg"} alt="dog image" />
        <div style={{color:textColor}}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
        </div>
    </div>
    <div style ={cardStyle}>
        <img style={{width:"200px"}} src={"pexels-pixabay-257540.jpg"} alt="dog image" />
        <div style={{color:textColor}}>
            <h3>Shubhra Singh</h3>
            <p>Software Engineer</p>
        </div>
    </div>
    </div>
   
    </>
    
 )
}
export default CssStyleExample;