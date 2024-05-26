// Actual.jsx
import { FC } from "react";
import ContentListItems from "./ContentListItems";
import { ListPropsArray } from "./types/ListPropsArray";
import "./css/actual.css";

/**
 * Отображение списка главного.
 * @returns {JSX.Element} HTML-код.
 */
const ContentList: FC<ListPropsArray> = ({ list }) => (
  <ul className={`actual__${list[0].type}`}>
    {list.map(({ id, text, link, type, img, title }) => (
      <ContentListItems
        key={`start__list__${id}`}
        text={text}
        link={link}
        id={id}
        type={type}
        img={img}
        title={title}
      />
    ))}
  </ul>
);

export default ContentList;