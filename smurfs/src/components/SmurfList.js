import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard'
import { connect } from 'react-redux';

import {fetchSmurfs} from '../actions/smurfActions'


function SmurfList(props) {
    console.log(props)
    useEffect(()=>{
      props.fetchSmurfs()
    },[])
    
    return (
      <div>
        <h1>SMURF LIST</h1>
        {props.state.map(item =>{
            return <SmurfCard key={item.id} data={item}/>
        })}
      </div>
    );
  }
  
  const mapStateToProps = state => {
    console.log(state)
    return {
      state:state.data
    };
  };
  
  export default connect(
    mapStateToProps,
    {fetchSmurfs})(SmurfList)