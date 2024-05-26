// App.jsx
/**
 * Renders the main App component.
 *
 * @return {JSX.Element} The main App component
 */

import AsideHeader from "./components/aside-header/AsideHeader";
import ContentList from "./components/lists/ContentList";
import generalList from "./components/lists/contents/general/generalList";
import currency from "./components/lists/contents/currency/currency";
import newsContentList from "./components/lists/contents/newsContents/newsContentList";
import section from "./components/lists/contents/newsContents/section/section";
import asideHeadContent from "./components/aside-header/content/asideHeadContent";
import FormSearch from "./components/form-search/FormSearch";
import newsMain from "./components/lists/contents/news-main/newsMain";
import newsMain2 from "./components/lists/contents/news-main/newsMain2";

function App(): JSX.Element {
  return (
    <>
      <div className="container__page">
        <div className="container">
          <div className="container__list__header">
            <ContentList key="general" list={generalList} />
            <ContentList key="news" list={newsContentList} />
            <ContentList key="currency" list={currency} />
          </div>
          <AsideHeader key="asideHeadContent" {...asideHeadContent} />
        </div>
        <ContentList key="section" list={section} />
        <FormSearch />
        <ContentList key="mainNews" list={newsMain} />
        <ContentList key="mainNews2" list={newsMain2} />
      </div>
    </>
  );
}

export default App;