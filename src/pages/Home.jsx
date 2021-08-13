import { Link } from 'react-router-dom'

export const Home = () => {

    return (
      <div className="home flex column align-center justify-center">
       <h1>The Loop Machine</h1>
       <Link to='/loop-machine'>
       Start playing
       </Link>
      </div>
    )
  
}


