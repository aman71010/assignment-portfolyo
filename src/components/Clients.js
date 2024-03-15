import { useSelector } from "react-redux";

const Clients = () => {
  const projects = useSelector(state => state.user.projects);
  return (
    <div className="section clients" id="section-clients">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Clients</div>
        </div>
        {/* clients items */}
        <div className="content-box">
          <div className="clients-items">
            {projects.map(item => {
              return (
                <div className="clients-col" key={item._id}>
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href={item.liveurl}>
                      <img src={item.image.url} alt="project-image" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Clients;
