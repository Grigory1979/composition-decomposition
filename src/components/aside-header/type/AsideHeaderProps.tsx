/**
 * Тип для компонента AsideHeader
 */
export type AsideHeaderProps = {
    id: string | number;
    title: string;
    text: string;
    link: string;
    type: string;
    img: {
      link: string;
      alt: string;
    };
  };