import { route } from '@/routes'
import { At } from '@/components'

export const Home = () => {
    return (
        <div className="App">
            home page
            <At href={route('login:index')}>To Login</At>
        </div>
    )
}

export default Home
