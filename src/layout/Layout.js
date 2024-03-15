import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import ContentModal from "../components/popup/ContentModal";
import ImageGallery from "../components/popup/ImageGallery";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { cursor, stickyNav } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";
import { fetchUserData } from "../Store/user-slice";
const Layout = ({ children, noHeader }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    cursor();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <ImageGallery />
      <ContentModal />
      <Preloader />
      {/* Container */}
      <div className="container">
        {/* Cursor */}
        <div className="cursor-follower" />
        {/* Header */}
        {!noHeader && <Header />}

        {/* Wrapper */}
        <div className="wrapper">
          {/* Section Started */}
          {children}
        </div>
        {/* Footer */}
        <Footer />
        {/* Lines */}
        <div className="lines">
          <div className="content">
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
