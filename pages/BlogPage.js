import Link from 'next/link';
import VideoCard from '../Components/VideoCard';
import styles from '../styles/blog.module.css';
export const getStaticProps = async () => {
	const key = 'AIzaSyCfpiw7jgxpnLiUtKxzOiLYxYwzftWuPYY';
	const chId = 'UCXw0dnfXlCMExVOUpK-iOWg';
	const res = await fetch(
		`https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${chId}&part=snippet,id&order=date&maxResults=20`
	);
	const data = await res.json();
	return {
		props: { list: data },
	};
};

const BlogPage = ({ list }) => {
	console.log(list);

	return (
		<div className={styles.cont}>
			<p style={{ fontSize: '3rem' }}>
				Blog
				<span></span>
			</p>

			<div className={styles.videos}>
				{list.items.map((list, index) => {
					return (
						<div key={index} className={styles.videoCard}>
							<Link href={`/${list.id.videoId}`}>
								<a>
									<VideoCard
										src={list.snippet.thumbnails.medium.url}
										title={list.snippet.title}
										desc={list.snippet.description}
									/>
								</a>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BlogPage;
