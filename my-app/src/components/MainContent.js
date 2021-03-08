import React, { useState } from 'react';


function MainContent() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize:"50px" 
    }

    if (hours < 12) {
        timeOfDay = "Morning"
        styles.color = "blue"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
        styles.color = "red"
    } else {
        timeOfDay = "Night"
        styles.color = "pink"
    }

    return (
        <div className="main">
            <h4>This is main</h4>
            <h1 style={styles}>Good {timeOfDay}</h1>
        </div>
    )
}

export default MainContent