/**
 * тип элементов списка
 */
export type ListProps = {
    id: number | string;
    text?: string;
    type: string;
    title?: string;
    link?: string;
    img?: {
      link: string;
      alt: string;
    };
  };