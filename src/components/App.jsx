import React, {useState} from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, addTodo] = useState([]);

  function handleChange(event){
      const newValue = event.target.value;
      setInputText(newValue);
  }

  function addItem(){
      addTodo(prevItems => {
          return [...prevItems, inputText];
      });
      setInputText("");
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {todoList.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
