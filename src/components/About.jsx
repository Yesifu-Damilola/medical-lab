const About = () => {
  return (
    <div className="container-fluid hero-div">
      <div className="emergency col-lg-4 col-md-4 col-sm-12 col-12">
        <img
          src="src/assets/doctors-bag.2f3f8fc042a32751f15e46e165801c02.svg"
          alt="emergency"
        />
        <h4 className="emergency text-primary py-2">24 Hour Emergency</h4>
        <p>Open round the clock for convenience, quick and easy access</p>
      </div>
      <div className="clinic-medical col-lg-4 col-md-4 col-sm-12 col-12">
        <img
          src="src/assets/lab-items.2d826c5e4a0c478c45d8c7958639c093.svg"
          alt="lab"
        />
        <h4 className="lab text-primary py-2">Complete lab sevice</h4>
        <p>Cost-efficient, comprehensive and clinical laboatory services</p>
      </div>
      <div className="medical-doctor col-lg-4 col-md-4 col-sm-12 col-12">
        <img
          src="src/assets/Medical-Doctor.8e0c13449c216784b3a306bb41b6807b.svg"
          alt="medical-doctor"
        />
        <h4 className="professionals text-primary py-2">
          Medical Professionals
        </h4>
        <p>Qualifed and certified physicians for quality medical care</p>
      </div>
    </div>
  );
};
export default About;
