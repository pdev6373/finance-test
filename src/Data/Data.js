// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Transactions",
  },
  {
    icon: UilUsersAlt,
    heading: "Income",
  },
  {
    icon: UilPackage,
    heading: "Expenses",
  },
  {
    icon: UilChart,
    heading: "Savings",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Income",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "664,605",
    png: UilUsdSquare,
    series: [
      {
        name: "Income",
        data: [
          31000, 17500, 11340, 2500, 7500, 9125, 32000, 37000, 29000, 6000,
          14000, 33000, 23000, 63000, 38000, 45000, 17000, 22010, 12000, 13230,
          34000, 21000, 23000, 89045, 2400, 11230, 13420, 18430,
        ],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "588,955",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [
          31000, 17500, 11340, 250, 7500, 9125, 32000, 37000, 2900, 6000, 14000,
          33000, 23000, 6300, 38000, 45000, 17000, 22010, 12000, 13230, 34000,
          21000, 23000, 89045, 2400, 11230, 13420, 18430,
        ],
      },
    ],
  },
  {
    title: "Savings",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "198,990",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [
          3100, 17500, 110, 250, 750, 9125, 3200, 300, 200, 6000, 1400, 3300,
          2300, 6300, 38000, 45000, 1700, 2200, 12000, 130, 34000, 2100, 2300,
          8945, 2400, 1130, 1340, 1430,
        ],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
