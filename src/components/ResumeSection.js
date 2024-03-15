import { useSelector } from "react-redux";

const ResumeSection = () => {
  const timelines = useSelector(state => state.user.timelines);
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              {/* {timelines.map(item => {
                const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                const startMonth = month_names_short[new Date(item.startDate).getMonth()];
                const endMonth = month_names_short[new Date(item.endDate).getMonth()];
                const startYear = new Date(item.startDate).getFullYear();
                const endYear = new Date(item.endDate).getFullYear();
                return (
                  <div className="resume-item content-box" key={item._id}>
                    <div className="date">{`${startMonth},${startYear} - ${endMonth},${endYear}`}</div>
                    <div className="name">{`${item.jobTitle} - ${item.company_name}`}</div>
                    <div className="text">
                      {item.summary}
                    </div>
                  </div>
                );
              })} */}
              <div className="resume-item content-box active">
                <div className="date">2013 - Present</div>
                <div className="name">Art Director - Facebook Inc.</div>
                <div className="text">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2011 - 2012</div>
                <div className="name">Front-End Developer - Google Inc.</div>
                <div className="text">
                  Monitored technical aspects of the front-end delivery for
                  projects.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2009 - 2010</div>
                <div className="name">Senior Developer - ABC Inc.</div>
                <div className="text">
                  Optimize your website and apps performance using latest
                  technology.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">2006 - 2008</div>
                <div className="name">Art University - New York</div>
                <div className="text">
                  Bachelors Degree in Computer Science ABC Technical Institute,
                  Jefferson, Missouri.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2005 - 2006</div>
                <div className="name">Programming Course - Paris</div>
                <div className="text">
                  Coursework - Git, WordPress, Javascript, iOS, Android, CSS,
                  and JavaScript.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2004 - 2005</div>
                <div className="name">Web Design Course - London</div>
                <div className="text">
                  Converted Photoshop layouts to web pages using HTML, CSS, and
                  JavaScript.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
