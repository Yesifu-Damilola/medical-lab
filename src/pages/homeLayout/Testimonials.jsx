const Testimonials = () => {
  return (
    <div>
      <div className="testimonial-bg">
        <div className="testimonials">
          <div className="testimonials-text">
            <h2>Testimonials</h2>
            <div className="">
              <div className="testimonial-guy">
                <img
                  src="src/assets/testimonial-guy.9985f17ac2647e0503cb1efbcb95d866.svg"
                  alt="testimonial-guy"
                  width={"9%"}
                />
              </div>
              <div className="testimonial-para">
                <p>
                  “Joby made searching for a job easier and reduced the time
                  framewhile eliminating the office to office conventional mode
                  of application”
                </p>
              </div>
              <div className="testimonial-icons">
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <p>-Orlando Philip</p>
                  <p className="ui-designer">(UI Designer)</p>
                </span>
              </div>
              <div className="fa-circle-chevron ">
                <i className="fa-solid fa-circle-chevron-left"></i>
                <i className="fa-solid fa-circle-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
