const Persona = (props) => {

    const {email,ciudad,name} = props

    return(
        <div style={{marginTop:"10px"}}>
                <li>Email: {email}</li>
                <li>Ciudad: {ciudad}</li>
                <li>Nombre: {name}</li>
        </div>
    )
}

export default Persona