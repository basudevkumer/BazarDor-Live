import { GoSearch } from "react-icons/go";
import { LiaSignInAltSolid } from "react-icons/lia";
import { FiLogIn } from "react-icons/fi";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

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
};

export default allIcons;
