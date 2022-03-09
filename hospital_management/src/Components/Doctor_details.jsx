import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Doctor_Details = () => {
    const { id } = useParams();
    const [doctor, setDoctors] = useState([]);

    useEffect(() => {
        console.log(doctor);
        getProduct();
    });

    const getProduct = () => {
        fetch(`http://localhost:2123/doctors/${id}`)
        .then((d) => d.json())
        .then((res) => {
            setDoctors(res);
        })
    };

    const { first_name, last_name } = doctor;
    return(
        <div>
            <div>{first_name}</div>
            <div>{last_name}</div>
            <div>
                This is a doctor....
            </div>
        </div>
    )
};