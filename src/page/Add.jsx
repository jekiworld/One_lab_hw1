import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")

    const navigateTo = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const onSave = () => {
        if(!name || !surname || !phone) return; //условия сохранения, чтобы он не сохранял пустые поля
        let list = sessionStorage.getItem("list");
        if(!list){
            list = [];
        } else {
            list = JSON.parse(list);
        }
        list.push({
            name,
            surname,
            phone
        })
        sessionStorage.setItem("list", JSON.stringify(list));
        navigateTo("/");
    }

    return (
        <div className="form">
            <div className="form-content">
                <input onChange={handleNameChange} type="text" value={name} placeholder='First Name'/>
                <input onChange={handleSurnameChange} type="text" value={surname} placeholder='Second Name'/>
                <input onChange={handlePhoneChange} type="text" value={phone} placeholder='Phone'/>
                <button onClick={onSave} className='submit'>Submit</button>
            </div>
        </div>
    )
}
