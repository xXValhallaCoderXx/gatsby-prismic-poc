import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { PrismicLink } from '@prismicio/react'

export const Header = ({ isHomepage }) => {
  const queryData = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          top_navigation {
            link {
              url
              link_type
            }
            link_label {
              text
            }
          }
        }
      }
    }
  `)

  const navigation = queryData.prismicNavigation
  const topNav = navigation.data.top_navigation

  const homepageClass = isHomepage ? 'homepage-header' : ''
    console.log("TOP NAV: ", topNav)
  return (
    <header className={`site-header ${homepageClass}`}>
      <a href="/">
        <div className="logo">Example Site</div>
      </a>
      <nav>
        <ul>
          {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                
                <PrismicLink field={navItem.link}>
                  {navItem.link_label.text}
                </PrismicLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}