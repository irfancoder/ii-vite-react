import { Link } from 'react-router-dom'

const At = ({ href, children }) => {
    return ( <Link to={href}>{children}</Link> )
}
 
export default At