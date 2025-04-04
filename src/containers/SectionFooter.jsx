export default function SectionFooter() {
  return (
    <div className="section_footer ">
      <div className="container">
        <div className="footer_section_2">
          <div className="row-bottom">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="account_text">About Us</h2>
              <p className="ipsum_text_2">
                dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                veniam, quisdotempor incididunt r
              </p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="account_text">Useful Link</h2>
              <div className="useful_link">
                <ul>
                  <li>
                    <a href="#">Sun Glasses</a>
                  </li>
                  <li>
                    <a href="#">Optic glasses</a>
                  </li>
                  <li>
                    <a href="#">Lenses</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="account_text">Contact Us</h2>
              <p className="ipsum_text_2">
                dolor sit amet, consectetur magna aliqua. quisdotempor
                incididunt ut e{" "}
              </p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="account_text">Newsletter</h2>
              <input
                type=""
                className="email_text"
                placeholder="Enter Your Email"
                name="Enter Your Email"
              />
              <button className="subscribr_bt">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="social_icon">
          <ul>
            <li>
              <a href="#">
                <img src="/images/fb-icon.png" alt={""} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/twitter-icon.png" alt={""} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/linkdin-icon.png" alt={""} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/instagram-icon.png" alt={""} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
