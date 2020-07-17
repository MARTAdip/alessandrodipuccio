import React from "react"
import "../components/musicList.scss"
import Link from "gatsby-link"

const MusicList = () => (
  <div className="music-list-outer-container">
      <Link style={{ color: `white`, textDecoration: `underline`, padding: `25px` }} to="/teaching">
        GO BACK
      </Link>
      <div>
        <h2>Main Stream/Standards</h2>
        <p>()(easy)2(medium)3(hard)</p>
        <ul className="lista-musica">
          <li className="element">All The Things You Are - 2</li>
          <li className="element">Autumn Leaves</li>
        </ul>

        <ul className="lista-musica">
          <li className="element">Beautiflul Love</li>
          <li className="element"> Bernie’s Tune</li>
          <li className="element">Bluesette - 2</li>
          <li className="element">But Not For Me</li>
          <li className="element">Bye Bye Blackbird</li>
          <li className="element">Cherokee - 2</li>
          <li className="element">Don't Get Around Much Anymore</li>
          <li className="element"> Do Nothin' Till You Hear From Me</li>
          <li className="element">Easy To Love</li>
          <li className="element">Embraceable You</li>
        </ul>

        <ul className="lista-musica">
          <li className="element">Fly Me To The Moon</li>
        </ul>

        <ul className="lista-musica">
          <li className="element">A Foggy Day</li>
        </ul>

        <ul className="lista-musica">
          <li className="element">Here's That Rainy Day - 2</li>
          <li className="element">I Hear A Rhapsody</li>
          <li className="element">I Love You</li>
          <li className="element">I Remember You - 2</li>
          <li className="element">I’ll Remember April - 2</li>
          <li className="element">I'm Gettin' Sentimental Over You</li>
          <li className="element">Invitation - 2</li>
        </ul>


        <ul className="lista-musica">
          <li className="element">It Don't Mean A Thing</li>
          <li className="element">Just Friends</li>
          <li className="element">Just Squeeze Me</li>
          <li className="element">Like Someone In Love - 2</li>
          <li className="element">Love For Sale - 2</li>
          <li className="element">My Secret Love</li>
          <li className="element">My Foolish Heart</li>
          <li className="element">Night And Day </li>
          <li className="element">Old Devil Moon - 2</li>
          <li className="element">On Green Dolphin Street</li>
          <li className="element">Out Of Nowhere</li>
          <li className="element">Satin Doll</li>
          <li className="element">Softly As A Morning Sunrise </li>
          <li className="element">Some Day My Prince Will Come</li>
          <li className="element">Star Eyes - 2</li>
          <li className="element">Stella By Starlight - 2</li>
        </ul>

        <ul className="lista-musica">
          <li className="element">Take The "A" Train</li>
        </ul>
      </div>
  </div>
)

export default MusicList
