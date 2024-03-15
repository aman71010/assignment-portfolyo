import { useSelector } from "react-redux";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Index = () => {
  const about = useSelector(state => state.user.about);
  return (
    <Layout>
      <div className="section started" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, {`I’m`} <strong>{about.name}</strong>, {about.title}.
                <br/>
                Based in {about.address}.
              </h1>
              <TypingAnimation extraClassName={"h-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
