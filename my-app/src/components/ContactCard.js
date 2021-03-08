import React , { useState } from "react"

function ContactCard(props) {

    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        setRed(!isRed);
    }
    return (
        <div className="contact-card" >
            <img src={props.contact.imgUrl} />
            <h3>{props.contact.image}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email:{props.contact.email}</p>
            <h3>Number of likes {count}</h3>
            <button className="button" onClick={increment}>Like</button>

        </div>

    )
}

export default ContactCard