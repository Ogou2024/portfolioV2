//components
import {Link} from 'react-router-dom' 

// Function
export default function NotFound() {
    return (
        <>
            <div>
                <h2>This page does not exist.</h2>
                <p>Return to the <Link to="/">Homepage</Link></p>
            </div>
        </>
    )
}