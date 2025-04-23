import { Link } from "react-router-dom"
import './style.css'

const Routing = () => {
    return(
        <>
            <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/card">Card</Link>
                <Link to="/cardlist">CardList</Link>
                <Link to="/about">About</Link>
            </div>
        </>
    )
}

export default Routing