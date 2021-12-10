import { useState } from 'react';
import YouTube from 'react-youtube';
import styles from '../styles/video.module.css';
const Video = ({ video, comments }) => {
	console.log(video);
	console.log(comments);

	const [dsc, setDsc] = useState(false);
	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	return (
		<div className={styles.cont}>
			<div className={styles.left}>
				<div className={styles.player}>
					<YouTube
						videoId={`${video.items[0].id}`}
						opts={opts}
						className={styles.yt}
					/>
				</div>
				<div className={styles.about}>
					<p className={styles.title}>{video.items[0].snippet.title}</p>
					{dsc && (
						<div className={styles.desc}>
							<p>{video.items[0].snippet.description}</p>
						</div>
					)}
					<button
						onClick={() => {
							if (dsc) {
								setDsc(false);
							} else setDsc(true);
						}}
					>
						{!dsc ? 'Read More' : 'Hide'}
					</button>
				</div>
			</div>
			<div className={styles.right}>comments here</div>
		</div>
	);
};

export default Video;

export const getStaticPaths = async () => {
	const key = 'AIzaSyCfpiw7jgxpnLiUtKxzOiLYxYwzftWuPYY';
	const chId = 'UCXw0dnfXlCMExVOUpK-iOWg';
	const res = await fetch(
		`https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${chId}&part=snippet,id&order=date&maxResults=20`
	);
	const data = await res.json();
	console.log(data);
	const paths = data.items.map((video) => ({
		params: { id: video.id.videoId },
	}));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const key = 'AIzaSyCfpiw7jgxpnLiUtKxzOiLYxYwzftWuPYY';
	const res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cid&id=${params.id}&key=${key}`
	);
	const data = await res.json();

	const res2 = await fetch(
		`https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${params.id}&maxResults=50 `
	);
	const data2 = await res2.json();
	return { props: { video: data, comments: data2 } };
};
