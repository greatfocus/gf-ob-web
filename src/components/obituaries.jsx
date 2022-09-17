import React, { useEffect, useState } from 'react'
import { Spinner } from "reactstrap";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export const Obituaries = (props) => {
  const location = useLocation();
  const content = location.state?.data;
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/allData')//add your api call
      .then((re) => {
        setIsLoading(false);
        setData(re.data.result);
      })
      .catch((err) => {
        setIsLoading(false);
      })
  }, []);

  return (
    <div id="obituaries">
      <div className="container">
        {
          IsLoading &&
          <div className="loader">
            <Spinner color="light" />
          </div>
        }
        {
          data
        }
        <div className="row">
          <h2>{content ? content.title : "loading..."}</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="inner-our-obituaries-box">
              <div className="media">
                <Link className='pull-left' to='/obituaries/view?id=1'>
                  <img src="https://transitions.nation.co.ke/public/uploads/announcements/9dc065b4d5ee6e6f28c8bbdacdec5367.jpg" alt="Teresa Nyaboke Mogeni" className="media-object" width="235" />
                </Link>
                <div className="media-body">
                  <h3 className="media-heading">
                    <Link to='/obituaries/view?id=1'>
                      Teresa Nyaboke Mogeni
                    </Link>
                  </h3>
                  <p>SEP 18, 1948 - Sep 6th, 2022</p>
                  <p>DEATH AND FUNERAL ANNOUNCEMENT

                    Teresa Nyaboke Mogeni

                    Sunrise: 18/01/1991 ~ Sunset: 06/09/2022

                    It is with humble acceptance of God’s will that we announce the death of Teresa Nyaboke Mogeni at Nakuru Nursing Home formerly of Miti Mingi...
                  </p>
                  <div className="obituaries-button">
                    <Link className="btn-custom" to='/obituaries/view?id=1'>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
