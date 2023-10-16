import axios from "axios";
import { useState,useEffect } from "react";
import x from '../../src/users.json'
import Persona from "./Persona";

const Users = () => {

    return (
        <div>
            <ul style={{marginTop:"100px"}}>
                {
                    x.map((posicion,index) => 
                    (   
                        <Persona 
                        key={index} 
                        email={posicion.email} 
                        ciudad={posicion.location.city}
                        name={posicion.name.first}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Users