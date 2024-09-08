import { useState } from "react"
import './unit.css'; // Import the CSS file

export const UnitConverter = () => {
    let [unit, setUnit] = useState(1);
    let [digi, setDigi] = useState("");
    let [conversionType, setConversionType] = useState("");
    let [from, setFrom] = useState("");
    let [to, setTo] = useState("");


    
    
    let inpHandler=(e)=>{
        
        setUnit(e.target.value);
    }
    let conversionHandler=(e)=>{
        setConversionType(e.target.value);
    }
    let fromHandler=(e)=>{
        setFrom(e.target.value)
        let val=e.target.value;
        
    }
    let toHandler=(e)=>{
        setTo(e.target.value);
    }
    let onSubmitHandler=()=>{
        let an;
        if (!unit || !conversionType || !from || !to) {
            result = "Please fill out all fields.";
        }else if(conversionType=="length"){
            if(from=="inch" && to=="centimeter"){
                an=unit*2.54;
               
            }else if(from=="feet" && to=="meter"){
                 an=unit*0.3048;
                
            }else if(from=="miles" && to=="kilometer"){
                 an=unit*1.60934;
               
            }else if(from=="meter" && to=="yard"){
                 an=unit*1.09361;
               
            }else if(from=="kilometer" && to=="miles"){
                 an=unit*0.621371;
                
            }else{
                an="Invalid length conversion!";
            }
        }else if(conversionType=="weight"){
          
            if(from=="pounds" && to=="kilo"){
                an=unit*0.453592;
               
            }else if(from=="ounces" && to=="grams"){
                 an=unit*28.3495;
                
            }else if(from=="kilo" && to=="pounds"){
                 an=unit*2.20462;
               
            }else if(from=="grams" && to=="ounces"){
                 an=unit*0.035274;
               
            }else{
                an="Invalid weight conversion!";
            }

        }else if(conversionType=="temp"){
            if(from=="celsius" && to=="fahrenheit"){
                an=unit*9/5+32+"fahr";
               
            }else if(from=="fahrenheit" && to=="celsius"){
                 an=(unit-32)*5/9+"cel";
                
            }else if(from=="celsius" && to=="kelvin"){
                 an=`${unit+273.15} kel`;
               
            }else if(from=="kelvin" && to=="celsius"){
                 an=`${unit-273.15} cel`
               
            }else{
                an="Invalid temperture conversion!";
            }
        } else {
            an = "Please select a valid conversion type!";
        }
        setDigi(an);
    }
    return (
        <>
            <div>
                <div>
                    <h1>UNIT CONVERTER</h1>
                </div>

               <div className="container">
               <div className="unit">
                    <input type="number" placeholder="enter length to convert" value={unit} onChange={inpHandler} />
                </div>

                <div className="conversionType">
                <select onChange={conversionHandler} value={conversionType}>
                    <option value="">Select Conversion Type</option>
                    <option value="length">Length</option>
                    <option value="weight">Weight</option>
                    <option value="temp">Temperature</option>
                </select>                
                </div>

                <div className="selectconversion_from_to">
                <select onChange={fromHandler} value={from}>
                    <option value="">From</option>
                   {
                    conversionType==="length" &&(
                        <>
                         <option value="inch">Inch</option>
                            <option value="feet">Feet</option>
                            <option value="meter">Meter</option>
                            <option value="mile">Mile</option>
                            <option value="kilometer">Kilometer</option>
                        </>
                    )
                   }
                   {conversionType==="weight" &&(
                        <>
                            <option value="pounds">Pounds</option>
                            <option value="kilogram">Kilogram</option>
                            <option value="ounces">Ounces</option>
                            <option value="grams">Grams</option>
                        </>
                    )}
                    {
                        conversionType==="temp" &&(
                            <>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                            </>
                        )
                    }
                </select>  
                <select onChange={toHandler} value={to}>
                    <option value="">To</option>
                   {
                    conversionType==="length" &&(
                        <>
                            <option value="centimeter">Centimeter</option>
                            <option value="meter">Meter</option>
                            <option value="mile">Mile</option>
                            <option value="kilometer">Kilometer</option>
                            <option value="yard">Yard</option>
                        </>
                    )
                   }
                   {conversionType==="weight" &&(
                        <>
                            <option value="pounds">Pounds</option>
                            <option value="kilogram">Kilogram</option>
                            <option value="ounces">Ounces</option>
                            <option value="grams">Grams</option>
                        </>
                    )}
                    {
                        conversionType==="temp" &&(
                            <>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                            </>
                        )
                    }
                </select>                  </div>
                <div>
                    <button onClick={onSubmitHandler}>Convert</button>
                </div>
                <div>
                <h2>Result: {digi}</h2>

                </div>
               </div>
              
            </div>
        </>
    )
}