import React, { Component } from 'react'
import PieChart from "react-svg-piechart"
import Menu from './Menu'

function Score() {
    const value = Math.random()
    const good = value >= 0.5
    const good_texts = [
        "Things work out best for those who make the best of how things work out",
        "To live a creative life, you must lose bad habitswrong",
        "Good health doesn't just happen, you enable it",
        "Success is liking yourself, and to like yourself, you gotta take care of you.",
        "everything cometh to him who taketh his drugs on time",
        "Fortune sides with him who dares and takes his drugs on time",
        "Take your medication or do not. There is no try",
        "Go ahead, make your day. Get your drugs on time.",
        "Eighty percent of health is doing what your doctor told you to do.",
        "For the force to be with you, you have to adhere to your drugs",
    ]
    const bad_texts = [
        "Your health never forgets that you forgot it",
        "If you are not willing to risk your health you will have to settle living with fear",
        "If you do what you always did, you will get what you always got",
        "Don’t get angry, improve your adherence.",
        "Not getting your drugs on time is scarier than bungee jumping",
        "Frankly, my dear, I don't give a damn.., but take your medication on time",
    ]
    const texts = good ? good_texts : bad_texts;

    const data = [
        {title: "Good boy", value: value, color: "#22594e"},
        {title: "Baad boy", value: 1 - value, color: "#c94e50"},
    ]
    return (<div style={{width: '6cm', margin: 'auto'}}>
            <PieChart data={data} expandOnHover strokeColor="black"/>
              <p>{texts[Math.floor(Math.random()*texts.length)]}</p>
            </div>)
}


class Home extends Component {
    render () {
        return (<div>
                  <Score/>
                  <Menu menuItems={[
                      {name: 'Filler', action:'/filler/'},
                      {name: 'Information', action:'/information/'},
                      {name: 'Adherence', action:'/adherence/'},
                      {name: 'Emergency', action:'/emergency/'}]}/>
                </div>
        )
    }
}

export default Home
