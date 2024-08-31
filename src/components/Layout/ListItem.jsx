import { routes } from "../../constant/navbar";

export const ListItem = () => {
  return (
    <ul className="nav-list">
      {routes.map((route) => (
        <li className="nav-item" key={route.name}>
          <a className="text-primary " aria-current="page" href={route.link}>
            {route.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
