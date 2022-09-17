export const Footer = (props) => {
    return (
        <div id='footer'>
            <div className='container text-center'>
                <p>
                    &copy; All rights reserved © 2022 - {' '} <a href='http://www.greatfocus.com' rel='nofollow'>Great Focus</a>
                </p>
                <div>
                    <a href="https://www.facebook.com/greatfocus" style={{textecoration: "none"}}>
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/greatfocus">
                        <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"  alt="instagram"/>
                    </a>
                    <a href="https://www.twitter.com/greatfocus">
                        <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter" />
                    </a>
                </div>
            </div>
        </div>
    )
}
