import {useState} from "react"

function RadioDropdown(){
    const[selectedRadio, setSelectedRadio] = useState("female");
    const[selectOption, setSelectedOption] = useState("");

    const handleRadioChange = (event) =>{
        console.log(event.target.value)
        setSelectedRadio(event.target.value)
    }
    const handleOptionChange = (event) =>{
        console.log(event.target.value)
        setSelectedOption(event.target.value)
    }
    return(
        <>
            <h3>Handle Radio n Dropdown component</h3>
            <h2 className="text-xl font-bold mb-2">Select Gender:</h2>
            <input type="radio" onChange={handleRadioChange} name="selectedRadio" value={"male"} checked={selectedRadio === "male"}
               id="male"/>Male
            <br/>
            <input type="radio" onChange={handleRadioChange} name="selectedRadio" value={"female"} checked={selectedRadio === "female"}
               id="female"/>Female
            <br/>
            <input type="radio" onChange={handleRadioChange} name="selectedRadio" value={"others"} checked={selectedRadio === "others"}
               id="others"/>Others
            <br/>
             <h1 className="mt-4 text-xl">Selected Gender: {selectedRadio || "None"}</h1>
             <h1 className="mt-4 text-xl">Select City Name:-</h1>
             <select onChange={handleOptionChange} defaultValue={"Delhi"}>
                {/* <option>Choose A City....</option> */}
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="varanasi">Varanasi</option>
            </select>
             <h1 className="mt-4 text-xl">Selected City: {selectOption || "None"}</h1>

        </>
    )
}
export default RadioDropdown;