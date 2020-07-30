import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  it: "Ita",
  en: "Eng",
}

const Language = () => {
  return (
    <div
      style={{
        display: `flex`,
        flexFlow: `row`,
        justifyContent: `flex-start`,
        paddingTop: `100px`,
        marginLeft: `15px`
        
      }}
    >
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#457b9d` : `black`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
                padding: `5px`, 
                background: `rgba(255, 255, 255, 0.6)`,
                borderRadius: `5px`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
