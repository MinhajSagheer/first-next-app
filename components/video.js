'use client'

import Styles  from "../src/app/page.module.css";
import Styles1  from "../src/app/bootstrap.css";
const Video = () => {

    const media_urls = [
        {
            id: 1,
            title: 'Video One',
            video_url:'https://res.cloudinary.com/chris101/video/upload/v1645684691/video_1.mp4',
            profile_url : 'https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png'
        },
        {
            id: 2,
            title: 'Video Two',
            video_url: 'https://res.cloudinary.com/chris101/video/upload/v1645684672/video_2.mp4',
            profile_url : 'https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png'
        },
        {
            id: 3,
            title: 'Video Three',
            video_url: 'https://res.cloudinary.com/chris101/video/upload/v1645684663/video_3.mp4',
            profile_url : 'https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png'
        },
    ];
    const handleMouseEnter = (e) => {
        const vid = e.target;
        vid.muted = true;
        vid.play();
    };

    const handleMouseLeave = (e) => {
        const vid = e.target;
        vid.muted = false;
        vid.currentTime = 0;
        vid.pause();
    };

    return (
        
        <>
        <h1 className="text-center mt-3">Cloudinary Video Show</h1>
        <div className="container">
            <div className="row">
                {media_urls.map((media) => (
                    <div key={media.id} className="col-lg-4 col-md-8 col-12 mt-3">
                        <div className="card h-100 ">
                            <div className="card-body text-center">
                                <h4 className="card-title">{media.title}</h4>
                                <video
                                    width="320"
                                    height="240"
                                    controls
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="img-fluid rounded "
                                >
                                    <source src={media.video_url} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default Video;
