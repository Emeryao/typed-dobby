let cateRes: Dobby.Response<Dobby.CategoryRes>;
if (cateRes.success) {
    console.log(cateRes.response.categories[0].cover_url);
}

let videoRes: Dobby.Response<Dobby.VideoRes>;
if (videoRes.success) {
    console.log(videoRes.response.video.video_url);
} else {
    console.error(videoRes.response.error_message || 'error occured 😈');
}
