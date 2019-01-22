import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Testing for github.
            Editing the expense with id of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;