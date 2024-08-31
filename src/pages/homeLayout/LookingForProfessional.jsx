const LookingForProfessional = () => {
  return (
    <div>
      <div>
        <div className="LookingForProf">
          <div className="prof-austin">
            <img
              src="src/assets/austin.6b52f5f791cab24feb965f59c955b8cb.svg"
              alt="austin"
            />
          </div>
          <div className="looking-for-dev">
            <h3>Looking For a Professional</h3>
            <div className="looking-for-input">
              <input placeholder="John Doe" className="looking-input" />
              <input
                placeholder="johndoe@gmail.com"
                className="looking-input email-input"
              />
              <input
                placeholder="Text message here"
                className="looking-input message-input"
              />
              <button className="btn-appointment">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForProfessional;
