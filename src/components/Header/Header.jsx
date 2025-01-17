import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.status);
  const navItems = [
    { name: "Home", slug: "/", active: true },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-400">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(({ name, slug, active }, index) =>
              active ? (
                <li
                  key={index}
                  className="className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'"
                >
                  <button
                    onClick={() => {
                      navigate(slug);
                    }}
                  >
                    {name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
          {authStatus && <LogoutBtn />}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
