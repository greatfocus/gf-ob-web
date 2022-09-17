import { useLocation, Link } from "react-router-dom";

export const Home = (props) => {
    const location = useLocation();
    const content = location.state?.data;
    return (
        <div id="home">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="home-text">
                            <h2>{content ? content.title : "loading..."}</h2>
                            <ul>
                                <li>{content ? content.summary.share : "loading..."}</li>
                                <li>{content ? content.summary.updates : "loading..."}</li>
                                <li>{content ? content.summary.condolescence : "loading..."}</li>
                                <li>{content ? content.summary.providers : "loading..."}</li>
                            </ul>
                            
                        </div>
                        <div className="home-button">
                            <Link to='/obituary/create' className="btn-custom">{content ? content.getStarted : "loading..."}</Link>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <div class="img-responsive home-summary-image"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
