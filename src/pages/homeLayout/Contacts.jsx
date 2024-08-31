const Contacts = () => {
  return (
    <div className="contactDiv text-center">
      <div className="contact ">
        <h3 className="contact-us">Contact Us</h3>
        <p className="hesitate">Do not hesitate to contact us</p>
      </div>
      <div className="contact-text">
        <div className="c1">
          <div className="contact-us location">
            <img
              src="src/assets/location-marker.a783c07b6e3a68f4704f0dd4b643a347.svg"
              alt="location-marker"
            />
          </div>
          <p className="our-adress">Our Address</p>
          <p>
            27 Fulton Street Brooklyn,
            <span className="new-york"> New York</span>
          </p>
        </div>
        <div className="c2">
          <div className="contact-us phone ">
            <img
              src="src/assets/phone.05f3d8cd6ded0d58d9520bae674404bf.svg"
              alt="phone"
            />
          </div>
          <p className="phone-numer">Phone number</p>
          <p>
            Manager <span>+918065502317</span>
          </p>
        </div>
        <div className="c3">
          <div className="contact-us Clock-Checked">
            <img
              src="src/assets/Clock-Checked.3532737a712c0bb6a47bc7909db5c498.svg"
              alt="Clock-Checked"
            />
          </div>
          <p className="working-hour">Working hours</p>
          <p>
            Mon - Sat <span>8:00am - 9:00pm</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
