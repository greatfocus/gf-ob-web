import { useLocation } from "react-router-dom";

export const Pricing = (props) => {
  const location = useLocation();
  const content = location.state?.data;
  return (
    <div id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="pricing-text">
              <h2>{content ? content.title : "loading..."}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="pricing-card-wrapper-link">
              <div className="card-header">
                <div className="cardTitles">
                  <h3>{content ? content.package.bronze.name : "loading..."}</h3>
                </div>
              </div>
              <div className="divider"></div>
              <div className="card-content">
                <div className="cost">
                  <h2>{content ? content.package.bronze.cost : "loading..."}
                    <span className="monthText">
                      <span className="month">/{content ? content.obituary : "loading..."}</span>
                    </span>
                  </h2>
                </div>
                <ul>
                    {content
                      ? content.package.bronze.features.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="pricing-card-wrapper-link">
              <div className="card-header">
                <div className="cardTitles">
                  <h3>{content ? content.package.silver.name : "loading..."}</h3>
                </div>
              </div>
              <div className="divider"></div>
              <div className="card-content">
                <div className="cost">
                  <h2>{content ? content.package.silver.cost : "loading..."}
                    <span className="monthText">
                      <span className="month">/{content ? content.obituary : "loading..."}</span>
                    </span>
                  </h2>
                </div>
                <ul>
                    {content
                      ? content.package.silver.features.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="pricing-card-wrapper-link">
              <div className="card-header">
                <div className="cardTitles">
                  <h3>{content ? content.package.gold.name : "loading..."}</h3>
                </div>
              </div>
              <div className="divider"></div>
              <div className="card-content">
                <div className="cost">
                  <h2>{content ? content.package.gold.cost : "loading..."}
                    <span className="monthText">
                      <span className="month">/{content ? content.obituary : "loading..."}</span>
                    </span>
                  </h2>
                </div>
                <ul>
                    {content
                      ? content.package.gold.features.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
