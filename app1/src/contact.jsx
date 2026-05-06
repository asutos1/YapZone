import "./contact.css";
function Contact() {
    return (
        <div className="contact-section">
            <div className="leftside">
                <h3>Contact</h3>
                <h2>Got Something<br />to Say?</h2>
                <p>If you have any questions or feedback, feel free to reach out to us!</p>
                <div className="cards">
                    <div className="email card">
                        <h4>Email Us:</h4>
                        <p>yapzone@gmail.com</p>
                    </div>
                    <div className="Instagram card">
                        <h4>Follow Us on Instagram:</h4>
                        <p>@yapzone</p>
                    </div>
                </div>

            </div>

            <div className="rightside">
                <div class="contact-form reveal">
                    <div class="form-row">
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" placeholder="Alex" />
                        </div>
                        
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="Sharma" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="you@example.com" />
                    </div>

                    <div class="form-group">
                        <label>Message</label>
                        <textarea placeholder="What's on your mind? (Don't hold back — this is YapZone after all.)"></textarea>
                    </div>
                    
                    <button class="btn-submit">
                        Send It
                    </button>
                </div>
            </div>

        </div>);
}

export default Contact;