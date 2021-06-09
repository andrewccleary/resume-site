// CSS
import './Project.css';

// Modules
import Button from '@material-ui/core/Button';

function Project() {
    return (
        <div>
            <h1 class="project-header">Projects</h1>
            <div class="light-project">
                <h3>Dance Unlimited</h3>
                <h5>iOS Mobile App</h5>
                <h4>Technology</h4>
                <ul>
                    <li>SwiftUI</li>
                    <li>AWS Amplify</li>
                    <li>AWS Cognito</li>
                    <li>Band API</li>
                    <li>Sign In With Apple</li>
                </ul>
                <p class="project-description">Built for Dance Unlimited in Mt. Washington, KY, the DU iOS app allows authenticated access for dancers and dance parents to view messages from teachers, access the parent portal and booster sites, and quickly get in touch or navigate to the studio. <i>(Coming Summer 2021)</i></p>
            </div>
            <div class="dark-project">
                <div class="project-header">
                    <h3>ShutterFlowApp.com</h3>
                    <a href="https://github.com/andrewccleary/resume-site" target="_blank" rel="noopener noreferrer">
                        <img class="github-button" src="/images/GitHub-Mark-Light-64px.png" alt="GitHub"></img>
                    </a>
                </div>
                <h5>Website</h5>
                <h4>Technology</h4>
                <ul>
                    <li>React</li>
                    <li>AWS CloudFront</li>
                    <li>Lottie</li>
                    <li>AWS S3</li>
                </ul>
                <p class="project-description">The personal website for Andrew Cleary, ShutterFlowApp.com is a website built using the React framework. Animated Lottie graphics, AWS S3 buckets for file storage, and an AWS CloudFront distribution help repurpose this old domain to showcase Andrew's software engineering skillsets.</p>
            </div>
            <div class="light-project">
                <h3>QR WiFi</h3>
                <h5>iOS Mobile App</h5>
                <h4>Technology</h4>
                <ul>
                    <li>SwiftUI</li>
                    <li>CoreData</li>
                    <li>QR Codes</li>
                    <li>Dark Mode</li>
                </ul>
                <p class="project-description">The QR WiFi iOS app allows users to generate and save QR codes that can be scanned and shared to allow others to quickly connect to the wireless network whose data is encodeded into the QR image. Using data persistence through Apple's CoreData framework, the app allows users to save an endless number of QR codes for networks that use WPA, WEP, or open authentication protocols.</p>
            </div>
            <div class="dark-project">
                <div class="project-header">
                    <h3>Multi-functional Dictionary</h3>
                    <a href="https://github.com/andrewccleary/MultiFunctionalDictionary" target="_blank" rel="noopener noreferrer">
                        <img class="github-button" src="/images/GitHub-Mark-Light-64px.png" alt="GitHub"></img>
                    </a>
                </div>
                <h5>WPF Desktop App</h5>
                <h4>Technology</h4>
                <ul>
                    <li>.NET Framework</li>
                    <li>C#</li>
                    <li>PostgreSQL</li>
                </ul>
                <p class="project-description">MFD is a desktop application built on the Windows Presentation Foundation for religious scholars to study the King James Bible (KJV) in English, by referencing the original Hebrew to derive context. The application relies on a PostgreSQL relational database for data storage and advanced query functionality.</p>
            </div>
        </div>
    );
}

export default Project;