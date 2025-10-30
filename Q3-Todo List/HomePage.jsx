import React,{useState} from 'react';

function Home(){
    const [isChecked, setIsChecked] = useState(false);
    const [todos, setTodos]=useState([]);
    const [inputValue, setInputValue]=useState([]);
    const addTask = ()=>{
        const newToDo={
            id: Date.now(),
            text: inputValue
        };
        setTodos([...todos,newItem]);
        setInputValue('');
    }
    return(
        <div>
            <h1>Todo List</h1>
            <label>
                <input type="checkbox"
                checked={isChecked}
                onChange={()=>setIsChecked(!isChecked)} 
                /> 
                <input type="text" value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                placeholder='Enter a new task'
                />
            </label>
            <button onClick={addTask}>Add new task</button>

        </div>
        


    );
}
export default Home