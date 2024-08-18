import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import { Bolt } from './components/icons/index';
import Footer from './components/footer';

function App() {
	return (
		<div className='App'>
			<AppRoutes />
			<div className='absolute top-4 right-4 text-white'>
				<Bolt />
			</div>
			<Footer />
		</div>
	);
}

export default App;
