import { useEffect, useState } from "react";
import { Issue, IssuePageProps } from "../../interfaces";

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
            <ul key={recentIssue.issueId}>
                {recentIssue.issueName}
            </ul>
        )
    })

    return(
        <>
            {mappedLatestIssues}
        </>
    )
}

export default IssueWidget;