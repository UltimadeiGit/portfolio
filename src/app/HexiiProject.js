import styles from './page.module.css';
import Common from './common';

export default function HexiiProjectComponent() {
    return (<div>
        
        <div className={styles.center} id="Hexii"><Common.Icon src="./icon_Hexii.png" alt="Hexii Icon" width="256" height="256" /></div>
        
        <h2>About</h2>
        <div className={styles.callout_backdrop}>
            <p>Hexii is a cross-platform incremental game developed in C++ with the Cocos2dx framework, and it&apos;s bit of a &apos;forever project&apos; for me it seems. I plan to release it eventually (2025 is the goal!) but as it will be my first proper game release, I want it to be much larger in scope than, for instance, a game-jam game. As such, Hexii needs more time in the oven.</p>
        </div>

        <h2>Design</h2>
        <div className={styles.callout_backdrop}>
            <p>Incremental games, characterised by their &quot;number go up&quot; gameplay, are genuinely one of my favourite genres out there and I think they are overlooked (or perhaps just misunderstood) by the wider gaming audience due to their position as &apos;casual&apos; options (not derogatory). Hexii is absolutely designed with a casual audience in mind, but I believe the magic of incremental games is their ability to appeal to the hardcore gamer mindset as well. Designing an incremental is fundamentally asking the question &quot;how can I keep my players <em>maximally engaged</em> with as little as possible&quot;. Finding new and interesting ways to make a number go up is a joyful task! Unfortunately, it&apos;s also very difficult to get right... Mostly it comes down to the maths of how costs in the game increase vs resource yields. The simpler the formula and interactions are, the easier it is to design for, but the less interesting it ends up for the player at the other end because things tend to become too stale too quickly. Carefully adding in progression &quot;walls&quot; and solutions that remove them or otherwise introduce new aspects of gameplay is difficult to get right (and usually requires tester feedback), but when done well leads to a highly fun game.</p>
        </div>

        <h2>Code</h2>
        <div className={styles.callout_backdrop}>
            <p>Everything you see in Hexii was made by me, from the assets to the code (except the framework). Cocos2dx makes cross-platform compilation (relatively) straightforward, and it also handles the low-level rendering code. For the most part though, that&apos;s it. Hexii&apos;s internals can be broken up into roughly three groups:</p>
            <ul>
                <li>The hexii [game pieces]</li>
                <li>UI</li>
                <li>Broader systems [saving/loading, user progression handling etc]</li>
            </ul>
            <p>There are inumerable talking points for all three of these, but the overall picture is that the main scene (scene is a cocos2dx term but means what you would expect) sets up the UI and hexii systems, triggers the loading system to restore save data, then mostly hands control over to the hexii &apos;plane&apos; which manages interactions between hexii. The UI and hexii systems each interact via message passing and UI is arranged hierarchically with components and sub components which generally pass messages no more than one layer up/down at a time.</p>
        </div>

        <h2>Links</h2>
        <div className={styles.callout_backdrop}>
            <Common.SideLink text=" ~ Play Hexii [Requires download] ~ " href="https://ultimadei.itch.io/hexii"/>
            <Common.SideLink text=" ~ Review Code ~ " href="https://github.com/UltimadeiGit/Hexii"/>
        </div>
        
        <hr />
    
    </div>)
}
