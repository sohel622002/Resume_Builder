import "./Languages.scss";

function SingleLanguage({ lang, prof}) {
  return (
    <div className="language-container">
      <h4 className="language">{lang}</h4>
      <h4 className="language-prof">{prof}</h4>
    </div>
  );
}

function Languages() {
  return (
    <div className="language-div">
      <h2 className="main_title">Languages</h2>
      <div className="all-languages">
      <SingleLanguage lang="English" prof="Professional Working Proficiency"/>
      <SingleLanguage lang="Spanish" prof="Professional Working Proficiency"/>
      <SingleLanguage lang="Jerman" prof="Professional Working Proficiency"/>
      </div>
    </div>
  );
}

export default Languages;
