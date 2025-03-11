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
                    <h4>{issueName}</h4>
                    <hr />
                    <p>{issue.tradeDate}</p>
                    <p className="issue-box">{issueDescription}</p>
                    <div className="button">
                        <div className="delete-icon" onClick={() => handleDelete(issue.issueId)}>
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
        <div className="issue-page page-container">
            <NavBar />
            <header>
                <h3 className='title'>Your Issues</h3>
            </header>
            <main>
                <section aria-labelledby="issue-list-header" className="issue-container">
                    <h3 id="issue-list-header" className="sr-only">List of recorded Issues</h3>
                    {mappedIssues}
                </section>
            </main>
        </div>
    );
}

export default IssuesPage;