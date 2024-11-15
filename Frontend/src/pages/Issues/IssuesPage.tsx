import React from "react";
import NavBar from "../../components/navigation/NavBar";
import { IssuePageProps } from '../../interfaces';
import './IssuePage.css';



const IssuesPage: React.FC<IssuePageProps> = ({issues}) => {
    const mappedIssues = issues.map((issue) =>{
        const {issueName, issueDescription} = issue;

        if(issueName && issueDescription || issueName && !issueDescription){ 
            return(
            
                <ul key={issue.issueId} className="issue-list">
                    <h3>{issueName}</h3>
                    <hr />
                    <p>{issue.tradeDate}</p>
                    <p>{issueDescription}</p>
                </ul>
            )
        } else {
            return;
        }
})

    return(
        <>
        <div className="container">
        <h3 id="issuepage-title">Issue Page</h3>
            <NavBar />
            <section className="issue-container">
                {mappedIssues}
            </section>
        </div>
        </>
    );
}

export default IssuesPage;