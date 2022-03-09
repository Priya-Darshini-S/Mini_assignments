import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Form.css"


export const Form = () => {
    const [doctors, setDoctors] = useState([]);
    const [array, setArray] = useState([]);


    const d = {
        mm : new Date().toLocaleString("en-IN", { month: "long" }),
        dd: new Date().toLocaleString("en-IN", { day : '2-digit'}),
        yyyy: new Date().getFullYear()
     }

    const [form, setForm] = useState({
        patientname: "",
        age: "",
        gender: "",
        department: "",
        doctor: d.dd + "-" + d.mm + "-" + d.yyyy,
        date: "",
        id: uuidv4(7),
    });

   
    useEffect(() => {
        console.log("in effects")
        getProducts();
    }, []);

    const getProducts = () => {
        fetch("http://localhost:2123/specs")
        .then((d) => d.json())
        .then((res) => {
           let out = res.specialitys;
            out.forEach(element => {
                setDoctors([...doctors, element.speciality]);
            });
            console.log("doc", doctors)
        })
    }; 
    
    const handleChange = (e) => {  

        let {name, value} = e.target;
    
        //    if(e.target.value === "neurol"){
        //     setArray(neurology);
        //     }else if(e.target.value === "gynecol"){
        //     setArray(gynecology);
        //     }else if(e.target.value === "urol"){
        //     setArray(urology);
        //     }else if(e.target.value === "ortho"){
        //     setArray(orthodontist);
        //     }else if(e.target.value === "cardio"){
        //     setArray(cardiologist);
        //     }else if(e.target.value === "pedia"){
        //     setArray(pediatrician);
        //     }
        
        setForm({ ...form, [name]: value, });
      
    };
    const handleSubmit = (e) => {
        e.preventDefault();
           console.log("form", form);
         //  console.log(array)
         
       // getData(formDet);
    };

    return(
        <div>

             <div>Book Appointments Below</div>
            <form id="input_form"  onSubmit={handleSubmit}>
                <label>ENTER NAME: </label>
                <input onChange={handleChange} name="patientname" type="text" placeholder="Enter Patient Name" />

                <label>ENTER AGE: </label>
                <input onChange={handleChange} name="age" type="number" placeholder="Enter Patient Age" />
                 
                <label>SELECT GENDER: </label>
                <select onChange={handleChange} name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others</option>
                </select >

                <label>SELECT DEPARTMENT: </label>
                <select onChange={handleChange} name="department">
                    <option value="none">None</option>
                    <option value="gynecol">Gynecology</option>
                    <option value="neurol">Neurology</option>
                    <option value="urol">Urology</option>
                    <option value="ortho">Orthodontist</option>
                    <option value="cardio">Cardiologist</option>
                    <option value="pedia">Pediatrician</option>
                </select >
                
                <label>DOCTORS: </label>
                <select onChange={handleChange} name="doctor">
                   {/* { console.log("array", array) } */}
                    {/* { array.map(element => {
                       return ( <option value = {element}> {element} </option> )
                    }) */}
                {/* }; */}
                </select >

                <label>DATE</label>
                <select onChange={handleChange} name="date">
                    <option value="to_date">{d.dd}-{d.mm}-{d.yyyy}</option>
                </select>
                

               <button onClick={handleSubmit}>Submit</button>
            </form>
            
        </div>
        
    );
}

