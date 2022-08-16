const element = (
  <div className="bgContainer">
    <h1 className="mainHeading">Congratulation</h1>
    <div className="cardContainer">
      <div className="allDirection">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        />
        <h2 className="profileName">Kiran V</h2>
        <p className="profileParagraph">
          Vishnu Institute of Computer Eduction Technology,Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
