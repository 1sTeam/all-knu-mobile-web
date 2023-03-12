import { IconButton } from "ui";
import {
  FaSchool,
  FaNewspaper,
  FaDesktop,
  FaBus,
  FaBook,
} from "react-icons/fa";

const shortcutMetaData = [
  {
    id: 1,
    title: "학교 홈페이지",
    icon: <FaSchool />,
    link: "https://web.kangnam.ac.kr/",
  },
  {
    id: 2,
    title: "비교과 홈페이지",
    icon: <FaNewspaper />,
    link: "https://verius.kangnam.ac.kr/main.do",
  },
  {
    id: 3,
    title: "열람실 현황",
    icon: <FaDesktop />,
    link: "http://223.194.112.88/SEAT/domian5.asp",
  },
  {
    id: 4,
    title: "셔틀 버스",
    icon: <FaBus />,
    link: "https://web.kangnam.ac.kr/menu/4990be9bdd4defbf92dde49a31ad1a3b.do",
  },
  {
    id: 5,
    title: "중앙 도서관",
    icon: <FaBook />,
    link: "https://lib.kangnam.ac.kr/",
  },
];

const Shortcuts = () => {
  return (
    <div style={{ display: "flex" }}>
      {shortcutMetaData.map(({ id, title, icon, link }) => (
        <IconButton
          key={`shortcut_icon_${id}`}
          title={title}
          icon={icon}
          onClick={() => console.log(link)}
        />
      ))}
    </div>
  );
};

export default Shortcuts;
