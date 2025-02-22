import React from "react";
import NavBar from "../../components/navigation/NavBar";
import { IssuePageProps } from '../../interfaces';
import './IssuePage.css';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const IssuesPage: React.FC<IssuePageProps> = ({issues, deleteIssue}) => {
    const mappedIssues = issues.map((issue) =>{
        const {issueName, issueDescription} = issue;
        const handleDelete = (issueId: number | undefined) => {
            if(issueId){
                deleteIssue(issueId);
            }
        }

        if(issueName && issueDescription || issueName && !issueDescription){ 
            return(
            
                <ul key={issue.issueId} className="issue-list">
                    <h3>{issueName}</h3>
                    <hr />
                    <p>{issue.tradeDate}</p>
                    <p>{issueDescription}</p>
                    <div className="button">
                    <div className="icon" onClick={() => handleDelete(issue.issueId)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                    </div>
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