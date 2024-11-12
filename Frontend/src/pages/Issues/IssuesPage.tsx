import React from "react";
import NavBar from "../../components/navigation/NavBar";
import { IssuePageProps } from '../../interfaces';
import './IssuePage.css';



const IssuesPage: React.FC<IssuePageProps> = ({issues}) => {
    const mappedIssues = issues.map((issue) =>{
        const {issueName, issueDescription} = issue;

        // if issue name & des or just name exist, creates trade tile
        if(issueName && issueDescription || issueName){ 
            return(
            
                <ul key={issue.issueId} className="issue-list">
                    <h3>{issueName}</h3>
                    <hr />
                    <p>{issue.tradeDate}</p>
                    <p>{issueDescription}</p>
                </ul>
            )
        }
})

    return(
        <>
        <div className="container">
            <NavBar />
            <section className="issue-container">
                {mappedIssues}
            </section>
        </div>
        </>
    );
}

export default IssuesPage;