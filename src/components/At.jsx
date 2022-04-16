import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const At = ({ href, children }, props) => {
    return ( <Link {...props} to={href}>{children}</Link> )
}

At.propTypes = {
    href: PropTypes.string.isRequired
}
 
export default At