const { Suspense } = require("react");
const { NavLink, Outlet } = require("react-router-dom");

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/teachers">Teachers</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/register">Log in</NavLink>
        </li>
        <li>
          <NavLink to="/register">Sing up</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
