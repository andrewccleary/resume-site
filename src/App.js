import './App.css';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skill from './components/skill/Skill';
import Lottie from 'react-lottie';
import developerLottie from './lotties/27432-developer';
import electricalPanelLottie from './lotties/29137-electrical-panel';
import facebookLottie from './lotties/38798-facebook';
import energyLottie from './lotties/52366-energy';
import codeLottie from './lotties/24982-code.json';
import arrowLottie from './lotties/42594-arrow';
import certificateLottie from './lotties/34223-certificate';
import booksLottie from './lotties/34490-book-animation';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


function App() {
  const developerOptions = {
    loop: true,
    autoplay: true,
    animationData: developerLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const certificateOptions = {
    loop: true,
    autoplay: true,
    animationData: certificateLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const booksOptions = {
    loop: true,
    autoplay: true,
    animationData: booksLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const electricalPanelOptions = {
    loop: true,
    autoplay: true,
    animationData: electricalPanelLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const facebookOptions = {
    loop: true,
    autoplay: true,
    animationData: facebookLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const energyOptions = {
    loop: true,
    autoplay: true,
    animationData: energyLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const codeOptions = {
    loop: true,
    autoplay: true,
    animationData: codeLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const arrowOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Lottie
          options={developerOptions}
          height={200}
          width={200}
        />
        <h1>Andrew Cleary</h1>
        <h3>Full-Stack Software Engineer</h3>
        <div className="Link-list">
          <a
            className="App-link"
            href="https://github.com/andrewccleary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="App-link"
            href="https://linkedin.com/in/andrewccleary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>
      <div className="Experience">
        <h1>
          Experience
        </h1>
        <div className="Experience-header">
          <Lottie options={electricalPanelOptions} height={100} width={100} />
          <h4>GE Appliances, a Haier company</h4>
          <h6>Digital Leadership Development Program (DLDP) Associate</h6>
          <p>Full-stack web developer focused on building desktop and mobile web applications using the Angular framework to support supply chain and manufacturing business functions in North America</p>
          <p>Product owner for Lean manufacturing team’s Yamazumi digitization project – translating business requirements into User Stories and leading development efforts within Scrum team</p>
          <p>Employ cloud-first architectures to build scalable solutions within AWS (API Gateway, Lambda, DynamoDB, S3, Cognito)</p>
          <p>Lead Digital Technology Internship Program (~ 30 interns annually) planning engagement events, overseeing team and mentor placement, and managing performance evaluations</p>
        </div>
        <hr className="rounded"></hr>
        <div>
          <Lottie options={facebookOptions} height={100} width={100} />
          <h4>Facebook</h4>
          <h6>Data Engineering/Analytics Intern</h6>
          <p>Owner and architect of all WhatsApp Business API key metric data pipelines</p>
          <p>Developed dynamic pipeline framework to automatically generate and schedule DataSwarm pipelines</p>
          <p>Scripted and optimized Presto/Spark SQL queries for performance in distributed environment</p>
          <p>Developed dashboards for cross-functional partners to analyze shifts in key business metrics</p>
        </div>
        <hr className="rounded"></hr>
        <div>
          <Lottie options={energyOptions} height={100} width={100} />
          <h4>LGE and KU Energy</h4>
          <h6>IT Intern/Co-Op III</h6>
          <p>Developed ETL data pipelines using Microsoft SQL Server Integration Services to extract from SAP/Oracle/SQL Server/Flat Files to populate SQL Server data warehouse</p>
          <p>Developed multi-threaded .NET applications to transform data from external vendors</p>
          <p>Performed data pipeline troubleshooting, supported existing pipeline maintenance and upgrades through parallelization and SQL query optimization</p>
        </div>
        <hr className="rounded"></hr>
        <div>
          <Lottie options={codeOptions} height={100} width={100} />
          <h4>The Rawlings Group</h4>
          <h6>Software Engineer Co-Op</h6>
          <p>Developed .NET applications for mass tort litigation (legal) department to assist in external data import processes, internal finance workflows, and internal workflow automation</p>
          <p>Oversaw import of raw data from external vendors through internal import and standardization data pipelines</p>
          <p>Accommodated data transformation requirements through SQL scripts and modification to internal .NET standardization applications</p>
          <p>Utilized Agile/Scrum development methodologies to track development and ensure timely completion</p>
        </div>
      </div>
      <div className="Education">
        <Lottie options={booksOptions} height={100} width={100} />
        <h1>
          Education
        </h1>
        <Education degree="Master of Engineering"
          field="Computer Science and Engineering"
          university="University of Louisville"
          college="J.B. Speed School of Engineering"
        />
        <Education degree="Bachelor of Science"
          field="Computer Engineering and Computer Science"
          university="University of Louisville"
          college="J.B. Speed School of Engineering"
        />
      </div>
      <div className="Certifications">
        <Lottie options={certificateOptions} height={100} width={100} />
        <h1>Certifications</h1>
        <div>
          <h3>Certified Scrum Master</h3>
          <p>Scrum Alliance</p>
        </div>
        <div>
          <h3>Angular: Material Design</h3>
          <p>LinkedIn Learning</p>
        </div>
        <div>
          <h3>Microsoft Power BI</h3>
          <p>Tandem Solutions</p>
        </div>
      </div>
      <Skill></Skill>
      <div className="Footer">
        <img className="Profile" src="/images/headshot.jpeg" alt="Avatar"></img>
        <Button className="Download-button" href="https://s3.amazonaws.com/shutterflowapp.com/AndrewCleary_Resume_Download.pdf" variant="contained">Download Resume</Button>
        <p>&#169; Andrew Cleary 2021. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
