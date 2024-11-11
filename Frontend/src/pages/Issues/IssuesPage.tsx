import React from "react";
import NavBar from "../../components/navigation/NavBar";
import { Issue, Trade } from '../../interfaces';
import './IssuePage.css';

interface IssuePageProps{
    trades: Trade[];
}

const IssuesPage: React.FC<IssuePageProps> = ({trades}) => {
    const mappedIssues = trades.flatMap((trade) => trade.issues?.map((issue: Issue) =>{
        const {issueName, issueDescription} = issue;

        // if issue name & des or just name exist, creates trade tile
        if(issueName && issueDescription || issueName){ 
            return(
            
                <ul key={trade.id} className="issue-list">
                    <h3>{issueName}</h3>
                    <hr />
                    <p>{trade.tradeDate}</p>
                    <p>{issueDescription}</p>
                </ul>
            )
        }
}))

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