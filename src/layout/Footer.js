import { useSelector } from "react-redux";

const Footer = () => {
  const about = useSelector(state => state.user.about);
  const socialHandles = useSelector(state => state.user.socialHandles);
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: {about.email}</p>
        <p>T: {about.phoneNumber}</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          {socialHandles.map(socialHandle => {
            const platform = socialHandle.platform.toLowerCase();
            return (
              <a target="_blank" rel="noreferrer" href={socialHandle.url} key={socialHandle._id}>
                <span className={`icon fab fa-${platform}`}/>
              </a>
            );
          })}
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
