const Pages = () => {
  return (
    <div className="department">
      <div className="container-fluid">
        <div className="our-departments text-center py-5">
          <h4>Our Departments</h4>
          <p>
            Lmedic medical care specialises in various services for the
            convenience of the patients
          </p>
        </div>
        <div className="apparatus d-flex pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <div className="equipments">
              <div className="brain text-center">
                <img
                  src="src/assets/brain.7d892c7612bfb4c18b08ffb72c843ebc.svg"
                  alt="brain"
                />
                <p className="py-3">Psychiatry</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <div className="psychiatry">
              <div className="brain text-center">
                <img
                  src="src/assets/test-tube.4ac953b0f723f13605842a1e67e8b8fa.svg"
                  alt=">Laboratory"
                />
                <p className="para2 py-3">Laboratory</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <div className="psychiatry">
              <div className="brain text-center">
                <img
                  src="src/assets/tooth.f2549abd8a81139e33a27d3d5af00146.svg"
                  alt="dentistry"
                />
                <p className="para2 py-3">Dentistry</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <div className="psychiatry">
              <div className="brain text-center">
                <img
                  src="src/assets/heart-with-pulse.74870cf05d24ad130133eef65259d3b6.svg"
                  alt="heart"
                />
                <p className="para2 py-3">Cardiology</p>
              </div>
            </div>
          </div>
        </div>
        <div className="apparatus2 d-flex pb-4">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <div className="psychiatry">
              <div className="brain text-center">
                <img
                  src="src/assets/vagina.23df769cea06ae10217ae890c70da3dc.svg"
                  alt="gynecology"
                />
                <p className="para2 py-3">Gynecology</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <div className="psychiatry">
              <div className="brain text-center">
                <img
                  src="src/assets/caduceus.cb555f856b989e05c595a5a104853a25.svg"
                  alt="medicine"
                />
                <p className="para2 py-3">Medicine</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <div className="psychiatry">
              <div className="brain text-center">
                <img
                  src="src/assets/Car-Accident.bcc4794dcdd7ccbfa14573cce4f19329.svg"
                  alt="emergency"
                />
                <p className="para2 py-3">Emergency</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-5">
            <div className="psychiatry">
              <div className="brain text-center">
                <img
                  src="src/assets/Child-With-Pacifier.cd75b73e21aa09a3036a60102910b98b.svg"
                  alt="pediatrics"
                />
                <p className="para2 py-3">Pediatrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
