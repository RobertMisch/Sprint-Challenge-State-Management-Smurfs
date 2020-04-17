import React, { useEffect } from 'react';

function SmurfCard(props){
    return(
        <div>
            <p>name: {props.data.name}</p>
            <p>age: {props.data.age}</p>
            <p>height: {props.data.height}</p>
            <p>id: {props.data.id}</p>
            <button>delete</button>
        </div>
    )
}

export default SmurfCard