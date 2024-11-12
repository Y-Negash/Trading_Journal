import { useEffect, useState } from "react";
import { Issue, IssuePageProps } from "../../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

const IssueWidget:React.FC<IssuePageProps> = ({ issues }) => {
    const [latestIssues, setlatestIssues] = useState<Issue[]>([]);

    useEffect(() => {
    if(issues.length > 3){
        setlatestIssues(issues.slice(-3));
    } else {
        setlatestIssues(issues);
    }
    }, [issues])
    console.log(latestIssues)

    const mappedLatestIssues = latestIssues.map((recentIssue) => {
        return(
            <a href="/issues">
                <li key={recentIssue.issueId} className="recent-issue">
                    <span className="icon"><FontAwesomeIcon icon={faBug} /></span>
                    <span className="trade-name">{recentIssue.issueName}</span>
                </li>
            </a>
        )
    })

    return(
        <div className="recent-issues">
            <h3 className="widget-title">Recent Issues</h3>
            <hr/>
            <div className="recent-issue-list">

            {mappedLatestIssues}
            </div>
        </div>
    )
}

export default IssueWidget;