import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'


export async function mergeVideo(video, audio) {
    let ffmpeg = createFFmpeg();
    await ffmpeg.load();
    ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video));
    ffmpeg.FS('writeFile', 'audio.mp4', await fetchFile(audio));
    await ffmpeg.run('-i', 'video.mp4', '-i', 'audio.mp4', '-c', 'copy', 'output.mp4');
    let data = ffmpeg.FS('readFile', 'output.mp4');
    return new Uint8Array(data.buffer);
};