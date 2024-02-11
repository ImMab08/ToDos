import './TodoItem.css'

function TodoItem (props) {
  return (
    <>
      <li className='TodoItem'>
        <span>Y {props.completed} </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span>X</span>
      </li>
    </>
  );
}

export { TodoItem };