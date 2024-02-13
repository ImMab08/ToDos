import './CreateTodoButton.css'

function CreateTodoButton () {
    return (
      <>
        <button
          onClick={(event) => {
            console.log("Clic")
            console.log(event)
          }} 
          className='CreateTodoButton'>+</button>
      </>
    );
  }
  
  export { CreateTodoButton };