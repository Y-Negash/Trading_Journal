import React from "react";
import NavBar from "../../components/navigation/NavBar";
import { Trade } from '../../interfaces';

interface IssuePageProps{
    trades: Trade[];
}

const IssuesPage: React.FC<IssuePageProps> = ({trades}) => {
    const mappedIssues = trades.flatMap((trade) => trade.issues?.map((issue) =>{
        return(
        
            <ul key={trade.id} className="issue-list">
                <h3>{issue.issueName}</h3>
                <hr />
                <p>{issue.tradeDate}</p>
                <p>{issue.issueDescription}</p>
            </ul>
        )
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