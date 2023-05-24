import React from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard";
import EventItem from "./components/EventItem";

class App extends React.Component {
  state = {
    scores: [],
    gameover: false,
    player: "",
    firstTeam: 0,
    secondTeam: 0
  };

  goalScored(team, event) {
  
      const eventData = {
        player: this.state.player,
        team: team,
        event: event,
      };
      const newScores = this.state.scores;
      newScores.push(eventData);
      this.setState({ scores: newScores, player: "" });
      console.log(this.state.scores)
    
    }

  getGoalNumber(team) {
    const teamScores = this.state.scores.filter((item, index) => {
      return item.team === team && item.event === "goal";
    });
  
    return teamScores.length
  }

  componentDidUpdate() {
    if (this.state.gameover === false) {
      if (this.state.firstTeam === 5 || this.state.secondTeam === 5) {
        this.setState({gameover: true})
      }
    }
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
              if (this.state.gameover === false) {
                this.goalScored("home", "goal");
                this.setState({firstTeam: this.state.firstTeam +1})
              }
            
              // else {
              //   this.setState({scores: []})
              // }
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
              if (this.state.gameover === false) {
                this.goalScored("guest", "goal");
                this.setState({secondTeam: this.state.secondTeam +1})

              }
              // else {
              //   this.setState({scores: []})
              // }
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