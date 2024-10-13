import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import MainPage from "./pages/MainPage";
import AccountPage from "./pages/AccountPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path='/home' element={<MainPage/>}/>
				<Route path='/account' element={<AccountPage/>}/>
			</Routes>
		</Router>
	);
}

export default App;
