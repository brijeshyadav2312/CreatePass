import React, { useState } from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Container = () => {
    const [password, setPassword]=useState('Click on Genetrate Password Button')
    const [length, setLength]=useState(8)
    const [uppercase, setUppercase ]=useState(true)
    const [lowercase, setLowercase]=useState(true)
    const [symbols, setsymbols]=useState(true)
    const [number, setNumber]=useState(true)

    const generatePassword = () =>{
        let password = '';
        for(let i=0; i<length; i++){
            let choice = random(0,3)
            if(lowercase && choice===0){
                password+=randomLower()
            }
            else if(uppercase && choice===1){
                password+=randomUpper();
            }
            else if(symbols && choice===2){
                password+=randomSymbol()
            }
            else if(number && choice===3){
                password+=random(0,9)
            }
            else{
                i--
            }
        }
        setPassword(password)
    }
    const random=(min=0,max=1) => {
        return Math.floor(Math.random()*(max+1-min)+min)
    }
    const randomLower = () => {
        return String.fromCharCode(random(97,122))
    }
    const randomUpper = () => {
        return String.fromCharCode(random(65,90))
    }
    const randomSymbol = () => {
        const symbols = "*&^%$#@!)({}><:/<>"
        return symbols[random(0,symbols.length-1)]
    }
  return (
    
    <div className='parent'>
        <h1>PASSWORD GENERATOR</h1>
        <div className="passArea">
            <input value={password} type="text" disabled className="inputArea"/>
            <CopyToClipboard text={password}
            onCopy={() => this.setState({copied: true})} >
                <img src="https://cdn-icons-png.flaticon.com/512/8860/8860785.png" alt="" className="copy" width={50}/>
            </CopyToClipboard>
        </div>
        <div className='range'>
            <p>Select Password Range</p>
            <select value={length} onChange={(e) => setLength(e.target.value)}>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
            </select>
        </div>
        <div className="chekArea">
            <input type="checkbox" defaultChecked={uppercase} onChange={(e) => setUppercase(e.target.checked)}/><span>Include Uppercase Letters</span><br/>
            <input type="checkbox"defaultChecked={lowercase} onChange={(e) => setLowercase(e.target.checked)}/><span>Include Lowercase Letters</span><br/>
            <input type="checkbox"defaultChecked={number} onChange={(e) => setNumber(e.target.checked)}/><span>Include Numbers</span><br/>
            <input type="checkbox"defaultChecked={symbols} onChange={(e) => setsymbols(e.target.checked)}/><span>Include Symbols</span>
        </div>
        <button onClick={generatePassword}>Generate Password</button>
        
    </div>
  )
}

export default Container

