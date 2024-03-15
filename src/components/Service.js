import { useSelector } from "react-redux";

const Service = () => {
  const services = useSelector(state => state.user.services);
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Services</div>
        </div>
        {/* service items */}
        <div className="service-items">
          {services.map(service => {
            return (
              <div className="service-col" key={service._id}>
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-code" />
                  </div>
                  <div className="name">{service.name}</div>
                  <div className="text">
                    {service.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
