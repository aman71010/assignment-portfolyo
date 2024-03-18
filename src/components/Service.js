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
            const charge = service.charge.substring(1);
            return (
              <div className="service-col" key={service._id}>
                <div className="service-item content-box">
                  <div className="icon">
                    <img 
                      src={service.image.url} 
                      alt="testimonial-item-image" 
                      style={{
                        width: '70px', 
                        height: '70px', 
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                    />
                  </div>
                  <div className="name">{service.name}</div>
                  <div className="text">
                    {service.desc}
                  </div>
                  <div className="pricing-item">
                    <div className="amount">
                      <span className="number">
                        <span className="dollar">$</span>
                        <span>{charge}</span>
                      </span>
                    </div>
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
