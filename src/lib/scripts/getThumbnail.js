export function getVideoCover(file, seekTo = 0.0) {
	return new Promise((resolve, reject) => {
		const videoPlayer = document.createElement('video');
		videoPlayer.setAttribute('src', URL.createObjectURL(file));
		videoPlayer.load();

		videoPlayer.addEventListener('error', (ex) => {
			reject('error when loading video file', ex);
		});

		videoPlayer.addEventListener('loadedmetadata', () => {
			if (videoPlayer.duration < seekTo) {
				reject('video is too short.');
				return;
			}

			setTimeout(() => {
				videoPlayer.currentTime = seekTo;
			}, 200);

			videoPlayer.addEventListener('seeked', () => {
				const canvas = document.createElement('canvas');
				canvas.width = videoPlayer.videoWidth;
				canvas.height = videoPlayer.videoHeight;
				const ctx = canvas.getContext('2d');
				ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

				ctx.canvas.toBlob(
					(blob) => {
						resolve(blob);
					},
					'image/jpeg',
					0.75
				);
			});
		});
	});
}
