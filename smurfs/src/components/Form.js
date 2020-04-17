import React, { useState, useEffect } from 'react';
import SmurfCard from './SmurfCard'
import { connect } from 'react-redux';

import {postSmurfs} from '../actions/smurfActions'


function Form(props) {
    console.log(props)
    const [newSmurf, setNewSmurf] = useState({
        name:'',
        age:0,
        height:'',
        // id: Date.now()
    })

    const handleChanges= (e)=>{
        e.preventDefault()
        console.log(e)
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }
    const submitHandler= (e)=>{
        e.preventDefault()
        setNewSmurf({name:'',
        age:0,
        height:'',})
    }
    
    return (
      <div>
        <h1>SMURF FORM</h1>
        <form onSubmit={submitHandler}>
            <input 
            type="text"
            name="name"
            value={newSmurf.name}
            onChange={handleChanges}
            >
            </input>
            <input 
            type="number"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
            >
            </input>
            <input 
            type="text"
            name="height"
            value={newSmurf.height}
            onChange={handleChanges}
            >
            </input>
            <button type='submit' onClick={() => props.postSmurfs(newSmurf)}>add</button>
        </form>
      </div>
    );
  }
  
  const mapStateToProps = state => {
    // console.log(state)
    return {
      state:state.data
    };
  };
  
  export default connect(
    mapStateToProps,
    {postSmurfs})(Form)