/**
 * список главного (content)
 *
 */

const generalList = [
    {
      id: "general",
      text: "Актуальные новости",
      link: "https://www.google.com/",
      type: "general",
    },
    {
      id: "country",
      text: "Новости в Нарнии",
      link: "https://www.ya.ru/",
      type: "general",
    },
    {
      id: "recommendation",
      text: "Рекомендуем",
      link: "https://www.ya.ru/",
      type: "general",
    },
    {
      id: "date",
      text: new Date().toLocaleDateString("ru-RU"),
      type: "general",
    },
  ];
  
  export default generalList;