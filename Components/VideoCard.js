import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/blog.module.css';

const myLoader = ({ src }) => {
	return `${src}`;
};

const VideoCard = ({ src, title, desc }) => {
	console.log(src);
	const [link, setLink] = useState(src);
	return (
		<div className={styles.cardBox}>
			<div className={styles.banner}>
				<Image
					loader={myLoader}
					src={'#'}
					src={title}
					height='180px'
					width='320px'
					unoptimized
				/>
			</div>
			<div className={styles.about}>
				<p className={styles.title}>{title}</p>
				<p className={styles.dsc}>{desc}</p>
			</div>
		</div>
	);
};

export default VideoCard;
