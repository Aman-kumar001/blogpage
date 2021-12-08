import styles from '../styles/Navbar.module.css';
const Navbar = () => {
	return (
		<div className={styles.cont}>
			<div className={styles.logoArea}>Logo</div>
			<div className={styles.linksArea}>
				<ul className={styles.links}>
					<li>link 1</li>
					<li>link 2</li>
					<li>link 3</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
