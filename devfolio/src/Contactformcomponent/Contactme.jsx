import React from "react";
import "./_Contact.scss"
const Contact=()=>{
    return(
        
            <div className="Contact-container">
            <div className="title-header">
                <h2>Contact me</h2>
            </div>
            <div className="Form">
            <form >
                <input type="text" name="name" placeholder="Your name" required/>
                <input type="email" name="email" placeholder="Your email" required/>
                <textarea name="message" placeholder="Your message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}
export default Contact
