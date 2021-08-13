import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { Header } from './cmps/Header'

export function App() {
  return (
    <div className="app flex column">
      <Router>
        <Header />
        <main className="full flex column align-center">
          <Switch>
            {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
          </Switch>
        </main>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}


