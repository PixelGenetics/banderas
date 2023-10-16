import axios from "axios";
import { useState,useEffect } from "react";
import '../styles/Home.css'

const Home = () => {

    const [informacion,setInformacion] = useState([])
    const [informacionNic,setInformacionNic] = useState([]) 
    const [clic,setClic] = useState(false)
    const [clic2,setClic2]= useState(false)

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/name/honduras').then(resp =>{
        console.log('dentro de axios: ',resp.data)
        setInformacion(resp.data)
    })
    },[])

    console.log('clic: ',clic)

    useEffect(() => {axios.get('https://restcountries.com/v3.1/name/nicaragua').then(resp =>{
        console.log('dentro de axios Nicaragua: ',resp.data)
        setInformacionNic(resp.data)
    })},[])

    return(
        <>


            
            <div className="cuerpo">


                <div className="pais">
                <button id="boton" onClick={() => setClic(!clic)}>Mostrar Informacion</button>
                {
                    clic === true ? ( 
                    <>
                        <div>
                            <img src={informacion[0]?.flags.svg} alt={informacion[0]?.flags.alt} id="bandera"/>
                        </div>

                        <p id="pais">Pais {informacion[0]?.name.common}</p>
                        <p id="capital">Capital: {informacion[0]?.capital}</p>
                        <p id="area">Area: {informacion[0]?.area}</p> 
                    </>
                    
                    )  : null
                }

                    
                </div>

                <div className="pais">


                <button id="boton" onClick={() => setClic2(!clic2)}>Mostrar Informacion</button>

                {
                    clic2 === true ? (
                        <>
                            <div>
                                <img src={informacionNic[0]?.flags.svg} alt={informacion[0]?.flags.alt} id="bandera"/>
                            </div>

                            <p id="pais">Pais {informacionNic[0]?.name.common}</p>
                            <p id="capital">Capital: {informacionNic[0]?.capital}</p>
                            <p id="area">Area: {informacionNic[0]?.area}</p>
                        </>
                    ) : null
                }
                </div>
            </div>
        </>
    )
}

export default Home