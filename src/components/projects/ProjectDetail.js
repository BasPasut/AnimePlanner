import React from 'react'

function ProjectDetail(props) {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Project Title - {id}</span>
                    <p>ad asf asf asf sf af adg sfbfs nj jy ll</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by GOD</div>
                    <div>6/21/20</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetail
