import React from "react";
import './Input.Styles.css'

const Input = () => {
    return(
        <form>
        <input type="text" placeholder="Add Todo"></input>
        <button className="btn-add">Add</button>
        </form>
    )
}

export default Input