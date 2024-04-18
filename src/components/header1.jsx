import Logo from "../components/aoigemfotsy.png";
import "../index.css";

import routes from "~react-pages";

export default function Menu({ userData }) {
  // Réorganiser les routes pour que "/" soit la première route
  const sortedRoutes = [
    ...routes.filter((route) => route.path === "/"),
    ...routes.filter((route) => route.path !== "/" && route.path !== "login"),
    ...routes.filter((route) => route.path == "login")
  ];
  const userName = "";
  // Utiliser la méthode map pour parcourir les routes réorganisées et générer les éléments de menu
  const menuItems = sortedRoutes.map((route, index) => {
    if (route.path === "/") {
      return (
        <li key={index} className='mx-3'>
          <a
            href={route.path}
            className='text-purple-800 hover:text-purple-600'
          >
            Accueil
          </a>
        </li>
      );
    } else {
      const affichage = route.path[0].toUpperCase() + route.path.slice(1);
      return (
        <li
          key={index}
          className={`mx-3 ${affichage === "Login" ? " ml-auto" : ""}`}
        >
          <a
            href={route.path}
            className='text-purple-800 hover:text-purple-600'
          >
            {affichage === "Login" ? affichage : affichage}
          </a>
        </li>
      );
    }
  });
  return (
    <>
      <div className='flex justify-center'>
        <img className='logo' src={Logo} alt='logo' />
      </div>
      <div>
        <p className='font-bold text-xl text-red-900 flex justify-center'>
          Vente de pierres et de bijoux de Madagascar
        </p>
        <p>{userData}</p>
      </div>

      <div className='bg-purple-200 my-5 py-3 flex '>
        <ul className='flex'>{menuItems}</ul>
      </div>
    </>
  );
}
