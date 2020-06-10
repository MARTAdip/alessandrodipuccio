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
        flexFlow: `column`,
        alignItems: `flex-end`,
        paddingTop: `80px`
      }}
    >
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `black` : `blue`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
                padding: `0`, 
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
