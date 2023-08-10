import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}) {
    return (
      <button className="CreateTodoButton" onClick={(event) => {
        setOpenModal(state=> !state)
      }
      } >+</button>
    );
  }
  
  export { CreateTodoButton };