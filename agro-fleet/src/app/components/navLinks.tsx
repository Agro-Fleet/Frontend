import house from "../../../public/icon-house.svg";
import car from "../../../public/icon-car.svg";
import user from "../../../public/icon-user.svg";

export const navLinks = [
    {
      name: 'Home',
      href: '/pages/list',
      icon: house,
    },
    {
      name: 'Usuários',
      href: '/pages/dashUser',
      icon: user,
    },
    {
      name: 'Veículos',
      href: '/pages/dashVehicle',
      icon: car,
    },
  ]