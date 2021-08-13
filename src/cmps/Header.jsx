import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="app-header">
            <nav className="main-nav flex space-between">
                <NavLink exact to="/"><span>Home</span></NavLink>
                <NavLink to="/loop-machine">Play</NavLink>
            </nav>
        </header>
    )

}
