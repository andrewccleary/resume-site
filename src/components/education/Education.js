import React from 'react';

class Education extends React.Component {
    
    render() {
        return (
            <div className="Degree-box">
                <h3><b>{this.props.degree}</b></h3>
                <h4>{this.props.field}</h4>
                <h5>{this.props.university}, <i>{this.props.college}</i></h5>
            </div>
        )
    }
}

export default Education;