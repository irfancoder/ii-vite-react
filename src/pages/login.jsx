import { At } from '@/components'
import { route } from '@/routes'


export const Login = () => {
    return (
        <div className="App">Login
            <At href={route('home:index')}>To Home</At>
        </div>
    )
}

export default Login
