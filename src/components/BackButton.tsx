import { Link } from "react-router-dom"

function BackButton() {

  return (
    <Link reloadDocument to={'/'}>
             <button>
      <i className="arrow"></i>
    </button>
          </Link>
   
  )
}

export default BackButton