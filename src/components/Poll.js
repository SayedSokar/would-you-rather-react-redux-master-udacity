import { Card, Button } from 'react-bootstrap'
import { Link, useHistory  } from 'react-router-dom'
import { useSelector } from 'react-redux'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

function Poll({ques}) {
    const users = useSelector(state => state.entities.users)
    const history = useHistory();
    const routeChange = () =>{ 
    let path = `/questions/${ques.id}`; 
        history.push(path);
        }


        return (
            <Card>
                <Card.Img variant="top" src={users[ques.author].avatarURL} />
                <Card.Body>
                    <Card.Title>{ users[ques.author].name  } asks</Card.Title>
                    <Card.Text>
                        Would you rather
                    </Card.Text>
                    <Link to={`/questions/${ques.id}`}><Button variant="primary" block onClick={routeChange}>View Poll</Button></Link>
                </Card.Body>
            </Card>
        )
    
}

//-----------------------------------------------------------------------------//
export default Poll