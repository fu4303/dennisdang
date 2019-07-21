// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: 'Fullstack software engineer vs being a software engineer',
    slug: 'fullstack',
    html: `
		<div><p>Today marks day 2 as a fullstack software engineer at Mount Sinai NYC. I’ve joined a pretty early stage project that aims to become the Slack-Uber-WhatsApp-like communication platform for healthcare. We have a startup feel but with the benefits of an enterprise backing us - pretty sweet.</p>
		<p>I won’t be speaking much of the project itself but I will share how I feel as a “fullstack” software engineer and what I see myself learning and doing. And just also where I am clearly lacking in skill and experience.</p>
		<p>Now that I’ve gained the rather flimsy but venerable title of “fullstack” software engineer, I realized that it means little. LOL. All this means is that I’m allowed and encouraged to push code in Golang in the back or Javascript in the front. It doesn’t mean anything if you don’t understand the many moving parts necessary to build a software <strong>system</strong>. I’ll go into job marketability later.</p>
		<p>To build a system that caters to millions and billions of people requires a large breadth of knowledge. Thus why we work in teams; everyone can complement one another’s lacking spots. Take for example Mount Sinai’s first <a href="https://www.mountsinai.org/about/newsroom/2018/mount-sinai-and-hudson-yards-announce-oneofakind-health-care-service-portfolio-at-hudson-yards">MVP</a>: a chatbot underneath the hood.</p>
		<p>To build a chatbot and integrate it into Mount Sinai’s ecosystem, you need to understand all the moving parts: i.e., authentication of users from patients to whatever staff, how and who the chatbot connects to within our ecosystem, and also internationalizing our product for our multilingual user-base. Breaking down each of these further will too spin up numerous other questions.</p>
		<p>So in short, it’s not knowing about the actual technology itself, but understanding how it all comes together. </p>
		<p>For myself as a fullstack software engineer, I have to very much understand system design, and not just in terms of scalability and reliability, but integrations into our existing technologies. While I do know how to build a standalone application with Go and Javascript, I don’t know how to build a platform that caters to many real users. Moving forward, I plan on becoming flexible enough to not just write Go but understand the core concepts of building a reliable backend. The language doesn’t matter. As for the front end, I also intend to stay up-to-date with the latest trends in my particular sphere, namely web performance optimizations and React.</p>
		<p>Though there’s still two things to touch upon: job marketability and fun. </p>
		<p>We as developers want to have fun. It only makes our lives more enjoyable when we get to work with new toys, and honestly, be cool among our peers. Using a particular tech and sharing about it is like buying new shoes and hoping our eagle-eyed friends will notice. You’re hoping someone notices and compliments you. Otherwise it doesn’t really matter. Fortunately I like Go. (But OCaml!! and Reason!!).</p>
		<p>Then there’s marketability. The current job market favors generalists, especially among startups and even the Big N tech companies. But do I think I’m personally valued higher now that my title is “fullstack?” It’s a double-edged sword. I feel higher expectations. Expectations that I know certain patterns and best pratices at both ends of the technical spectrum. </p>
		<p>Instead of using the term “spectrum,” it may be more apt to illustrate our skills as a hexagon, or whatever n-polygon, akin to the charts in racing and fighting games: Speed, Power, Recovery, Skills, Magic.</p>
		<p>Thus, my conclusion is that people should strive to be <em>software engineers</em> rather than fullstack. An engineer connotes much more experience and understanding than someone that understands how to write Javascript for both web and server-side.</p></div>
		`,
  },

  {
    title: 'Tackling Conferences and Networking',
    slug: 'tackling-conferences',
    html: `
	<div><p>Hello everyone! I’m a UI Engineer at Kelley Blue Book. I’ve been a professional developer for about 1.5 years, and I learned what a boolean was in 2016 (haha). I hope my own experience from <a href="https://summit.graphql.com/2018/">GraphQL Summit 2018</a> can spark your desire to attend tech conferences!</p>
	<p>I’d like to share my thoughts on how others can fully embrace and capitalize on conferences to market themselves and network. Whether or not you’re actively looking for a job, it is to your own benefit to create connections with fellow developers and keep a pulse on the lay of the land. It’s just business!</p>
	<p>I’ll tackle this subject from three points of view: before, during, and after the conference.</p>
	<p>Disclaimer: I love being with people - many will call that extroverted-ness - but I have a social limit as well and certainly get tired after squeezing up the guts to speak to new people. But break through it!</p>
	<p>Before we begin, let’s get a couple of <code class="language-text">why's</code> out of the way, and then move onto the <code class="language-text">how's</code>.</p>
	<h1>Why attend conferences</h1>
	<p>If you love something, you best be around people who share the same enthusiasm. Around the time of the conference, I was super gung-ho about <a href="https://graphql.org">GraphQL</a>.</p>
	<p>GraphQL is the latest in tech that is transforming the way user interfaces interact with the back-end. It’s allowing my own team at KBB to quickly breathe new life into our aging products! So I asked myself: why the hell not go?</p>
	<p>End result: I remember maybe 15% of what I’d “learned”. But my golden ticket was standing in the same space and interacting with other developers and GraphQL experts that I admire on the internet. Oh, almost forgot to mention that I got invited to a private after-party with Airbnb, Facebook, Netflix, Apollo, just to name a few! Also, the conf t-shirts were quite aesthetic.</p>
	<h1>Before a conference</h1>
	<p>So after cruising the internet, Reddit, Google, Github ReadMe’s, you found a conference you’d like to attend. Let’s tackle the money issue first. If you’re fortunate enough to work for a company that’s willing to expense your trip, by all means request it!</p>
	<p>As soon as I got wind of GraphQL Summit, I proactively drafted an email, sprinkled lots of my own special this-is-for-growth-enterprise-talk sauce, and fired off the email with due respect.</p>
	<p>For those on the opposite spectrum, my practical advice is to attend what you can! Any good conference will generally upload their videos within a month’s time. Most importantly, networking opportunities are abound if you can make it. A lower conference price does not mean a lesser quality! Go and meet people - it’s a level above meetups.</p>
	<p>Get ready to say hello to your new peers.</p>
	<h1>During a conference</h1>
	<p>You’re here now, you’re checked in, and you’re ready to learn. Don’t forget why you’re here! Whatever your goal is, networking or experience, make it your mission.</p>
	<p>With a lanyard and schedule in hand (or around your neck), you’ll naturally drift between rooms, halls, and auditoriums. Your opportunities to introduce yourself and make acquaintances are plentiful.</p>
	<p>I find the most value in the human connections I make, and this doubly so at conferences, given that the conference talks will be on YouTube anyways. The mass of people is overwhelming but it’s time to buck up and politely join conversations. Be human! Say hello, do introductions, ask questions, share stories. Everyone’s there to have a fun, wholesome time. Just be kind and polite, and just spicy enough.</p>
	<h2>Live coding session</h2>
	<p>Let’s do a live <del>coding</del> <em>living</em> session. True story here. At lunch, I see a speaker in a group of 4-5 already engaged in conversation. It’s the Airbnb speaker and Airbnb friends! I love Airbnb - their design, their culture, their product. So I couldn’t help myself!</p>
	<p>But before I walk over, I remember my mission: make professional connections. I was genuinely already interested in what the speaker shared on stage earlier. With a couple questions prepped and lightly sweaty palms, I approached the group and waited until the current speaker finished:</p>
	<blockquote>
	<p>“Hey everyone! Mind if I join you?” <br>
	“Yeah sure! No problem. Welcome.” <br>
	Dry hands. <br>
	“I’m Dennis, nice to meet you all”. <br>
	Shake hands, get names, smile too big because…I’m fanboying.</p>
	</blockquote>
	<p>At this point, being the newcomer, I bring something to the conversation to keep it going. I ask about their work, open positions (yes, open positions), and about the talk earlier. Once I felt comfortable, I ask to connect on LinkedIn. The rest is history. The after-party invite was from an encounter with another speaker. Heh.</p>
	<p>At the end of the day, leaving your comfort zone pays dividends. You don’t have to speak to speakers. You especially don’t have to talk to everyone you stand next to. But your experience will be multiplied in those few meaningful exchanges you choose to make.</p>
	<p>That’s about all to it!</p>
	<p>Be genuine and curious.</p>
	<p>Get your swags.</p>
	<p>Be inspired.</p>
	<h1>After a conference</h1>
	<p>The conference is over and you’ve gained a few connections.</p>
	<p>The best you can do is drop a follow-up message in your new acquaintances’ inbox. If you’re looking for a job, be clear and concise and honest about it. Else, just let them know that you enjoyed meeting them and leave it at that!</p>
	<p>You can also choose to write about it.</p>
	<p>Or tweet about it.</p>
	<p>Or code about it.</p>
	<h1>Aftermath</h1>
	<p>Thanks for reading everyone! If I made you crack a single smile any point in time since the first line, my mission’s complete. If you have any further questions, feel free to contact me via Twitter at <a href="https://twitter.com/dangitdennis">@dangitdennis</a>. </p>
	<p>Thanks to Kelley Blue Book for sponsoring my time. Freedom!</p></div>
		`,
  },

  {
    title: "CRUD wishlist with Zeit's Now and AWS DynamoDB, A Review",
    slug: 'zeit-now-and-dynamodb',
    html: `
	<div><p><a href="https://github.com/dangdennis/list">Repo</a><br>
	<a href="https://wishlist-it80fo1a9.now.sh/">App</a></p>
	<p>Zeit’s release of <a href="https://zeit.co/blog/now-2">Now 2.0</a> inspired me to build a simple wishlist with lambdas. Basically a todolist. Given my acquaintance with Next.js and basic back-end knowledge, how hard can it be?</p>
	<p>I proceeded to spend 2 weeks on and off, with a few hours here and there, attempting to parse Zeit’s rather sparse docs on <strong>Now</strong> to debug and develop my list. The organization of the docs did not lend itself to easy navigation and quick-access. Til the end I forget where to find the page on creating routes and capture groups within <code class="language-text">now.json</code>.</p>
	<p>Although being my first time using DynamoDB, I spent considerably more time debugging my lambdas, mulling around for a way to parse Node request bodies from inbound post requests. My fault for being an ignorant Express body-parser user, but I had no prior clue. Who knew it was as simple as using Zeit’s <a href="https://github.com/zeit/micro">micro</a>. Fortunately something at Spectrum.chat did. After finally able to deploy my first few lambdas, I soon realize how terribly slow the developer feedback/debug loop was. Deploy -&gt; Log -&gt; Deploy -&gt; Log -&gt; Deploy. I could’ve created my own http servers but I thought deployments would be much faster, given that Zeit would only deploy code that has changed. That didn’t seem like the case. Idk.</p>
	<p>Fortunately someone did the work for me by creating a local dev environment with <a href="https://github.com/krasimir/now-lambda-runner">now lambda runner</a>. Since then, everything sailed pretty darn smooth.</p>
	<p>Despite shortcomings in Now 2.0’s developer experience, I thoroughly enjoy the direction Zeit is heading. I wouldn’t have stuck through with this if I hadn’t been so excited throughout the process, knowing that the code I write is both cheap, fast, and maintainable. Lambdas are the way to go, and if you don’t want to use a framework like Serverless, then Now 2.0 is certainly a viable answer. However, I’d hold off for a few more months until it can be battle-tested and better supported with documentation and examples. I’m glad Zeit moves fast.</p>
	<p>Quick list of tips and problem areas:</p>
	<ul>
	<li>
	<p>Log everything server-side.</p>
	<ul>
	<li>It’ll come in handy for tracing your deployed app via now logs.</li>
	</ul>
	</li>
	<li>
	<p>Test lambdas locally</p>
	<ul>
	<li>Use <a href="https://github.com/krasimir/now-lambda-runner">https://github.com/krasimir/now-lambda-runner</a> (this saved my life)</li>
	</ul>
	</li>
	<li>Have a flipper to route between dev and prod routes</li>
	<li>
	<p>Parse request body</p>
	<ul>
	<li>Use zeit’s micro: <a href="https://github.com/zeit/micro">https://github.com/zeit/micro</a></li>
	</ul>
	</li>
	<li>
	<p>You’ll be deploying often…</p>
	<ul>
	<li>I paid for Now unlimited to increase my deployment rate.</li>
	<li>$0.10 only so far</li>
	</ul>
	</li>
	<li>
	<p>Adding secrets and environment variables is kind of a pain.</p>
	<ul>
	<li>You have to remove a key and then re-add the key to update its value.</li>
	</ul>
	</li>
	<li>
	<p>The docs really were too sparse for my level</p>
	<ul>
	<li>I still don’t understand how routing capture groups work.</li>
	<li>It wasn’t obvious how to parse requests at first.</li>
	</ul>
	</li>
	<li>I wish there was an option to continually deploy to the same URL.</li>
	<li>Not sure why getInitialProps wasn’t doing its thing.</li>
	</ul></div>
		`,
  },

  {
    title: "I don't know much at all",
    slug: 'idk-2018',
    html: `
	<div><p>Inspired by <a href="https://overreacted.io/things-i-dont-know-as-of-2018/">Dan Abramov’s honest thoughts</a> regarding his own expertise, I’d like to dispel any personal delusions in my own understanding of the vast realm of software.</p>
	<p>I’m constantly fluttering between new technology, hoping to sink my teeth into something that can perhaps sustain my career - whether that’s a certain JS framework, blockchain, Rust, Go, Node, Flutter, serverless, Python, cloud technology, whatever other computing language or tool. But because my experience with each technology is so touch and go, I realize I hardly ever master anything, let alone ingest enough experience with that tool to be useful.</p>
	<p>I have this incessant need to find a niche. However, instead of searching, it’s time to learn to focus my energy and attention on singular topics that underlie technology. Focus itself is a mental exercise - a trained ability that I admittedly may never have had.</p>
	<p>So here is where my skills honestly are:</p>
	<p>I still don’t know React as well as I think I do! I have much trouble managing my states and UI architecter in a manner that’s conducive to scale and maintainability. I constantly have to look up old code to re-teach myself patterns. </p>
	<p>I do too many tutorials. I fast-forward through Egghead and Front End Master courses in hopes of having things stick. It’s like putting veges on my plate but never eating them.</p>
	<p>I make too many ‘study’ todo items that I insist I have to complete. This is a rather exhaustingly hampering noose on my ability to truly, mentally, relax.</p>
	<p>I still forget CSS layouts in flex and grid. How fast things deterioriate when you don’t use them daily.</p>
	<p>I start porjects and get stuck configuring my tools more often than writing product code.</p>
	<p>I choke down too many software engineering podcasts that I don’t leave room to enjoy my music and fun podcasts. I mean, I really enjoy my technical podcasts! But it’s the moments when I want to listen more leisurely, I don’t allow myself that.</p>
	<p>I freaking cannot solve algorithms well at all. Cheers to hoping this year of leetcode and my red book can make a dent in my brain.</p>
	<p>I dream of doing open source more than actually doing open source. Aka, browsing my GitHub feed and feed is akin my Instagram scrolling time.</p>
	<hr>
	<p>So where do I go from here? Lately a motto that I’ve been finding very useful is <strong>“do just-in-time learning, not just-in-case learning.</strong>” As a general rule of thumb, I think I’ll multiply any expected learning time by a factor of 3-5. If, say, a tutorial on Go hovers around 3hr, I’ll make sure I invest at least 9hrs total to truly let my brain grok the knowledge.</p>
	<p>Edit 04/05/2019:</p>
	<p>These past 4 months have been a tidal wave of learning and reforging. Fortunately I’m increasingly able to hone my attention to a few subjects at a time. I’ve stuck to my motto of just-in-time learning. My learning surface area is still just as wide, but now I handle them much as a Node event loop would: concurrently!</p></div>
		`,
  },

  {
    title: 'Surfing development waves',
    slug: 'surfing-development-trends',
    html: `<div><p>I agonize quite often over new technology. I certainly know why and where that comes from, and any certain senior developer that’s been in the game for a while can understand. It’s just as an early engineer, you can get trapped in decision paralysis. Am I choosing the right technology/language to learn? Do I dive deeper into node? Dive into infrastructure? Do I learn rust? What about blockchain stuff? </p>
	<p>TLDR: Balance between lightly trying new things, master <em>one</em> thing. </p>
	<p>Fortunately I’m finally coming to understand the overarching picture. It’s about having principles, knowing the end goal. Keeping <em>tabs</em> on trends is enough. Thus my latest writing is my first attempt at sharpening my focus.</p>
	<p><a href="https://medium.com/@dangggdennis/write-deletable-code-29ea51fdc353">Surfing Development Waves</a>
	Everything below is simply a copy paste from the article.</p>
	<p>This post is my recent musing of how software development evolves. It’s a means of coping with the ever-shifting landscape of technology as a young developer&#8202;—&#8202;trying to find purpose and goal, ya know?</p>
	<p>I recognize three ubiquitous forces that determine the direction of software technology (please don’t quote me). As someone new to anything&#8202;—&#8202;certainly myself and software—&#8202;it pays to understand why, how, and where trends go.</p>
	<p>Knowing these trends enables someone to pick the right technologies, the right mental models, and even the right companies to shape their skills. So instead of aimlessness, instead of burnout, I get focus!
	My three observations</p>
	<ul>
	<li>Product needs</li>
	<li>Ease of development</li>
	<li>Deletability</li>
	</ul>
	<p>It’s the basic software development lifecycle.</p>
	<p>Product team comes up with some requirements&#8202;—&#8202;product need. You as the developer are given the challenge, and determine a feasible game plan&#8202;—&#8202;ease of development. The market changes. You and the product team adapt and shake up the old feature, recreating, rewriting&#8202;—code deletability&#8202;. How fast and easy we do so is key to our success.</p>
	<p>Hmm, I could be totally off the mark, but let’s take a look at ReactJS. It grew successfully as a solution to a problem in web development: it introduced better code modularity, better developer experience, and…yah a host of other things.</p>
	<p>Containers&#8202;—&#8202;package all your code in a box. Run it. Destroy it.</p>
	<p>So what, Dennis? What’s your point again? My point is that developers have to understand what causes trends else they get swept up overlearning and burnout because they’ve spread themselves too thin. I hope to find this some form of this ideology as the underpinning of my engineering ethos. Whether picking a new tech to learn, what to refactor, what to build, I hope to be able to fallback onto a set of guiding principles when I feel myself being torn by hype and trending technologies.</p>
	<p>Maybe this is all written too spuriously, maybe I’m too tired, and I’ll be really embarrassed reading this later. But at least I’m doing something to try to save myself from running the proverbial treadmill(s).</p></div>`,
  },
  {
    title: '15 Tips for Learning Reason & ReasonReact',
    slug: '15-tips-reasonml',
    html: `<div><p>I recorded some long form notes on the basic nuances to ReasonReact v4. I take you from defining variants all the way to utilizing the built-in ReasonReact router.</p>
	  <p><a href="https://medium.com/@dangggdennis/15-tips-for-learning-reason-reasonml-bb844ad1be2b">15 Tips to Learning Reason &amp; ReasonReact</a>
	  Everything written below is better read on Medium.</p>
	  <p>For some time now I’ve wanted to learn something fresh, something statically typed, functional, and most importantly, hype.</p>
	  <p>Chancing upon a React Podcast episode eventually led to my sneaking aboard the Reason train. It hits all the spots I’ve been wanting to scratch.
	  So what’s Reason and ReasonReact?</p>
	  <p>It’s a functional language born at Facebook that looks like Javascript, but bites (bytes, hah) like OCaml. Facebook engineers then wrote Reason bindings to React.js, marrying language to framework 💒&#8202;—&#8202;ReasonReact.
	  Trying out ReasonReact:</p>
	  <div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">Official installation&#8202;—&#8202;recommended if you have time.
	  CodeSandBox&#8202;—&#8202;quick start, slightly outdated API
	  Repl.it&#8202;—&#8202;another online IDE</code></pre></div>
	  <p>Trying out Reason:</p>
	  <div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">Official Reason REPL&#8202;—&#8202;outputs Reason, Ocaml, and JS in one!
	  Sketch.sh&#8202;—&#8202;new, actively-developed Jupyter-inspired Reason notebook</code></pre></div>
	  <p>Who are these tips for?</p>
	  <p>Primarily fellow Javascript developers who are looking for a reason 🤛 to try out Reason. I found myself falling into a lot of small holes&#8202;—&#8202;holes that I wish someone could have warned me about sooner. Thus, here are some safety nets compiled just for you: Tidbits about the language itself and the peculiar ReasonReact API. Here’s the repo.</p>
	  <p>All written code, unless stated, are standalone.
	  Reason version ❗️</p>
	  <p>Please make sure we are on the same page regarding versions.
	  Package.json
	  Skim the code. Read the explanation. Revisit the code&#8202;—&#8202;my recommended reading flow.
	  Hot tips incoming! 👇</p>
	  <ol>
	  <li>
	  <p>Filename determines module name.</p>
	  <p>The module below is the minimum body for a React component.</p>
	  </li>
	  </ol>
	  <p>Your first Reason component</p>
	  <p>You render the component in other files as <firstcomponent> , not <randomcomponent> . Here we spread the contents of component into the make expression, similar to how we write React: SomeComponent extends React.Component.</randomcomponent></firstcomponent></p>
	  <p>For more information on creating Reason components.</p>
	  <div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">Here, we are “importing” the &lt;FirstComponent /&gt; , the module from step 1.</code></pre></div>
	  <p>No explicit imports required</p>
	  <p>No importing of files required. Reason automatically reaches for declared modules. However, there is still the concept of managing module scope with Open . If you’re still wondering why I wrote SecondComponent.js , it’s because Reason files are compiled to JS. Then some bundler takes care of everything else and inits React for us. Praise for the bundlers out there!</p>
	  <p>For more information on how modules work.</p>
	  <ol start="3">
	  <li>
	  <p>Converting between different Reason data types.</p>
	  <p>Pnemonic for memorization: “datatype<em>of</em>datatype()”</p>
	  </li>
	  </ol>
	  <p>Casting between types</p>
	  <p>To convert between different data types, you must use”datatype<em>of</em>datatype” methods from the immediately global Pervasives library.</p>
	  <p>Note: I’ve annotated the function return types for clarity, however Reason can infer this, eliminating my need to do so. Also, float types require a decimal . . Within the code, see variable integer10Again .</p>
	  <p>For more information on Reason data types.</p>
	  <ol start="4">
	  <li>
	  <p>Don’t forget to convert basic data types to React elements.</p>
	  <p>You actually won’t forget because the compiler will be screaming at you. Albeit you may not understand it yet.</p>
	  </li>
	  </ol>
	  <p>React strings, arrays, and null</p>
	  <p>Notice the use of ReasonReact.string() , ReasonReact.array() , ReasonReact.null within the render method.</p>
	  <p>To render a string, use ReasonReact.string() .</p>
	  <p>To render an array, useReasonReact.array() . But just remember. There’s an intermediate step I haven’t mentioned yet: The conversion of Reason lists to arrays. See the differences between Lists and Arrays.</p>
	  <p>To render null, use ReasonReact.null .</p>
	  <p>⚠️ Previous versions of Re.React use .stringToElement, .arrayToElement .</p>
	  <p>Check out the official ReasonReact docs.</p>
	  <ol start="5">
	  <li>
	  <p>Passing props, and the use of <code class="language-text">~</code> and <code class="language-text">_</code> with argument names</p>
	  <p>Labeled parameters and ignored variables</p>
	  </li>
	  </ol>
	  <p>Passing down props as labeled arguments and ignoring variables</p>
	  <p>The ParentComponent renders a ChildComponent. The parent passes down a string as prop. No curly braces required here! But what’s required is the ~ in ~randomTextProp . This is Reason’s syntax for labeled parameters, much like Python’s ability to pass named arguments.</p>
	  <p>You may be wondering why the underscores with _children and _self . That’s just because I’m not using those variables! You can shush the compiler from warnings by prepending an _ to a variable name.</p>
	  <ol start="6">
	  <li>
	  <p>Learn to define variants and records.</p>
	  <p>The lifeblood data structures of Reason</p>
	  </li>
	  </ol>
	  <p>Variants and records</p>
	  <p>In Reason, you define variants with different constructors/tags. This is a data type unique to Reason. Here I am defining a variant animal that can be either a Cat or Dog . The constructors act more like boolean primitives (True and False) than variables. Pattern matching takes advantage of this. It’s in the next tip.</p>
	  <p>To create records (akin-ish to Javascript objects), I must first define a record of type cat with explicit fields. Only then can I define variables someCat and someDog . However, because Horse is not a constructor of animal, I get a compiler error.</p>
	  <p>Further reading on variants .</p>
	  <p>Further reading on records.</p>
	  <ol start="7">
	  <li>
	  <p>Pattern matching!</p>
	  <p>“All this mention of pattern matching! Someone tell me what the hell it is please!”&#8202;—&#8202;me not along ago</p>
	  </li>
	  </ol>
	  <p>Pattern matching</p>
	  <p>Sorry for the bad syntax highlighting. I couldn’t get Carbon to read the code.</p>
	  <p>Here I define a variable mac and then use a switch statement to return some strings based on the constructor. And that’s it! Try it out for yourself.</p>
	  <p>Pattern matching becomes one of your primary tool for writing logic and data flows in Reason. Within the React system, you will generally be pattern matching to handle your routing and rendering of UI components. If you’re using Reason to solve coding challenges, you’ll also be pattern matching against arrays, lists, and tuples quite often.</p>
	  <p>For a more thorough explanation of pattern matching.</p>
	  <ol start="8">
	  <li>
	  <p>Handle state in ReasonReact with a reducerComponent.</p>
	  <p>A reducerComponent is a familiar but unique addition to the React tool. It’s difficulty to share all the nuances of handling state in a snippet, but let’s try!</p>
	  </li>
	  </ol>
	  <p>A stateful reducer component</p>
	  <p>This is a heavier example. So if you’re just skimming, slow down a bit here! ✋</p>
	  <p>Opinions aside, the Redux style of state management is built right into the API. The basic players are state, action, initialState, reducer, ReasonReact.Update, and self.send.</p>
	  <p>ReasonReact requires declaration of all state types. If I had wanted to control the state of an input, I would definetype state = { textState: string, counter: int} .</p>
	  <p>Next, the variant action is required as well. Much like in Redux where we have action creators, our action constructors define our possible actions.</p>
	  <p>When we want to update state, instead of dispatching, we self.send a constructor with a payload, i.e. Count(5).</p>
	  <p>The reducer method then performs pattern matching on the all possible action tags (aka constructors), and updates state accordingly with ReasonReact.Update().</p>
	  <p>initialState is self explanatory. 😏</p>
	  <p>There’s an entire gamut of component life-cycle methods, reducer APIs, and nuances that we haven’t gone through, but this should be enough to whet your appetite!</p>
	  <ol start="9">
	  <li>
	  <p>Higher order functions in Reason.</p>
	  <p>We’ll only go over a couple basic List methods to see a basic pattern. Assume variant and record types are predefined.</p>
	  </li>
	  </ol>
	  <p>Higher order functions</p>
	  <p>Reason’s standard methods place their primary input (i.e. the array/list) as their last argument. This function signature works conjointly with the compiler’s default behavior to curry all Reason functions. We’ll get into this at a later tip.</p>
	  <p>For more information on the stdlib List methods.</p>
	  <p>For more information on the rest of the stdlib.</p>
	  <ol start="10">
	  <li>
	  <p>Style with an imported stylesheet or inline.</p>
	  <p>No official library or technique for styling has been standardized yet.</p>
	  </li>
	  </ol>
	  <p>Stylesheets and inline styles</p>
	  <p>A short tip. 😄</p>
	  <ol>
	  <li>
	  <p>Import the CSS file or</p>
	  </li>
	  <li>
	  <p>Inline CSS as your “CSS-in-JS” solution.</p>
	  </li>
	  <li>
	  <p>Bucklescript’s Belt module provides us a more Javascript-like standard library.</p>
	  <p>BuckleScript is the compiler for Reason to JS. It also packs in some extra APIs.</p>
	  </li>
	  </ol>
	  <p>Belt methods</p>
	  <p>Belt was created to mirror standard Javascript signatures. Here the primary input listOfAnimals is placed in the first position. Note that the use of Belt overrides the standard Reason List methods due to open .</p>
	  <p>For more information on Belt.</p>
	  <ol start="12">
	  <li>
	  <p>Functions in Reason are automatically curried.</p>
	  <p>Functional composition is fun, but I’ll be honest, I’m still bad at writing them.</p>
	  </li>
	  </ol>
	  <p>Functions are curried automatically in Reason</p>
	  <p>Currying means to break one function’s arguments into a series of unary functions calls. Because Reason applies this mechanism for all functions during compilation time, partial application of functions i.e. listPlus5 is freely possible. By leaving out the second argument in methods like List.map , we’re letting Reason know that we’ll be feeding the final argument into the function later —flexible and composable functions.</p>
	  <p>There are two operators that maximize the use of currying.</p>
	  <ol start="13">
	  <li>
	  <p>The pipe |&gt; and fast pipe -&gt; operators enables function chaining.</p>
	  <p>You either place your primary input as the first argument or the last argument.</p>
	  </li>
	  </ol>
	  <p>Pipe operator |&gt;
	  Pipe operator inserts the argument into the last position</p>
	  <p>Instead of writing List.map(add5, someList) , we can do someList |&gt; List.map(add5) . This gets handy really handy when writing complex business logic. Observe the second example someMappedReasonElements involving React elements. We get a nicely printed chain instead of nested function calls. Compare this to tip #4 where we had to assign variables unnecessarily.</p>
	  <p>Fast pipe operator -&gt;
	  Fast pipe operator inserts the argument into the first position</p>
	  <p>If you’ve developed a taste for Belt methods, then the -&gt; will certainly be your best friend. You will commonly find yourself cleaning up nested functions with -&gt; . I choose not to locally open Belt to avoid overriding Array.of_list with Belt’s Array .</p>
	  <p>/* Without the operators */
	  FunctionA(functionB(functionC()))</p>
	  <p>/* With the pipe operators */
	  functionC() -&gt; functionB -&gt; functionA</p>
	  <p>For more information on the fast pipe operator.</p>
	  <ol start="14">
	  <li>
	  <p>Fetching and handling JSON&#8202;—&#8202;ReasonReact meets world</p>
	  <p>It takes some work to bring the outside world into Reason’s safe type system</p>
	  </li>
	  </ol>
	  <p>NPM install bs-fetch and @glennsl/bs-json .</p>
	  <p>Bs-fetch provides a wrapper around the JS fetch.</p>
	  <p>Bs-json provides utilities to “decode” and bring JSON into Reason’s type system. Neat part is it will raise errors if the type it receives is invalid. 💥
	  So here’s how you fetch and decode JSON in Reason.
	  Fetching with bs-json and bs-fetch in ReasonReact</p>
	  <p>If you’re wracking your brain to understand the Reason syntax, have no fear! In the Decode module, we create two functions post and posts that wraps our JSON and add types to them via bs-json.</p>
	  <p>The Js.Promise snippet demonstrates how you’d fetch a url fakeRealApi and feed the response JSON into a pipeline to be processed. Eventually, within ReasonReact, you would self.send the payload. Really, check out the full code. Parsing code is good for the brain. Bad for the eyes.</p>
	  <p>Here’re more examples for fetch GET and POST .</p>
	  <ol start="15">
	  <li>
	  <p>Router comes included!</p>
	  <p>Many of React’s external libraries or principles are built right into ReasonReact</p>
	  </li>
	  </ol>
	  <p>Snippet of how Routing works&#8202;—&#8202;see gist</p>
	  <p>The code for routing requires much more than a snippet allows for. But let’s break this apart and then you can explore the complete code.</p>
	  <p>Routing is only a matter of handling state inside our Re.React app. Within a component’s didMount life-cycle, ReasonReact.Router.watchUrl passes a URL record to its callback function. With that URL, we can pattern match off url.path to return one Route constructor. Notice that we then self.send the evaluated expression. Off screen, the reducer receives that new Route and updates our internal state accordingly.</p>
	  <p>Now it’s just a matter of rendering our UI based off that state like so:</p>
	  <p>You can see Sketch.sh for a non-trivial routing system.</p>
	  <ol start="16">
	  <li>
	  <p>To use popular npm libraries, search for Reason bindings</p>
	  <p>16/15. Because I care.</p>
	  </li>
	  </ol>
	  <p>Hopefully the library you’re planning to use already has Reason bindings out there. If not, you’ll have to write them yourself. A quick google search of “bs reason <em>library name</em>” should prove enough. You can use Redex&#8202;—&#8202;the Reason package index.</p>
	  <p><a href="https://redex.github.io/">https://redex.github.io/</a>
	  Want more?
	  A non-exhaustive list of resources for more Reason</p>
	  <ul>
	  <li>Axel Rauschmayer’s Exploring ReasonML and functional programming</li>
	  <li>Discord channel</li>
	  <li>ReasonML forums</li>
	  <li>ReasonML docs</li>
	  <li>ReasonReact docs, changelog</li>
	  <li>Twitter</li>
	  <li>Reddit</li>
	  </ul>
	  <p>Thank you for reading! I hope this has been helpful. It could be a bit rocky right now, but where’s the fun in a smooth sail? 🚢</p>
	  <p>Special thanks especially to Dr. Axel Rauschmayer for his amazing book, Exploring ReasonML. It has almost singlehandedly carried me through the deep ends of Reason’s underlying mechanism and principles.</p>
	  <p>Also, thanks go to the open source engineers working on Reason. Their work serves as a tremendous inspiration for myself to create and share. Particular shout outs to these individuals that I may never nor likely meet for teaching me the ropes through their writing, podcasts, tweets, and code: Cheng Lou, Jared Forsyth, and Nik Graf.</p>
	  <p>’Til next time, Dennis</p></div>`,
  },
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
