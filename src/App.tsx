import { useEffect, useState } from 'react';
import DesktopFooter from './components/DesktopFooter/DesktopFooter';
import DesktopHeader from './components/DesktopHeader/DesktopHeader';
import Main from './components/Main/Main';
import MobileFooter from './components/MobileFooter/MobileFooter';
import MobileHeader from './components/MobileHeader/MobileHeader';

function App() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth <= 768) {
			setIsMobile(true);
		}
	}, [window.innerWidth]);

	return (
		<div className='App'>
			{isMobile ? <MobileHeader /> : <DesktopHeader />}
			<Main />
			{isMobile ? <MobileFooter /> : <DesktopFooter />}
		</div>
	);
}

export default App;
