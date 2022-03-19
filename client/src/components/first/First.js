import { Link } from "react-router-dom";
import "./first.css";
const First = ({ over, setOver }) => {
  return (
    <div className="first" id="home">
      <p>
        SCHOOL COP <span className="firstBy">by SSAM's</span>
      </p>
      <span className="not">by SSAM's</span>
      <span className="firstDec">
        The security of your child in school is guaranted
      </span>
      <h3>Who are you?</h3>

      <ul className="firstWho">
        <li className="firstWhoItem">
          <Link className="link" to="/authParent">
            Parent
          </Link>
        </li>
        <li className="firstWhoItem">
          <Link className="link" to="/AuthTeacher">
            Teacher
          </Link>
        </li>
        <li className="firstWhoItem">
          <Link className="link" to="/AuthStudent">
            Student
          </Link>
        </li>
      </ul>

      <div className={over ? "overFlow showyourself" : "overFlow"}>
        <div className="selectContainer">
          <button className="closeOver" onClick={() => setOver(false)}>
            +
          </button>
          <button>
            <Link className="link" to="/authParent">
              Parent
            </Link>
          </button>
          <button>
            <Link className="link" to="/AuthTeacher">
              Teacher
            </Link>
          </button>
          <button>
            <Link className="link" to="/AuthStudent">
              Student
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default First;
