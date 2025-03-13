
import { Link } from "react-router";
import { PathConstants } from "../../../app/constants/pathConstants";
import LanguageSelect from "../../../feature/language/ui/LanguageSelector";
import LogoutBtn from "../../../feature/logout/ui/LogoutBtn";

function Navbar() {
  return (
    <>
          <nav
              className="navbar navbar-expand-lg navbar-light"
              style={{ backgroundColor: "#007bff" }}
            >
              <div className="container-fluid">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{ pathname: PathConstants.HOME }}
                >
                  <span
                    variant="subtitle1"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    TopicHub.admin
                  </span>
                </Link>

                <div className="ml-auto">
                  <a className="nav-link text-white" href={PathConstants.CLIENT}>Вернуться в приложение</a>
                </div>
                <div>
                  <LanguageSelect/>
                </div>
                <div>
                  <LogoutBtn/>
                </div>
              </div>
            </nav>
    </>
  );
}

export default Navbar;
