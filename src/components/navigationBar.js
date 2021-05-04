import { Navbar, Button, Nav} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { DELETE_AUTHED_USER } from '../slices/authuserSlice'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'

//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

function NavigationBar() {
    const authuser = useSelector(state => state.entities.authuser.name)
    const dispatch = useDispatch()


    const logout = () => {
        dispatch(DELETE_AUTHED_USER())
    }

    
        if(authuser === '') {
            return (
                <Redirect to="/login" />
            )
        }

        return (
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/add">New Question</Link>
                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                    </Nav>
                    <Nav>
                        <div className="navText">Hello, {authuser}</div>
                    {/* <Image src={authuser.avatarURL} rounded /> */}
                    <Button variant="outline-primary" onClick={logout}>Logout</Button>
                    </Nav>
                </Navbar>
            
        )
    
}

//-----------------------------------------------------------------------------//

export default NavigationBar