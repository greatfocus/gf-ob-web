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
            <div class="pricing-card-wrapper-link">
              <div class="card-header">
                <div class="cardTitles">
                  <h3>{content ? content.package.bronze.name : "loading..."}</h3>
                </div>
              </div>
              <div class="divider"></div>
              <div class="card-content">
                <div class="cost">
                  <h2>{content ? content.package.bronze.cost : "loading..."}
                    <span class="monthText">
                      <span class="month">/{content ? content.obituary : "loading..."}</span>
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
            <div class="pricing-card-wrapper-link">
              <div class="card-header">
                <div class="cardTitles">
                  <h3>{content ? content.package.silver.name : "loading..."}</h3>
                </div>
              </div>
              <div class="divider"></div>
              <div class="card-content">
                <div class="cost">
                  <h2>{content ? content.package.silver.cost : "loading..."}
                    <span class="monthText">
                      <span class="month">/{content ? content.obituary : "loading..."}</span>
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
            <div class="pricing-card-wrapper-link">
              <div class="card-header">
                <div class="cardTitles">
                  <h3>{content ? content.package.gold.name : "loading..."}</h3>
                </div>
              </div>
              <div class="divider"></div>
              <div class="card-content">
                <div class="cost">
                  <h2>{content ? content.package.gold.cost : "loading..."}
                    <span class="monthText">
                      <span class="month">/{content ? content.obituary : "loading..."}</span>
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
