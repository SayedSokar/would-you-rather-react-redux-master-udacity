import { useSelector } from 'react-redux'
import { Container, Col } from 'react-bootstrap'
import NavigationBar from './navigationBar'
import LeaderboardCard from './leaderboardCard'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

function Leaderboard (){
    const users = useSelector(state => state.entities.users)
    // const questions = useSelector(state => state.entities.questions)
    // const authedUser = useSelector(state => state.entities.authuser.name)

        const sortedUsers = Object.values(users).sort((a, b) => {
        const x1 = (Object.keys(a.answers)).length + a.questions.length
        const x2 = (Object.keys(b.answers)).length + b.questions.length
        return x2 - x1
})
    
        return (
            <div>
                <NavigationBar />
                <Container>
                <Col xs={6} md={6}>
                {sortedUsers.map((user) => (
                <LeaderboardCard key={user.id} user={user}/>
                ))}
                </Col>
                </Container>
            </div>
        )

}


//-----------------------------------------------------------------------------//

export default Leaderboard