import React from 'react';
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './MainPage';
import { check } from '../login';
import Logout from './Logout';
import UserSettings from './UserSettings';
import NotFound from './NotFound';


function App() {
	let [login, setLogin] = React.useState(false);
	check().then(r => setLogin(r))

	return (
		<React.Fragment>
			<Navbar />
			<Router>
				<Route path="/" exact> {login ? <MainPage/> : <Home/>} </Route>
				{/* <Route path="/" exact component={MainPage} /> */}
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/logout" exact component={Logout} />
				<Route path="/settings" exact component={UserSettings} />
				<Route component={NotFound} />
			</Router>
		</React.Fragment>
	)
}
export default App;
