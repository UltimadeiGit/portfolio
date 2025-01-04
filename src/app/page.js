import styles from './page.module.css';
import HexagonComponent from './HexagonComponent';
import Common from './common';

/*
function Common.Highlight({ children }) {
  return <span className={styles.Common.Highlight}>{children}</span>;
}

function Icon({ src, alt }) {
  return <Image style={styles.icon} src={src} alt={alt} width={32} height={32} />;
}
*/

function SideLink({text, href}){
  return (
  <div>
  <div className={styles.center}>{text}</div>
  <a href={href}>{href}</a>
  </div>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.ribbonContent}>
          <span className={styles.leftText}>Sam</span>
          <img src="./顔.png" alt="Sam's face" className={styles.centerImage} />
          <span className={styles.rightText}>Shakeshaft</span>
        </div>
      </div>

      {/*
      <div className={[styles.center, styles.header].join(' ')}>
        <h1 className={styles.title}>
          Sam Shakeshaft
        </h1>
        <h2>
          <Common.Highlight>Game Developer</Common.Highlight>
        </h2>
        <h4>
          Please note: This page is currently under heavy construction until 5th January 2025
        </h4>
      </div>
      */}
      
      <div className={styles.nav}>
        {/*
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        */
        }
        <a href="#DNGN">DNGN</a>
        <a href="#Hexii">Hexii</a>
        <a href="#BaaB">Blind as a Bat</a>
      </div>

      {/*
<div className={styles.container}>
        <div className={styles.description}>
          <h2># About</h2>
          <p>
            I&apos;m Sam, a hard-working, conscientious individual with a deep passion for learning. I recently completed the following A-Levels at college:
          </p>
          <ul>
            <li>
              <Common.Icon src="/icon_brain.png" alt="Icon" />
              Psychology [Grade Pending]: A* Predicted
            </li>
            <li>Computer Science [Grade Pending]: A* Predicted</li>
            <li>Mathematics [Grade Pending]: A* Predicted</li>
            <li>Further Mathematics [Grade Pending]: A* Predicted</li>
          </ul>
        </div>

        <div className={styles.card} id="about">
          <h4>Contact Info</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut cursus nibh. Sed in fermentum risus, eget sollicitudin odio. Donec metus neque, sagittis vitae mollis vitae, viverra et lectus. Donec metus tortor, cursus vitae nunc ac, rutrum accumsan ipsum. Aenean sed mauris turpis. Nullam nec dolor in nibh pulvinar posuere. Etiam ac porta nulla. Suspendisse non neque pretium, lobortis nisi quis, tempus sapien.
          </p>
        </div>
      </div>

      <div className={styles.description} id="skills">
        <h2># Skills</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut cursus nibh. Sed in fermentum risus, eget sollicitudin odio. Donec metus neque, sagittis vitae mollis vitae, viverra et lectus. Donec metus tortor, cursus vitae nunc ac, rutrum accumsan ipsum. Aenean sed mauris turpis. Nullam nec dolor in nibh pulvinar posuere. Etiam ac porta nulla. Suspendisse non neque pretium, lobortis nisi quis, tempus sapien.
        </p>
      </div>
      */
      }

      <div className={styles.description} id="projects">
        <h2># Projects</h2>

        {// <HexagonComponent />
        }

        <div>

          <div className={styles.center} id="DNGN"><Common.Icon src="./icon_DNGN.png" alt="DNGN Icon" width="256" height="256" /></div>
          <div className={styles.center}><iframe src="https://www.youtube.com/embed/x7JMQEBYFqI" width="560" height="315" title="A YouTube video" frameborder="0" allowfullscreen></iframe></div>
          <h2>About</h2>
          <p>DNGN is game dev society&apos;s first collaborative project. During its first year, our fledgling society attracted around 10 members who regularly contributed to the design of DNGN. The scope of this design was quite small in that we came up with the name, genre, basic gameplay loop and other such details but then proceeded to really refine the vision for that gameplay loop. By the time we were ready to start development proper, we were all on the same page that the game would be a co-op dungeon crawler with a <strong>heavy</strong> focus on weapons being intrinsically tied to movement and especially the interaction between two weapons leading to a novel experience.</p>
          <h2>Notes</h2>
          <p>Time-wise, my contributions amount to around 30% of the total man hours, with the majority of that being spent writing gameplay and systems code. A not-at-all insignificant portion of time was also dedicated to architecting the game with the 2 other co-leads. For example, one day we began a joint coding session by spending a few hours, whiteboard at the ready, deciding how to go about enabling enemies to use weapons exactly like players would. This led to the idea to make a &quot;virtual joystick&quot; which an item would respond to and having the player register their <em>real</em> joystick to the virtual one while an enemy would move the virtual joystick with their AI. (I then proceeded to implement the Item code while my teammate was implementing the Enemy code). A huge focus was placed on making the game modular enough that making new items should be something we could potentially train someone to do <em>without</em> them needing to know the ins and outs of the rest of the codebase. I&apos;m pretty happy that the item system meets that requirement, as adding a new item with unique behaviour can be done very quickly and barring specific balance adjustments, it works out of the box with both players and enemies.</p>
          <p>We&apos;re really happy with how the gameplay turned out as we feel there is a surprising amount of depth in the movement system even with the few items that are in the game at present. Please have a play if you have time, otherwise I put together a trailer for the game which gets across the main points.</p>
          <p>I could talk about DNGN for hours (the technical side is a lot of fun to explain!), however I don&apos;t want this to turn into a focusless wall of text so feel free to ask me anything you want</p>
          <SideLink text=" ~ Play the DNGN demo [Requires download, gamepad recommended] ~ " href="https://cu-devs.itch.io/dngn-freshers-fair-ver"/>
          <hr />

          <h1 className={styles.center} id="Hexii">Hexii<Common.Icon src="./icon_Hexii.png" alt="Hexii Icon" width="256" height="256" /></h1>
          <SideLink text=" ~ Play Hexii [Requires download] ~ " href="https://ultimadei.itch.io/hexii"/>
          <SideLink text=" ~ Review Code ~ " href="https://github.com/UltimadeiGit/Hexii"/>
          <h2>About</h2>
          <p>Hexii is a cross-platform incremental game developed in C++ with the Cocos2dx framework, and it&apos;s bit of a &apos;forever project&apos; for me it seems. I plan to release it eventually (2025 is the goal!) but as it will be my first proper game release, I want it to be much larger in scope than, for instance, a game-jam game. As such, Hexii needs more time in the oven.</p>
          <h2>Design</h2>
          <p>Incremental games, characterised by their &quot;number go up&quot; gameplay, are genuinely one of my favourite genres out there and I think they are overlooked (or perhaps just misunderstood) by the wider gaming audience due to their position as &apos;casual&apos; options (not derogatory). Hexii is absolutely designed with a casual audience in mind, but I believe the magic of incremental games is their ability to appeal to the hardcore gamer mindset as well. Designing an incremental is fundamentally asking the question &quot;how can I keep my players <em>maximally engaged</em> with as little as possible&quot;. Finding new and interesting ways to make a number go up is a joyful task! Unfortunately, it&apos;s also very difficult to get right... Mostly it comes down to the maths of how costs in the game increase vs resource yields. The simpler the formula and interactions are, the easier it is to design for, but the less interesting it ends up for the player at the other end because things tend to become too stale too quickly. Carefully adding in progression &quot;walls&quot; and solutions that remove them or otherwise introduce new aspects of gameplay is difficult to get right (and usually requires tester feedback), but when done well leads to a highly fun game.</p>
          <h2>Code</h2>
          <p>Everything you see in hexii was made by me, from the assets to the code (except the framework). Cocos2dx makes cross-platform compilation (relatively) straightforward, and it also handles the low level rendering code. For the most part though, that&apos;s it. Hexii&apos;s internals can be broken up into roughly three groups:</p>
          <ul>
            <li>The hexii [game pieces]</li>
            <li>UI</li>
            <li>Broader systems [saving/loading, user progression handling etc]</li>
          </ul>
          <p>There are inumerable talking points for all three of these, but the overall picture is that the main scene (scene is a cocos2dx term but means what you would expect) sets up the UI and hexii systems, triggers the loading system to restore save data, then mostly hands control over to the hexii &apos;plane&apos; which manages interactions between hexii. The UI and hexii systems each interact via message passing and UI is arranged hierarchically with components and sub components which generally pass messages no more than one layer up/down at a time.</p>
          <hr />
          
          <div className={styles.center} id="BaaB"><Common.Icon src="./icon_BaaB.png" alt="Blind as a Bat Icon" width="256" height="256" /></div>
          <SideLink text=" ~ Play Blind as a Bat ~ " href="https://ultimadei.itch.io/blind-as-a-bat"/>
          <h2>About</h2>
          <p>My 2024 Cambridge University Game Jam submission, developed with one partner; I did all of the programming and he made all of the assets. The theme of this 48 hour jam was &quot;Reflection&quot;, which Blind as a Bat interprets to be the reflection of echolocation bouncing off of cave walls. We managed 2nd place in the popular vote out of over 20 games :D</p>
          <h2>Notes</h2>
          <p>Designing BaaB was really fun because of how integrated the visuals were with the game&apos;s design. It was critical we got the look and feel of echolocation right, otherwise we just wouldn&apos;t have a game...
          It took effectively the whole first day to find what worked, as I was iterating over multiple failed ideas (initially I thought using sprite masks to make things visible/invisible would work but I couldn&apos;t get it to look good). Although it strikes me as obvious in hindsight, the solution we ultimately went with was to use unity&apos;s lighting and particle systems, adapted slightly. Namely, with a generous usage of shaders to trick the player into thinking our game is prettier than it is :)</p>
          
        </div>

        <div className={styles.nav}>
          <a href="https://ultimadei.itch.io">itch</a>
          <a href='https://github.com/UltimadeiGit'>Github</a>
        </div>
      </div>
    </main>
  );
}
