//images
import Bids from "./asset/icon_bottom_01.png";
import History from "./asset/icon_bottom_02.png";
import Charge from "./asset/icon_bottom_03.png";
import User from "./asset/icon_bottom_04.png";

export const users = [
  {
    id: 1,
    email: "example1@gmail.com",
    password: "password1",
  },
  {
    id: 2,
    email: "example2@gmail.com",
    password: "password2",
  },
];

export const listIconBottomSheet = [
  {
    icon: Bids,
    link: "/bids",
  },
  {
    icon: History,
    link: "/history",
  },
  {
    icon: Charge,
    link: "/charge",
  },
  {
    icon: User,
    link: "/user",
  },
];
