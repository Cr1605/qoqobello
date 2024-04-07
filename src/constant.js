//images
import Bids from "./asset/icon_bottom_01.png";
import History from "./asset/icon_bottom_02.png";
import Charge from "./asset/icon_bottom_03.png";
import User from "./asset/icon_bottom_04.png";
import Item01 from "./asset/item01.png";
import Item02 from "./asset/item02.png";
import Item03 from "./asset/item03.png";
import Item04 from "./asset/item04.png";


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

export const listItemToday = [
  {
    id: 1,
    image: Item01,
    price: "600",
    block: "50",
  },
  {
    id: 1,
    image: Item02,
    price: "130",
    block: "100",
  },
  {
    id: 1,
    image: Item03,
    price: "250",
    block: "200",
  },
  {
    id: 1,
    image: Item04,
    price: "490",
    block: "500",
  },
];
