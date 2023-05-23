import React from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard";
import EventItem from "./components/EventItem";

class App extends React.Component {
  state = {
    scores: [],
    gameover: false,
    player: "",
  };

  goalScored(team, event) {
    const eventData = {
      player: this.state.player,
      team: team,
      event: event,
    };
    const newScores = this.state.scores;
    newScores.push(eventData);
    console.log(newScores)
    this.setState({ scores: newScores, player: "" });
  }

  getGoalNumber(team) {
    const teamScores = this.state.scores.filter((item, index) => {
      return item.team === team && item.event === "goal";
    });
    
    return teamScores.length;
  }

  render() {
    const homeScores = this.getGoalNumber("home");
    const guestScores = this.getGoalNumber("guest");
    return (
      <div className="app">
        <div className="scores-container">
          <ScoreCard
            name="Home"
            score={homeScores}
            goal={() => {
              this.goalScored("home", "goal");
            }}
            yellowCard={() => {
              this.goalScored("home", "yellow card")
            }}
              redCard={() => {
              this.goalScored("home", "red card")
            }}
          />
          <ScoreCard
            name="Guest"
            score={guestScores}
            goal={() => {
              this.goalScored("guest", "goal");
            }}
            yellowCard={() => {
              this.goalScored("guest", "yellow card")
            }}
            redCard={() => {
              this.goalScored("guest", "red card")
            }}
          />
        </div>
        <input
          value={this.state.player}
          onChange={(event) => {
            const value = event.target.value;
            this.setState({ player: value });
          }}
          placeholder="Unesite ime fudbalera"
          
        />
        <div className="stats">
          {this.state.scores.map((item, index) => {
            return <EventItem key={ index} item={item } />
            // if (item.event === 'yellow card' && item.team === "home") {
            //   return <div className="event" style={{backgroundColor:'yellow', textAlign:"left"}}>
            //     {item.player}
            //   </div>
            // }
          }) }
        </div>
      </div>
    );
  }
}

export default App;