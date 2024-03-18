import { useSelector } from "react-redux";

const ResumeSection = () => {
  const timelines = useSelector(state => state.user.timelines);
  const experiences = timelines.filter((item) => !item.forEducation);
  const education = timelines.filter((item) => item.forEducation);

  const sortByDate = (list) => {
    list.sort((a,b) => {
      const firstStartDate = new Date(a.startDate).getTime();
      const secondStartDate = new Date(b.startDate).getTime();
      return secondStartDate - firstStartDate;
    });
  }
  sortByDate(experiences);
  sortByDate(education);

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
              {experiences.map(item => {
                const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const startMonth = month_names_short[new Date(item.startDate).getMonth()];
                const endMonth = month_names_short[new Date(item.endDate).getMonth()];
                const startYear = new Date(item.startDate).getFullYear();
                const endYear = new Date(item.endDate).getFullYear();
                return (
                  <div className="resume-item content-box" key={item._id}>
                    <div className="date">{`${startMonth}, ${startYear} - ${endMonth}, ${endYear}`}</div>
                    <div className="name">{`${item.jobTitle} - ${item.company_name}`}</div>
                    <div className="text">
                      {item.summary}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              {education.map(item => {
                const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const startMonth = month_names_short[new Date(item.startDate).getMonth()];
                const endMonth = month_names_short[new Date(item.endDate).getMonth()];
                const startYear = new Date(item.startDate).getFullYear();
                const endYear = new Date(item.endDate).getFullYear();
                return (
                  <div className="resume-item content-box" key={item._id}>
                    <div className="date">{`${startMonth}, ${startYear} - ${endMonth}, ${endYear}`}</div>
                    <div className="name">{`${item.jobTitle} - ${item.company_name}`}</div>
                    <div className="text">
                      {item.summary}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
