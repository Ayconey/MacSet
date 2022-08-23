import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../css/menu.css'


export default function Menu(props) {
    const [Products,UpdateProducts] = useState([])
    const [Category,updateCategory] = useState('')
    const [Name,updateName] = useState('')

    
    let Menu = () => {
        console.log(Products) // here's the problem
        return <div id='menu'>
        <ul>
        {Products.map((item)=>(
            <div key={item.id}>
                <li>
                    <h3>{item.Name}</h3>
                </li>
            </div>
        ))}
        </ul>
    </div>
    }
    
    const getProducts = () => {
        const headers = {
            'Content-type':'application/json',
        }
        axios.get(`${props.url}menu/?category=${Category}&name=${Name}`,{headers:headers})
        .then(response=>{
            UpdateProducts(response.data)
        })
        
  }

    const changeCat = (catname)=>{
        updateCategory(catname);
        getProducts();
        
    }
    const changeName = (name)=>{
        updateName(name);
        getProducts();
    }

  useEffect(()=>{
    getProducts();
    
},[])

  return (
    <div>
        <div id='header'>
            <h1>Menu</h1>
            <p>Menu of the MacDonald's restaurant with shown nutrition</p>
        </div>
        <div id='filter'>
            <DropdownButton id="dropdown-basic-button" title="Category">
                <Dropdown.Item onClick={()=>{changeCat("")}}>All</Dropdown.Item>
                <Dropdown.Item onClick={()=>{changeCat("Breakfast")}}>Breakfast</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <p>Category:{Category}</p>
            <br></br>
            <br></br>
            <h4>Name:<input onChange={()=>{changeName(event.target.value)}} placeholder="product's name" /></h4>
        </div>
        <Menu />
    </div>
  )
}
