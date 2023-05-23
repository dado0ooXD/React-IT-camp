import React from 'react';


class EventItem extends React.Component{

    render() {

        let backGcolor = 'white';
        let textAl = "left"
        let eventName = 'Goal'

        if (this.props.item.team === 'guest') {
            textAl = 'right'
        }
        if (this.props.item.event === 'yellow card') {
            backGcolor = 'yellow'
            eventName = 'Yellow card'
        }
        else if (this.props.item.event === "red card") {
            backGcolor = 'red'
            eventName = 'Red card'
        }

        return (
            <div className='event' style={{textAlign: textAl, backgroundColor:backGcolor}}>
                <h5>{this.props.item.player}</h5>
                <p>{ eventName}</p>
          </div>
        )
    }
}

export default EventItem;