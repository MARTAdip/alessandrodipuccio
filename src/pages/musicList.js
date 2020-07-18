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
        {/* PRIMA COLONNA */}
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

         {/* SECONDA COLONNA */}
         <ul className="lista-musica two">
          <li className="element">The Days Of Wine And Roses</li>
          <li className="element">There Is No Greater Love</li>
        </ul>

         <ul className="lista-musica two">
          <li className="element">There Will Never Be Another You</li>
          <li className="element">They Can't Take That Away From Me</li>
          <li className="element">What A Difference a Day Made</li>
          <li className="element">What This Thing Called Love</li>
          <li className="element">Without A Song</li>
          <li className="element">Yesterday</li>
        </ul>

          <h2>Ballads</h2>

          <ul className="lista-musica two">
          <li className="element">A Child Is Born</li>
          <li className="element">Ask Me Now</li>
          <li className="element">Body And Soul</li>
        </ul>

        <ul className="lista-musica two">
          <li className="element">But Beautiful</li>
          <li className="element">Come Sunday</li>
          <li className="element">Darn That Dream</li>
        </ul>

        <ul className="lista-musica two">
          <li className="element">Day Dream</li>
          <li className="element">God Bless The Child</li>
          <li className="element">I Can’t Get Started</li>
          <li className="element">If You Could See Me Now</li>
          <li className="element">In A Sentimental Mood</li>
        </ul>

        <ul className="lista-musica two">
          <li className="element">I Remember Clifford</li>
          <li className="element">Lover Man</li>
        </ul>


        <ul className="lista-musica two">
          <li className="element">Memories Of You</li>
          <li className="element">Misty</li>
          <li className="element">My Funny Valentine</li>
          <li className="element">My One And Only Love</li>
          <li className="element">Nearness Of You</li>
          <li className="element">Over The Rainbow</li>
          <li className="element">Polka Dots And Moonbeams </li>
          <li className="element">Round Midnight</li>
          <li className="element">Ruby My Dear</li>
          <li className="element">Save Your Love For me</li>
          <li className="element">Soul Eyes</li>
          <li className="element">Stardust</li>
          <li className="element">Skylark</li>
          <li className="element">Solitude</li>
          <li className="element">Sophisticated Lady</li>
          <li className="element">Tenderly</li>
        </ul>


      </div>
  </div>
)

export default MusicList


 







 






