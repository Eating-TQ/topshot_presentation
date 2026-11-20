// Approved presentation copy and complete speaker notes. Keep slide order aligned to Pasted text.txt.
window.slides = [
  {
    number: 1, section: 'INTRODUCTION', kind: 'intro', title: 'Yinting Fan', subtitle: 'Product · Visual · Interaction Designer',
    statement: 'I bring product design, visual storytelling, motion, and interaction together to create engaging digital experiences.',
    selected: ['NBA Top Shot Pack Drop — Dapper Labs', 'The Studio & Studio Space — Athlete Studio'],
    companies:[['Dapper Labs','A blockchain technology company creating consumer-facing digital experiences at the intersection of sports, entertainment, and Web3.','assets/dapper-labs-logo.png'],['Athlete Studio','Through Athlete Studio, the team worked with professional athletes, sports organizations, and partners to create digital products and fan experiences.','assets/athlete-studio-logo.jpg']],
    visual: ['01', 'Introduction Portrait', 'DESIGNER PROFILE'], imagePath:'assets/intro-yinting-sunflowers.jpg', imageAlt:'Yinting Fan smiling among sunflowers under a blue sky.',
    notes: [
      "Hi everyone, thanks for having me today.",
      "I'm Yinting, a designer with a background spanning product design, visual design, interaction, motion, and 3D.",
      "Today, I'll walk through two projects from my experience at Athlete Studio and Dapper Labs.",
      "The first is the NBA Top Shot Pack Drop, where I helped build a repeatable fan engagement experience across physical and digital touchpoints.",
      "The second is The Studio and Studio Space, an internal CMS that evolved into a broader platform for managing athlete content and collaboration."
    ]
  },
  {
    number: 2, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', sectionTitle: 'Case Study 01', kind: 'overview', title: 'NBA Top Shot Pack Drop', subtitle: 'Building a Repeatable Fan Engagement Experience',
    details: [['Client','Dapper Labs'],['Implementation','Athlete Studio'],['Timeline','Late 2022 – Mid 2023'],['My Role','Product Designer, Interaction & Motion Designer, 3D Artist, Art Director'],['Collaborators','Dapper Labs Product & Marketing; Athlete Studio Product, Design, Engineering & Marketing']],
    heading: 'Project Overview', body: 'A live fan engagement experience connecting NBA arena activations with digital collectibles through QR codes and mobile interactions.', visual:['02','NBA Top Shot Pack Drop','CASE STUDY 01'], imagePath:'assets/topshot-overview-1.jpg', imageAlt:'NBA Top Shot campaign image featuring Dapper and NBA branding.',
    notes: [
      'Dapper Labs originally developed the project concept and provided the initial user flow.',
      'Athlete Studio was responsible for implementing the experience.',
      'My role covered nearly every design aspect of the implementation, including the mobile landing page, arena visuals, interaction, motion, 3D pack design, and art direction.',
      'The project eventually expanded beyond one event. We developed a repeatable framework that supported multiple NBA teams and live events.'
    ]
  },
  {
    number: 3, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', kind: 'journey', title: 'Understanding the User Journey', subtitle: 'Product Thinking', imagePath:'assets/slide-03-experience.png', imageAlt:'Original user flow: see the jumbotron, scan the QR code, open the mobile page, claim the collectible, then sign up.',
    heading: 'The experience needed to:', initialFlow:['Jumbotron','QR Code','Mobile','Claim','Sign Up'], initialFlowLabel:'Initial User Flow · Original flow provided by Dapper Labs',
    steps:[{name:'Capture attention',detail:'from a distance',icon:'eye',diagram:'screen'},{name:'Make the QR action',detail:'immediately clear',icon:'scan',diagram:'scan'},{name:'Transition naturally',detail:'from arena to mobile',icon:'phone',diagram:'arenaMobile'},{name:'Keep the claim flow',detail:'simple',icon:'bolt',diagram:'claim'},{name:'Maintain a consistent visual identity',detail:'across both environments',icon:'layers',diagram:'layers'}],
    secondHeading:'What I Identified', bullets:['Users could reach the claim step before creating an account.','A connection interruption could disrupt the claiming experience.','Users might leave without completing registration.','The flow needed to support both a smooth user experience and the goal of acquiring registered users.'],
    notes:[
      'Dapper Labs initially provided a simple user flow: fans would see the promotion on the jumbotron, scan a QR code, open the mobile page, claim the collectible, and then sign up.',
      'When I reviewed the journey, I noticed a potential issue with this sequence.',
      "For example, what if someone reached the claim step, but hadn't created an account yet? If they lost their connection or left the experience, we could lose the opportunity to connect that user to an account.",
      'I felt the account creation step should happen earlier in the journey, before the actual claim.'
    ]
  },
  {
    number: 4, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', kind: 'journey', title: 'Improving the Claim Experience', subtitle: 'Product Decision', imagePath:'assets/slide-04-journey.png', imageAlt:'Revised user journey with jumbotron, QR scan, mobile page, sign-up, and collectible claim, with supporting experience principles.',
    heading: 'The core journey became:', steps:[{name:'See',detail:'Jumbotron',icon:'eye',diagram:'screen'},{name:'Scan',detail:'QR Code',icon:'scan',diagram:'scan'},{name:'Explore',detail:'Mobile · Sign Up',icon:'phone',diagram:'mobilePage'},{name:'Claim',detail:'Collectible',icon:'claim',diagram:'claim'}], caption:'Refined User Flow · Jumbotron → QR Code → Mobile → Sign Up → Claim',
    secondHeading:'Design Considerations', bullets:['Establish an account before claiming a collectible.','Reduce the risk of losing users during the claim process.','Align the experience with the business goal of user acquisition.'],
    calloutLabel:'Decision-making', callout:'Discussed and refined collaboratively with my manager and team leads.',
    notes:[
      'I brought this concern to my manager and several team leads.',
      'We discussed the user experience and the business implications, and agreed to change the sequence to sign up first, then claim.',
      'It was a relatively small change in the flow, but it made the experience more structured and helped align the claiming process with the goal of acquiring registered users.',
      'This was a good example of how I approach product design: not just implementing an existing flow, but questioning whether it actually makes sense for the user and the business.'
    ]
  },
  {
    number: 5, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', kind: 'touchpoints', title: 'From Arena to Mobile', subtitle: 'One Connected Fan Experience',
    touchpoints:[['01','Arena Jumbotron','Visibility and QR code scanning'],['02','In-Venue Posters','Clear messaging and brand consistency'],['03','Mobile Landing Page','Interaction, sign-up and claim experience']],
    images:[['assets/slide-05-mobile-flow.jpg','NBA Top Shot mobile landing page and collectible claim interface with design callouts.'],['assets/slide-05-jumbotron.png','NBA Top Shot QR activation on an arena jumbotron.'],['assets/slide-05-mobile-claim.png','A fan viewing the NBA Top Shot collectible experience on a phone.'],['assets/slide-05-venue-displays.jpg','NBA Top Shot activation displayed across in-venue screens.']],
    notes:[
      "The experience wasn't limited to a mobile page.",
      'I designed the visual experience across multiple physical touchpoints, including the arena jumbotron, in-venue posters, and merchandise store screens.',
      'Each touchpoint had a different context. The jumbotron needed to communicate quickly from a distance, posters needed clear messaging, and the mobile page needed to guide users through the actual experience.',
      'I treated all of these as parts of one connected journey rather than separate marketing assets.'
    ]
  },
  {
    number: 6, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', kind: 'modules', title: 'Building a Reusable Landing Page System', subtitle: 'System Thinking',
    modules:[
      {number:'01',title:'Hero Section',items:['Athlete silhouette photography','Athlete quote','Team-specific branding','Secondary motion']},
      {number:'02',title:'Pack Opening Section',items:['3D Pack visual','Rotation animation','Click interaction and pop feedback','Open Your Pack CTA']}
    ],
    groups:[
      {title:'Reusable Figma Components',items:['Hero modules','Pack modules','Buttons and CTAs','Component variants and states','Responsive behaviors']},
      {title:'Configurable Elements',items:['Athlete photography and quotes','Team colors and typography','3D Pack assets','Motion assets']}
    ],
    images:[['assets/slide-06-main-page.png','Pack Drop experience overview showing Dapper Wallet login, mobile landing page, pack opening, and item selection.'],['assets/slide-06-micah-hero.png','Micah Parsons hero page design for a personal studio pack drop.'],['assets/slide-06-chase-hero.png','Chase Claypool hero page design for a personal studio pack drop.'],['assets/slide-06-identify-items.png','Pack opening item identification screen.'],['assets/slide-06-transfer-items.png','Pack opening item transfer screen.']],
    videoPath:'assets/pack-opening-chase.mp4',
    demoLink:'https://testing.million.studio/?claim=0x23989f827939874239934&section=pack',
    visual:['06','Landing Page Modules','HERO + PACK OPENING'],
    notes:[
      'After the initial implementation, we needed to support more NBA teams and events without rebuilding the entire experience every time.',
      'I structured the landing page around two main modules: the hero section and the pack opening section.',
      'I built reusable Figma components with variants, states, and responsive behaviors.',
      'Most of the time, adapting the page for a new event simply meant replacing the content, photography, colors, typography, and 3D assets while keeping the core structure and interactions consistent.',
      'This helped us maintain a consistent experience while supporting different team identities.'
    ]
  },
  {
    number: 7, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', kind: 'groups', title: 'Simplifying 3D Production Through Templates', subtitle: '3D Workflow & Scalability',
    groups:[
      {title:'Reusable Base Model',items:['Shared pack geometry and structure','Replaceable athlete silhouettes and logos','Editable text and color nodes']},
      {title:'Material & Rendering Standards',items:['General and special edition material presets','Separate lighting specifications for static and animated outputs','Documented asset and file organization']}
    ],
    media:[
      {id:1,type:'video',src:'assets/slide-07-pittsburgh-pack.mp4',alt:'Pittsburgh Steelers pack template animation.'},
      {id:2,type:'video',src:'assets/slide-07-all-star-backboard.mp4',alt:'NBA All-Star backboard animation.'},
      {id:3,type:'video',src:'assets/slide-07-trailblazers-backboard.mp4',alt:'Portland Trail Blazers backboard animation.'},
      {id:4,type:'image',src:'assets/slide-07-blender-material.png',alt:'Blender material node setup for the reusable athlete signature material.'},
      {id:5,type:'image',src:'assets/slide-07-chase-claypool-pack.png',alt:'Chase Claypool signature pack 3D render.'},
      {id:6,type:'image',src:'assets/slide-07-steelers-50-years.jpg',alt:'Steelers 50 years collectible render.'}
    ],
    mediaLeft:[4,6], mediaRight:[1,5,3,2],
    notes:[
      'I also established a reusable 3D production workflow in Blender.',
      'Instead of rebuilding the entire model for every team, I designed the template so that athlete silhouettes and logos could be replaced with black-and-white JPEG assets.',
      'The designer could update the assets folder, adjust text and colors through the material nodes, and generate a new team-specific pack.',
      'I also documented different material treatments for general and special editions, along with separate lighting standards for static and animated outputs.',
      'This simplified the process considerably and made the assets easier for other designers to reuse.'
    ]
  },
  {
    number: 8, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', kind: 'evolution', title: 'Designing for Repeatability, Not Dependency', subtitle: 'Documentation & Art Direction',
    heading:'My Responsibilities', bullets:['Documented reusable templates and asset structures.','Established 3D material and lighting standards.','Created step-by-step workflow documentation.','Onboarded designers and interns into the production process.','Reviewed output and maintained visual consistency.'],
    stages:[['Initial Production','I designed and created the assets'],['Template & Documentation','Reusable assets, rules and handoff process'],['Art Direction & Quality Control','Other designers could independently produce assets']],
    media:[
      {type:'video',src:'assets/slide-08-pack-drop-page-1.mp4',alt:'Pack Drop Page prototype, first view.'},
      {type:'video',src:'assets/slide-08-pack-drop-page-2.mp4',alt:'Pack Drop Page prototype, second view.'},
      {type:'video',src:'assets/slide-08-griffin-brothers-chain.mp4',alt:'Griffin Brothers 3D chain NFT animation.'},
      {type:'video',src:'assets/slide-08-minnesota-vikings-chain.mp4',alt:'Minnesota Vikings logo chain NFT animation.'}
    ],
    visual:['08','Documentation + Art Direction','REPEATABLE WORKFLOW'],
    notes:[
      'Once the templates and documentation were established, my role shifted from producing every asset myself to providing art direction and quality control.',
      'When new designers or interns joined a project, I would walk them through the existing work, share the guidelines and documentation, and help them understand how to use the templates.',
      'They could then continue production independently and reach out to me through Slack if they had questions.',
      'This made the workflow less dependent on one person and helped maintain consistency across different drops.'
    ]
  },
  {
    number: 9, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', kind: 'tradeoff', title: 'Balancing Visual Quality with Web Performance', subtitle: 'Engineering Collaboration',
    groups:[
      {title:'Design Exploration',items:['Figma interaction prototypes','After Effects motion exploration','Blender 3D assets']},
      {title:'Technical Constraint',items:['Real-time 3D rotation was not feasible within the original web implementation.','GIF became the practical alternative.','File size and visual clarity needed to be balanced.']},
      {title:'My Solution',items:['Defined GIF export specifications.','Standardized dimensions, frame rate, duration and file size.','Documented export requirements for consistent implementation.']}
    ],
    media:[
      {type:'video',src:'assets/slide-09-pack-drop-page-1.mp4',alt:'Pack Drop Page prototype, first view.'},
      {type:'video',src:'assets/slide-09-pack-drop-page-2.mp4',alt:'Pack Drop Page prototype, second view.'},
      {type:'image',src:'assets/slide-09-blender-material.png',alt:'Blender material node setup for the 3D pack.'},
      {type:'image',src:'assets/slide-09-aj-dillon-common-pack.png',alt:'AJ Dillon Common Pack 3D render.'}
    ],
    visual:['09','GIF Quality + File Size','VISUAL PERFORMANCE TRADEOFF'],
    notes:[
      'One of the biggest technical tradeoffs was the rotating 3D pack.',
      'I initially explored the experience through Figma prototypes, After Effects animations, and Blender renders.',
      "However, the front-end implementation couldn't support the original real-time 3D interaction within the project's constraints.",
      'We decided to use GIFs as a practical alternative.',
      'I then established export specifications covering dimensions, frame rate, duration, and file size. The goal was to preserve visual clarity without making the assets too heavy and negatively affecting page loading.',
      'Looking back, with tools like Rive, I would explore more interactive and lightweight implementations. I would also involve engineering earlier to validate technical feasibility.'
    ]
  },
  {
    number: 10, section: 'CASE STUDY 01 · NBA TOP SHOT PACK DROP', kind: 'results', title: 'From One Pack Drop to a Repeatable Experience', subtitle: 'Business Impact & Results',
    metricTitle:'NBA TOP SHOT IN-ARENA', metric:'509', metricLabel:'Sign-ups on January 26, 2023', source:'Source: Dapper Labs campaign performance data',
    events:['NBA All-Star','NBA Paris','Zack & Cade','Portland Trail Blazers','Sacramento Kings'],
    impact:['Reusable landing page components and templates','Standardized 3D production workflows','Documented asset and export specifications','Enabled independent production by other designers and interns'],
    media:[
      {type:'image',src:'assets/slide-10-signups-chart.png',alt:'Signups by client name chart highlighting 509 NBA Top Shot In-Arena sign-ups.'},
      {type:'image',src:'assets/slide-10-trail-blazers-article.png',alt:'Trail Blazers announcement for the in-arena digital collectible.'},
      {type:'image',src:'assets/slide-10-paris-arena.png',alt:'NBA Paris arena jumbotron promoting the digital collectible.'},
      {type:'image',src:'assets/slide-10-topshot-tweet.png',alt:'NBA Top Shot social post about the All-Star collectible.'},
      {type:'image',src:'assets/slide-10-community-quotes.png',alt:'Community responses to the in-arena digital collectible.'}
    ],
    visual:['10','NBA Top Shot In-Arena','509 SIGN-UPS · JANUARY 26, 2023'],
    notes:[
      'The project was implemented across several NBA events, including NBA All-Star, NBA Paris featuring Zack and Cade, Portland Trail Blazers, and Sacramento Kings.',
      'We also received campaign performance data from the Dapper Labs team. For the NBA Top Shot In-Arena campaign, the data showed 509 sign-ups on January 26, 2023.',
      'Beyond that campaign result, one of the biggest impacts of my work was establishing a reusable experience and production system.',
      'We could adapt the same landing page structure, components, and 3D workflow for different teams and events, while other designers and interns could continue producing assets independently.',
      'It turned what could have been a series of one-off campaigns into a repeatable design and production framework.'
    ]
  },
  {
    number: 11, section: 'CASE STUDY 02 · THE STUDIO & STUDIO SPACE', sectionTitle:'Case Study 02', kind:'overview', title:'The Studio', subtitle:'Evolving an Internal CMS into a Collaborative Platform',
    details:[['Product','The Studio CMS'],['Company','Athlete Studio'],['Timeline','2020–2025'],['My Role','Product Designer & Visual Designer'],['Responsibilities','UI evolution, UX refinement, branding, design system, Studio Space, motion']],
    heading:'Product Overview', body:'An internal CMS for managing athlete websites, content, products, and related workflows.', visual:['11','The Studio CMS','CASE STUDY 02'], videoPath:'assets/slide-11-studio-close-cover.mp4', videoAlt:'The Studio closing cover animation.',
    notes:[
      "The Studio was Athlete Studio's internal CMS.",
      'It was used to manage athlete websites, content, posts, contracts, giveaways, and other athlete-related services.',
      'I worked on the product across several years, primarily focusing on UI evolution, branding, and design systems, with some UX refinement and new feature design.',
      'One of the biggest additions was Studio Space, which expanded the platform to support collaboration between athletes and internal teams.'
    ]
  },
  {
    number: 12, section:'CASE STUDY 02 · THE STUDIO & STUDIO SPACE', kind:'groups', title:'Evolving the CMS Experience', subtitle:'Building the Visual System',
    groups:[
      {title:'Starting Point',items:['Existing CMS with basic logo, colors and typography.','Original visual language relied on dark blue, black and green.']},
      {title:'My Contributions',items:["Established the product's visual guidelines.",'Updated the overall color system.','Redesigned navigation and dashboard UI.','Refined tables and content layouts.','Built consistent components and interface patterns.','Refined the content editor experience.']}
    ], mediaLayout:'vertical', media:[
      {type:'image',src:'assets/slide-12-cms-overview.png',alt:'The Studio CMS client dashboard overview.'},
      {type:'image',src:'assets/slide-12-post-management.png',alt:'The Studio post management screen.'},
      {type:'image',src:'assets/slide-12-post-editor.png',alt:'The Studio post editor screen.'},
      {type:'image',src:'assets/slide-12-studio-space.png',alt:'The Studio Space interface and product overview.'}
    ], visual:['12','CMS Before + After','ORIGINAL UI / REDESIGNED UI'],
    notes:[
      'When I first started working on the CMS, the product already existed, but the visual system was fairly limited. We mainly had a logo, basic colors, and typography.',
      'I developed the broader visual guidelines and applied them across the product.',
      'This included updating the navigation, dashboard, tables, and other key interface elements, creating a more consistent experience.',
      'I also worked on the content editor. It was one of the more complex areas because of the amount of information and content management involved, so I helped organize and refine the interface.'
    ]
  },
  {
    number: 13, section:'CASE STUDY 02 · THE STUDIO & STUDIO SPACE', kind:'studio-space', title:'Studio Space: From Standalone App to Integrated Feature', subtitle:'Product Architecture & UX',
    heading:'The Opportunity', intro:'Create a centralized system for managing:', opportunity:['Athlete websites','Products and services','Content and design requests','Feedback and collaboration'],
    workflow:['Athlete','Client Team','Design Team','Product Team','Engineering Team','Marketing Team'],
    evolution:['Initially explored as a standalone mobile app.','Later integrated into The Studio CMS.','Core functionality was retained, while the entire interface was redesigned for web.'],
    media:[
      {type:'image',src:'assets/slide-13-studio-space-mosaic.png',alt:'Studio Space and Top Shot campaign screens.'},
      {type:'image',src:'assets/slide-13-teams.png',alt:'Cross-functional teams and roles.'},
      {type:'image',src:'assets/slide-13-workflow.png',alt:'Studio Space project workflow diagram.'},
      {type:'image',src:'assets/slide-13-information-architecture.png',alt:'Information architecture and content structure diagram.'},
      {type:'image',src:'assets/slide-13-system-map.png',alt:'Studio Space system map.'},
      {type:'image',src:'assets/slide-13-cms-cover.png',alt:'The Athlete CMS interface presentation.'}
    ], visual:['13','Studio Space App UX','MOBILE CONCEPT → WEB CMS'],
    notes:[
      'As the business expanded, a single athlete request could involve multiple teams, from client services and design to product, engineering, and marketing.',
      'Managing these interactions through disconnected processes became increasingly difficult.',
      'The goal of Studio Space was to create a centralized system where teams could manage athlete websites, products, content, design requests, and feedback in one place.',
      'Initially, we explored Studio Space as a standalone mobile app. I worked on the early UX, user flows, UI, and motion.',
      'Later, as Athlete Studio transitioned out of Dapper Labs while maintaining a collaboration relationship, we changed the product direction and integrated Studio Space into The Studio CMS.',
      'Since The Studio was a web-based product, we redesigned the entire experience for desktop and web rather than simply scaling up the mobile interface. We retained the core functionality and selected motion elements, but reworked the layouts and interactions to fit the existing CMS.'
    ]
  },
  {
    number: 14, section:'CASE STUDY 02 · THE STUDIO & STUDIO SPACE', kind:'groups', title:'Establishing a New Product Identity', subtitle:'Rebranding & Product Launch',
    groups:[
      {title:'The Studio Rebrand',items:['Logo design and visual identity','Color and typography system','Logo animation and 3D applications','CMS UI adaptation']},
      {title:'Studio Space',items:['Feature UI and interaction design','Motion graphics for feature cards','Landing page design','Promotional video']}
    ], mediaLayout:'vertical', promoVideoUrl:'https://player.vimeo.com/video/1155216880?h=75d5832cd2', media:[
      {type:'image',src:'assets/slide-14-cms-overview.png',alt:'The Studio CMS and Studio Space product overview.'},
      {type:'image',src:'assets/slide-14-landing-page.png',alt:'The Studio landing page design.'},
      {type:'video',src:'assets/slide-14-landing-content.mp4',alt:'The Studio landing page content video.'}
    ], visual:['14','The Studio + Studio Space','REBRAND + FEATURE LAUNCH'],
    notes:[
      'As the company and product evolved, we needed a new visual identity that incorporated the pink and purple colors associated with Dapper Labs.',
      "The team had already explored multiple logo directions, but they weren't quite meeting the product vision.",
      'I reviewed the previous explorations, consolidated the feedback, and developed the final logo direction. I also created the logo animation and 3D applications.',
      'For Studio Space, I designed the feature cards and created animated visuals to introduce different services and guide users through the available features.',
      'I also designed the landing page and promotional video to introduce the product to athletes and communicate its value.'
    ]
  },
  {
    number: 15, section:'ENDING', kind:'closing', title:'Building Products That Scale and Evolve', subtitle:'Impact & Closing',
    groups:[
      {title:'NBA Top Shot Pack Drop',items:['Improved the user journey.','Established reusable landing page and 3D templates.','Supported multiple NBA events.','Standardized workflows for team-wide production.','Supported an in-arena campaign that recorded 509 sign-ups on January 26, 2023.']},
      {title:'The Studio / Studio Space',items:['Evolved an existing CMS visual system.','Designed Studio Space from early app concept to integrated web feature.','Established a new product identity.','Delivered the feature, landing page, and promotional video.']}
    ], closing:'I enjoy working at the intersection of product thinking, visual design, interaction, and motion — creating experiences that are not only engaging, but also scalable, maintainable, and meaningful to the business.',
    notes:[
      'These two projects reflect different sides of my product design experience.',
      'With NBA Top Shot, I focused on creating a connected experience and building reusable systems that could scale across events.',
      'With The Studio, I worked on the long-term evolution of an existing product and helped bring a new collaboration feature from an early app concept into the platform.',
      'Across both projects, I enjoy combining product thinking, visual craft, interaction, and motion to create experiences that work for both users and the teams building them.',
      "Thank you. I'm happy to dive deeper into any part of the projects."
    ]
  }
];
