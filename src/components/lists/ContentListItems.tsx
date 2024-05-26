// ActualList.jsx
import { FC } from "react";
import { ListProps } from "./types/ListProps";

/**
 * Отрисовка элементов списка.
 * @param {ActualListPropsArrayItem} item - Элемент данных контента для списка.
 * @returns {JSX.Element} HTML-код элемента списка.
 */
const ContentListItems: FC<ListProps> = ({
  id,
  text,
  link,
  type,
  img,
  title,
}) => (
  <>
    {link ? (
      <li className={`actual__item__${type}`} key={id}>
        {img ? (
          <img
            src={img.link}
            alt={img.alt}
            className={`actual__img__${type}`}
          />
        ) : null}
        <a href={link} className={`actual__link__${type}`}>
          {title ? <h4 className={`actual__title__${type}`}>{title}</h4> : null}
          {text ? (
            <p>
              <span>{text}</span>
            </p>
          ) : null}
        </a>
      </li>
    ) : (
      <li className={`actual__item__${type}`}>{text}</li>
    )}
  </>
);

export default ContentListItems;