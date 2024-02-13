import { ReactComponent as CompletedSVG } from "./img/task.svg";
import { ReactComponent as DeleteSVG } from "./img/task-x.svg";

import './TodoIcon.css'

const iconTypes = {
  "completed": (color) => 
    <CompletedSVG className="icon-svg" fill={color} />,
  "delete": (color) => 
    <DeleteSVG className="icon-svg" fill={color} />,
}

function TodoIcon ({type, color, onClick}) {
    return (
      <>
        <span
          className={`Icon-container Icon-container-${type}`}
          onClick = {onClick}
        >
          {iconTypes[type](color)}
        </span>
      </>  
    );
}

export { TodoIcon };