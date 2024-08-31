const Service = () => {
  return (
    <div>
      <h4 className="Our-service pt-5 pb-4">Our Services</h4>
      <div className="">
        <div className="service d-flex">
          <div className="nurse border border-primary">
            <img
              src="src/assets/nurse.ef887c862ef2f2ca41e39492231bb8b4.svg"
              alt="nurse"
              width={"55px"}
              className="img-nurse"
            />
            <h4>Prima Care Physicia</h4>
            <p>Lmedic Center provides the following health care services</p>
            <p>Complete Family Health Care</p>
            <p>EKG</p>
            <p>X-Ray</p>
            <p>Ultrasound</p>
            <p>Acute and Chronic Care</p>
            <p>Well Womans Exam</p>
          </div>
          <div className="nurse border border-primary nurse-vegan">
            <img
              src="src/assets/vegan-food.de607b182156a46cc38d66ae0d87b888 (1).svg"
              alt="vegan-food"
              width={"55px"}
              className="img-vegan-food pb-2"
            />
            <h4>Holistic Wellness</h4>
            <p>Lmedic Center provides the following health care services</p>
            <p>Weight Loss</p>
            <p>Therapeutic medical massage</p>
            <p>Holistic skin care</p>
            <p>K-laser pain management</p>
            <p>Detoxification</p>
            <p>Hormone replacement therapy</p>
          </div>
          <div className="nurse border border-primary nurse-coro">
            <img
              src="src/assets/Coronavirus.e4025f544f950f722d24c0c8cebc7f26 (1).svg"
              alt="coronavirus"
              width={"55px"}
              className="py-2 image-nurse"
            />
            <h4>Allergy and Immunology</h4>
            <p>Lmedic Center provides the following health care services</p>
            <p>Allergy and immunology</p>
            <p>Testing for Immunology</p>
            <p>Allergy treatments</p>
            <p>Asthma care</p>
            <p>Dematology</p>
            <p>Pediatric allergy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
