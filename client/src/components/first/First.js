import "./first.css"

const First = () => {
    return (
        <div className="first" id="home">
            <p>SCHOOL COP <span className="firstBy">by SSAM's</span></p>
            <span className="not">by SSAM's</span>
            <span className="firstDec">The security of your child in school is guaranted</span>
            <h3>Who are you?</h3>

            <ul className="firstWho">
                <li className="firstWhoItem">Parent</li>
                <li className="firstWhoItem">Teacher</li>
                <li className="firstWhoItem">Student</li>
            </ul>
        </div>
    )
}

export default First
