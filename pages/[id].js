const Video = ({ video }) => {
	console.log(video);
	return <div className={'video'}>{video.items[0].snippet.title}</div>;
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
		`https://www.googleapis.com/youtube/v3/videos?id=${params.id}&key=${key}&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`
	);
	const data = await res.json();
	return { props: { video: data } };
};
