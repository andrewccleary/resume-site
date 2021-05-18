import React from 'react';
import './Skill.css';
import { BarChart, Cloud, Language } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';


class Skill extends React.Component {

    render() {
        return (
            <div className="Skill">
                <h1>Technical Skills</h1>
                <p>Select a category to expand.</p>
                <div className="Skill-box">
                    <Accordion>
                        <AccordionSummary className="Skill-header" expandIcon={<ExpandMoreIcon />}>
                            <div>
                                <Language fontSize="large"></Language>
                                <h3>Languages</h3>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <Chip className="Chip" label="Python" />
                                <Chip className="Chip" label="SQL" />
                                <Chip className="Chip" label="Swift" />
                                <Chip className="Chip" label="HTML" />
                                <Chip className="Chip" label="Angular" />
                                <Chip className="Chip" label="TypeScript" />
                                <Chip className="Chip" label="CSS" />
                                <Chip className="Chip" label="React" />
                                <Chip className="Chip" label="C++" />
                                <Chip className="Chip" label="Javascript" />
                                <Chip className="Chip" label="YAML" />
                                <Chip className="Chip" label="Java" />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="Skill-box">
                    <Accordion>
                        <AccordionSummary className="Skill-header" expandIcon={<ExpandMoreIcon />}>
                            <div>
                                <Cloud fontSize="large"></Cloud>
                                <h3>AWS Cloud Technologies</h3>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <Chip className="Chip" label="DynamoDB" />
                                <Chip className="Chip" label="API Gateway" />
                                <Chip className="Chip" label="RDS" />
                                <Chip className="Chip" label="Lambda" />
                                <Chip className="Chip" label="Cognito" />
                                <Chip className="Chip" label="AppSync" />
                                <Chip className="Chip" label="S3" />
                                <Chip className="Chip" label="Route53" />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="Skill-box">
                    <Accordion>
                        <AccordionSummary className="Skill-header" expandIcon={<ExpandMoreIcon />}>
                            <div>
                                <BarChart fontSize="large"></BarChart>
                                <h3>Data Analytics</h3>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <Chip className="Chip" label="Tableau" />
                                <Chip className="Chip" label="Machine Learning" />
                                <Chip className="Chip" label="Apache Airflow" />
                                <Chip className="Chip" label="PowerBI" />
                                <Chip className="Chip" label="R" />
                                <Chip className="Chip" label="Apache Superset" />
                                <Chip className="Chip" label="SSIS" />
                                <Chip className="Chip" label="SSRS" />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default Skill;