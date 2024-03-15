import { useSelector } from "react-redux";

const About = () => {
  const about = useSelector(state => state.user.about);
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src={about.avatarUrl} alt="avatar" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            {about.description}
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 24
              </li>
              <li>
                <strong>Residence:</strong> USA
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> {about.address}
              </li>
              <li>
                <strong>Phone:</strong> {about.phoneNumber}
              </li>
              <li>
                <strong>E-mail:</strong> {about.email}
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
