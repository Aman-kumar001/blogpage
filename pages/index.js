import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../Components/navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	const route = useRouter();
	return (
		<div className={styles.container}>
			<p
				onClick={() => {
					route.push('/BlogPage');
				}}
			>
				Route
			</p>
		</div>
	);
}
