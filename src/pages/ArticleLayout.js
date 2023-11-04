import Sidebar from "./Sidebar";
import "./ArticleLayout.css";

const ArticleLayout = ({children}) => {
    return (
        <div className="article-page-wrapper">
            <Sidebar />
            <div className="article-wrapper">
                {children}
            </div>
        </div>


    )
}

export default ArticleLayout;