import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Doctor = () => {
    const [doctors, setDoc] = useState([]);

    let array = [1, 3, 4, 5, 6];

    // useEffect(() => {
    //     console.log("in-effect", doctors);
    //     getProducts();
    // }, []);

    const getProducts = () => {
        fetch("http://localhost:2123/doctor")
        .then((d) => d.json())
        .then((res) => {
            setDoc(res);
            console.log("in-get", doctors);
        })
    };  

    return (
        <div>
            <h1>Doctors Page</h1>
            {array.map((element) => (
                <div style={{border: "4px solid black", margin: "auto", width: "400px", marginBottom: "4px", padding: "10px", textAlign: "center"}}>
                    <div style={{width: "200px"}}>{element}</div>
                </div>
            ))}
            {/* {doctors.map(({ first_name, last_name, id }) =>
            {
               return (
                    <div style={{border: "4px solid black", margin: "auto", width: "400px", marginBottom: "4px", padding: "10px", textAlign: "center"}}>
                        <div style={{width: "200px"}}>Doctor: {first_name}</div>
    
                        <Link to={`/doctor/${id}`}>More details</Link>
                    </div>
                )
            }
            )} */}
        </div>
    )
}