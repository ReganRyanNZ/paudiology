class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "Hello my friend",
      firstL: "Left things",
      firstR: "Right things",
      asymmetry: "Has asymmetry",
      second: "Pure-tone audiometry testing revealed that:",
      secondL: "Left things",
      secondR: "Right things"
    }

    // this.setSong = this.setSong.bind(this);
  }


  render() {
    return(
      <div className="main-container">
        <h1>Paudiology™</h1>
        <div className="edit-container">

        </div>
        <div id="#display-container" className="display-container" onClick={document.getElementById("display-container").select}>
          <ul>
            <li>{this.state.first}</li>
            <ul>
              <li>{this.state.firstL}</li>
              <li>{this.state.firstR}</li>
              <li>{this.state.asymmetry}</li>
            </ul>
            <li>{this.state.second}</li>
            <ul>
              <li>{this.state.secondL}</li>
              <li>{this.state.secondR}</li>
            </ul>
          </ul>
        </div>
      </div>
    )
  }
}