import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {deleteSmurf} from '../actions/smurfActions'


function SmurfCard(props){
    const deleteCard = (id)=>{
        axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => console.log(res))
    }
    return(
        <div>
            <p>name: {props.data.name}</p>
            <p>age: {props.data.age}</p>
            <p>height: {props.data.height}</p>
            <p>id: {props.data.id}</p>
            <button onClick={() => props.deleteSmurf(props.data.id)}>delete</button>
        </div>
    )
}

export default connect(
    null,
    { deleteSmurf })(SmurfCard)