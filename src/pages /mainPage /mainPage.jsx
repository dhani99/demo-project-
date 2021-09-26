import React, {useState, useRef} from "react";
import Results from "../../components /results /results";

const MainPage = (props) => {
    const [ name, setName] = useState ("Dhwani");
    const [ title, setTitle] = useState ("This is the start");
    const [ todo, setTodo] = useState ("Read book");

    const nameRef = useRef();
    const titleRef = useRef();
    const todoRef = useRef();

    console.log(name, title, todo);

    const onSubmitHandler = () => {
        setName(nameRef.current.value);
        setTitle (titleRef.current.value);
        setTodo (todoRef.current.value);
       

    }
    return(
    <div>
        <h1>Main Page</h1>
        <div>
            <label> Name </label>
            <input ref={nameRef} type="text" />
        </div>
        <div>
            <label> title </label>
            <input ref={titleRef} type="text" />
        </div>
        <div>
            <label> Todo </label>
            <input ref={todoRef} type="text" />
        </div>

       

        <Results name = {name} title = {title}  todo = {todo}/>

        <button onClick = {onSubmitHandler}> Submit</button>
    </div>
    );

}


export default MainPage;