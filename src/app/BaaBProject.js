import styles from './page.module.css';
import Common from './common';

export default function BaaBProjectComponent() {
    return (<div>
        
        <div className={styles.center} id="BaaB">
            <Common.Icon src="./icon_BaaB.png" alt="Blind as a Bat Icon" width="256" height="256" />
        </div>
        
        <h2>About</h2>
        <div className={styles.callout_backdrop}>
            <p>My 2024 Cambridge University Game Jam submission, developed with one partner; I did all of the programming and he made all of the assets. The theme of this 48 hour jam was &quot;Reflection&quot;, which Blind as a Bat interprets to be the reflection of echolocation bouncing off of cave walls. We managed 2nd place in the popular vote out of over 20 games :D</p>
        </div>

        <h2>Notes</h2>
        <div className={styles.callout_backdrop}>
            <p>Designing BaaB was really fun because of how integrated the visuals were with the game&apos;s design. It was critical we got the look and feel of echolocation right, otherwise we just wouldn&apos;t have a game... It took effectively the whole first day to find what worked, as I was iterating over multiple failed ideas (initially I thought using sprite masks to make things visible/invisible would work but I couldn&apos;t get it to look good). Although it strikes me as obvious in hindsight, the solution we ultimately went with was to use Unity&apos;s lighting and particle systems, adapted slightly. Namely, with a generous usage of shaders to trick the player into thinking our game is prettier than it is :)</p>
        </div>

        <h2>Links</h2>
        <div className={styles.callout_backdrop}>
            <Common.SideLink text=" ~ Play Blind as a Bat ~ " href="https://ultimadei.itch.io/blind-as-a-bat"/>
        </div>
            
        <hr/>
        
    </div>)
}
