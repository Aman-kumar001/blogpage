import Navbar from '../Components/navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
