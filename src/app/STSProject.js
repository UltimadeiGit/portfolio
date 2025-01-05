import styles from './page.module.css';
import Common from './common';

export default function DNGNProjectComponent() {
    return (<div>
        
        <div className={styles.center} id="DNGN"><Common.Icon src="./icon_DNGN.png" alt="DNGN Icon" width="256" height="256" /></div>
        <div className={styles.center}><iframe src="https://www.youtube.com/embed/x7JMQEBYFqI" width="560" height="315" title="A YouTube video" frameborder="0" allowfullscreen></iframe></div>
        <h2>About</h2>
        <p>DNGN is game dev society&apos;s first collaborative project. During its first year, our fledgling society attracted around 10 members who regularly contributed to the design of DNGN. The scope of this design was quite small in that we came up with the name, genre, basic gameplay loop and other such details but then proceeded to really refine the vision for that gameplay loop. By the time we were ready to start development proper, we were all on the same page that the game would be a co-op dungeon crawler with a <strong>heavy</strong> focus on weapons being intrinsically tied to movement and especially the interaction between two weapons leading to a novel experience.</p>
        <h2>Notes</h2>
        <p>Time-wise, my contributions amount to around 30% of the total man hours, with the majority of that being spent writing gameplay and systems code. A not-at-all insignificant portion of time was also dedicated to architecting the game with the 2 other co-leads. For example, one day we began a joint coding session by spending a few hours, whiteboard at the ready, deciding how to go about enabling enemies to use weapons exactly like players would. This led to the idea to make a &quot;virtual joystick&quot; which an item would respond to and having the player register their <em>real</em> joystick to the virtual one while an enemy would move the virtual joystick with their AI. (I then proceeded to implement the Item code while my teammate was implementing the Enemy code). A huge focus was placed on making the game modular enough that making new items should be something we could potentially train someone to do <em>without</em> them needing to know the ins and outs of the rest of the codebase. I&apos;m pretty happy that the item system meets that requirement, as adding a new item with unique behaviour can be done very quickly and barring specific balance adjustments, it works out of the box with both players and enemies.</p>
        <p>We&apos;re really happy with how the gameplay turned out as we feel there is a surprising amount of depth in the movement system even with the few items that are in the game at present. Please have a play if you have time, otherwise I put together a trailer for the game which gets across the main points.</p>
        <p>I could talk about DNGN for hours (the technical side is a lot of fun to explain!), however I don&apos;t want this to turn into a focusless wall of text so feel free to ask me anything you want</p>
        <Common.SideLink text=" ~ Play the DNGN demo [Requires download, gamepad recommended] ~ " href="https://cu-devs.itch.io/dngn-freshers-fair-ver"/>
        <hr />
    
    </div>)
}