import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { PageRoutes } from "./constants/PageRoutes";

function App() {
	return (
		<Router>
			<Routes>
				<Route path={PageRoutes.Landing} element={<LandingPage />} />
				<Route path={PageRoutes.SignUp} element={<SignUpPage />} />
				<Route path={PageRoutes.Login} element={<LoginPage />} />
				<Route path={PageRoutes.Home} element={<HomePage/>}/>
				<Route path={PageRoutes.Profile} element={<ProfilePage/>}/>
			</Routes>
		</Router>
	);
}

export default App;
