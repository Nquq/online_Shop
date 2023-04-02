import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage/AdminPage';
import CardFullPage from './components/CardFullPage/CardFullPage';
import Cart from './components/Cart/Cart';
import DesktopFooter from './components/DesktopFooter/DesktopFooter';
import DesktopHeader from './components/DesktopHeader/DesktopHeader';
import Main from './components/Main/Main';
import MobileFooter from './components/MobileFooter/MobileFooter';
import MobileHeader from './components/MobileHeader/MobileHeader';

function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='App'>
			<Router>
				{windowWidth <= 768 ? <MobileHeader /> : <DesktopHeader />}
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='catalog/:code' element={<CardFullPage />} />
					<Route path='/admin' element={<AdminPage />} />
				</Routes>
				{windowWidth <= 768 ? <MobileFooter /> : <DesktopFooter />}
			</Router>
		</div>
	);
}

export default App;
