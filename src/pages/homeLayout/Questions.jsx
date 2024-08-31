const Questions = () => {
  return (
    <div>
      <div className="questions">
        <h4 className="frequently text-center py-5">
          Frequently asked Questions
        </h4>
        <div className="questions-sections d-flex">
          <div className="set-btn">
            <button className="dropdown-btn">
              <span>How do i make an appointment?</span>
            </button>
            <p>
              If you would like to make an appointment with any one of our
              practitioners,
              <br /> please contact our reception staff. Alternatively you can
              book an appointment online. Every effort will be made to
              accomodate your preffered time and choice of practitioner
            </p>
            <div>
              <div>
                <button className="dropdown-btn">
                  <span>How do i get a copy of my record?</span>
                </button>
              </div>
              <div>
                <button className="dropdown-btn">
                  <span> Is there a charge for extra copies?</span>
                </button>
              </div>
              <div className="">
                <button className="practiotioner-btn">
                  <span>How do i know the right practitioner?</span>
                </button>
              </div>
            </div>
            <div>
              <button className="ask-ques">Ask Questions</button>
            </div>
          </div>
          <div className="nurse-woman">
            <img
              src="src/assets/nurse-woman.94e1586fcd5855c5be4ee354ad8ac6f6.svg"
              alt="nurse-woman"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
