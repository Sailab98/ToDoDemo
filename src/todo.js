import React from 'react';

const ToDo= (value,
            onIncrement,
            onDecrement
            )=>{
    
    return(
        <>
        <div className="ui segment">
            <h1>{value}</h1>
            <div className="ui button" onClick={onIncrement}>
                Add
            </div>

            <div className="ui button" onClick={onDecrement}>
                Decrease
            </div>

        </div>
        



        </>

    );
}
export default ToDo;