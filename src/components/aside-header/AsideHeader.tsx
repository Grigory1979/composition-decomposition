// AsideHeader.jsx
import { FC } from "react";
import { AsideHeaderProps } from "./type/AsideHeaderProps";
/**
 * Renders an aside header component.
 *
 * @param {AsideHeaderProps} id - The unique identifier
 * @param {AsideHeaderProps} title - The title of the header
 * @param {AsideHeaderProps} text - The text content
 * @param {AsideHeaderProps} link - The link URL
 * @param {AsideHeaderProps} type - The type of the header
 * @param {AsideHeaderProps} img - The image details
 * @return {JSX.Element} The rendered aside header component
 */
const AsideHeader: FC<AsideHeaderProps> = ({
  id,
  title,
  text,
  link,
  type,
  img,
}) => (
  <div className={`aside__header__${type}`} key={id}>
    <a href={link} className={`aside__link__${type}`}>
      <img src={img.link} alt={img.alt} className={`aside__img__${type}`} />
    </a>
    <h3 className={`aside__title__${type}`}>{title}</h3>
    <p className={`aside__text__${type}`}>{text}</p>
  </div>
);

export default AsideHeader;