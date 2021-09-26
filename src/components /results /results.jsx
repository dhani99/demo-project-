import React from 'react';

const Results = (props) => {
    const name = props.name;
    const title = props.title;
    const todo = props.todo;
    return(
        <div>
            <p> Name: {name}</p>
            <p> Title: {title}</p>
            <p> Todo:{todo}</p>
        </div>
    );

    
};

export default Results;