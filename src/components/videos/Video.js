// CSS
import './Video.css';

function Video() {
    return (
        <div class="main">
            <h1 class="video-header">Videos</h1>
            <div class="video">
                <div>
                    <h3>5 Questions to Ask in your Software Engineer Interview</h3>
                    <p>Have an interview coming up for a software engineering position? Ask these 5 questions to impress your interviewer and help land you the job! These questions are designed to impress your interviewer and help figure out if the position and the company are right for you.</p>
                </div>
                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/mS3lZhCbelY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <hr className="rounded"></hr>
            <div class="video">
                <div>
                    <h3>How to ACE your Technical Interview</h3>
                    <p>Getting ready for a technical interview? In this video I talk you through a few of my tried and true tips landed me at Facebook, then we work through some practice problems so you can see what those tips look like in practice! </p>
                </div>
                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/5jKzRCanj1o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <hr className="rounded"></hr>
            <div class="video">
                <div>
                    <h3>The TRUTH about Computer Science</h3>
                    <p>Considering a career in the field of Computer Science? In this video I answer some of the internet’s most asked questions about the field, give you the advice I wish I had gotten before I got my degrees, and talk about the future of this field.</p>
                </div>
                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/2Sz_Vh_w598" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <hr className="rounded"></hr>
        </div>
    );
}

export default Video;