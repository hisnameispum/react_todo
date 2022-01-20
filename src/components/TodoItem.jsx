import React, {useState} from "react";
function TodoItem(props){
    const [isDone, setIsDone] = useState(false);
    function done(){
        setIsDone(prevValue => {
            return !prevValue;
        });
    }

    return <li onClick={done} style={isDone ? {textDecoration:"line-through"}:null}>{props.todoItem}</li>;
}

export default TodoItem;