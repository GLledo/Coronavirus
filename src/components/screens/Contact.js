import React, {useState} from 'react'
import Label from '../UI/Label'
import FormGroup from '../UI/FormGroup'

const Contact = () => {
    
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`${fullname}`)
    } 

    function handleChangeFullname(event){
        setFullName(event.target.value)
    }
    function handleChangeEmail(event){
        setEmail(event.target.value)
    }
    function handleChangeMessage(event){
        setMessage(event.target.value)
    }

    return(
        <form>
            <FormGroup onSubmit={handleSubmit}>
                <Label>Nombre:</Label>
                <input type="text" value={fullname} onChange={handleChangeFullname}/>
            </FormGroup>
            <FormGroup>
                <Label>Email:</Label>
                <input type="text" value={email} onChange={handleChangeEmail}/>
            </FormGroup>
            <FormGroup>
                <Label>Mensaje:</Label>
                <textarea value={message} onChange={handleChangeMessage}/>
            </FormGroup>
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Contact