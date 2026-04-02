import { GoSearch } from "react-icons/go";
import { LiaSignInAltSolid } from "react-icons/lia";
import { FiLogIn } from "react-icons/fi";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaGreaterThan,
} from "react-icons/fa6";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const allIcons = {
  search: <GoSearch />,
  authIcon: [
    { id: 1, icon: <LiaSignInAltSolid /> },
    { id: 2, icon: <FiLogIn /> },
  ],
  arrowIcon: [
    { id: 1, icon: <FaArrowLeftLong /> },
    { id: 2, icon: <FaArrowRightLong /> },
  ],
  arrowIconPriceIndicator: [
    { id: 1, icon: <HiMiniArrowTrendingUp /> },
    { id: 2, icon: <HiMiniArrowTrendingDown /> },
  ],

  greaterThan: <FaGreaterThan />,
  homeIcon: <IoHomeOutline />,
  bar: <FaBarsStaggered />,
  cross: <GiCrossMark />,
  arrowRight: <HiMiniArrowLongRight />,
};

export default allIcons;
