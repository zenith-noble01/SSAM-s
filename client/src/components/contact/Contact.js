import "./contact.css"

const Contact = () => {
    return (
        <section class="contact" id="contact">
            <h1 class="heading"> <span>contact</span> us </h1>
            <div class="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7827108429274!2d11.521723914271426!3d3.8567526971945663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf883b95f3a1%3A0x268b675a1266e05!2zTW9udMOpIFpvw6ksIFlhb3VuZMOp!5e0!3m2!1sen!2scm!4v1631236400814!5m2!1sen!2scm" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" title="zenith"></iframe>
                <form action="">
                    <h3>get in touch</h3>
                    <div class="inputBox">
                        <span class="fas fa-user"></span>
                        <input type="text" placeholder="name" />
                    </div>
                    <div class="inputBox">
                        <span class="fas fa-envelope"></span>
                        <input type="email" placeholder="email" />
                    </div>
                    <div class="inputBox">
                        <span class="fas fa-phone-alt"></span>
                        <input type="number" placeholder="number" />
                    </div>
                    <input type="submit" value="contact now" class="btn" />
                </form>
            </div>
        </section>
    )
}

export default Contact
