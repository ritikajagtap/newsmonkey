import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Bart Jansen, USA TODAY",
            "title": "Paul Pelosi attack: Violent details emerge of San Francisco assault - USA TODAY",
            "description": "Court records and statements by prosecutors and police have painted a detailed account of the hammer attack on Nancy Pelosi's husband, Paul Pelosi.",
            "url": "https://www.usatoday.com/story/news/politics/2022/11/04/paul-pelosi-attack-details/8258324001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/11/01/USAT/e3ccf314-3f93-4797-95a3-b15c3ff7ab79-Pelosis.jpg?auto=webp&crop=5423,3050,x0,y76&format=pjpg&width=1200",
            "publishedAt": "2022-11-05T16:38:58Z",
            "content": "<ul><li>David DePape allegedly ignored security cameras and 911 call to fight 'tyranny.'</li><li>Paul Pelosi called 911 as DePape watched and police officers arrived within minutes.</li><li>DePape fa… [+11518 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Climate activists block private jet take-offs at Schiphol Airport - Reuters",
            "description": "More than 100 environmental activists wearing white suits stormed into an area where private jets are kept at Amsterdam's Schiphol Airport on Saturday and stopped several aircraft from departing by sitting in front of their wheels.",
            "url": "https://www.reuters.com/business/cop/activists-block-private-jet-traffic-schiphol-airport-2022-11-05/",
            "urlToImage": "https://www.reuters.com/resizer/HEx7-j39RgGVkWnCDOXZrRKFGa0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KP2IUTCWVZKXTBWMA6YVUNGRJQ.jpg",
            "publishedAt": "2022-11-05T15:48:00Z",
            "content": "AMSTERDAM, Nov 5 (Reuters) - More than 100 environmental activists wearing white suits stormed into an area where private jets are kept at Amsterdam's Schiphol Airport on Saturday and stopped several… [+1861 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "Eric Platt",
            "title": "Interest rate rises boost Warren Buffett's Berkshire Hathaway results - Financial Times",
            "description": "US Fed’s monetary policy hits Berkshire’s stock portfolio but nearly triples returns on its cash pile",
            "url": "https://www.ft.com/content/727e05f1-0eec-4c5c-8331-07dfadb5da23",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3753ce3e-a9f0-4abb-8fc6-9428931d5ca0.jpg?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2022-11-05T15:46:20Z",
            "content": "Warren Buffetts Berkshire Hathaway is quickly becoming one of the principal beneficiaries from the sharp increase in interest rates in the US, as its fortress-like balance sheet begins to generate hu… [+4962 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Ashley Capoot",
            "title": "Twitter co-founder Dorsey apologizes for growing the company 'too quickly' in wake of mass layoffs - CNBC",
            "description": "Twitter co-founder Jack Dorsey apologized Saturday for growing the company \"too quickly,\" a day after hundreds of employees were laid off under Elon Musk.",
            "url": "https://www.cnbc.com/2022/11/05/twitter-co-founder-jack-dorsey-speaks-out-after-mass-layoffs.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106981719-16382116412021-11-29t143438z_1944405293_rc2e4r9t4sku_rtrmadp_0_twitter-ceo.jpeg?v=1667662495&w=1920&h=1080",
            "publishedAt": "2022-11-05T15:34:55Z",
            "content": "Twitter co-founder Jack Dorsey apologized Saturday for growing the company \"too quickly,\" a day after the company laid off approximately half of its employees under new owner Elon Musk.\r\n\"Folks at Tw… [+2139 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Review by Brian Lowry",
            "title": "'The Crown' reloads with new leads and old troubles in a more disjointed fifth season - CNN",
            "description": "Questions of propriety about the fifth season of \"The Crown\" premiering two months after Queen Elizabeth II's death are largely eclipsed by other issues, as the Netflix series reloads with new prestige talent in key roles and old troubles, while feeling more …",
            "url": "https://www.cnn.com/2022/11/05/entertainment/the-crown-season-5-review/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221019132938-04-crown-s5.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-05T15:19:00Z",
            "content": "Questions of propriety about the fifth season of The Crown premiering two months after Queen Elizabeth IIs death are largely eclipsed by other issues, as the Netflix series reloads with new prestige … [+3569 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "John Wagner, Eugene Scott",
            "title": "Midterm elections live updates: Obama, Biden to rally for Fetterman; Trump to stump for Oz - The Washington Post",
            "description": "The Nov. 8 general election is around the corner. Follow our live coverage to get the latest news on the 2022 midterm elections.",
            "url": "https://www.washingtonpost.com/politics/2022/11/05/election-2022-live-updates-biden-obama-fetterman-trump-oz/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IOWYD3RO4AI63PGGBB2LE2XCSY.jpg&w=1440",
            "publishedAt": "2022-11-05T14:44:42Z",
            "content": "MADISON, Wis. Sen. Bernie Sanders (I-Vt.) offered a heavy dose of economic populism in an address here Friday night, declaring to a crowd of about 1,000 people that we are in the midst of class warfa… [+445 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Joyann Jeffrey",
            "title": "The Kardashians and Kylie Jenner dress as Kris Jenner to celebrate her birthday - Yahoo News",
            "description": "Kim, Kourtney and Khloé Kardashian and Kylie Jenner celebrated Kris Jenner's 68th birthday by dressing up as the momager through different eras in her life.",
            "url": "https://news.yahoo.com/kardashians-kylie-jenner-dress-kris-143513544.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/7.L5dcRVLnqLYBiWhDy0IA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/nbc_today_217/1c8a0e036ba170f5773cb1ee1b8b66e7",
            "publishedAt": "2022-11-05T14:35:13Z",
            "content": "Kris Jenner's daughters know how to celebrate her birthday the right way!\r\nFor the momager's 67th birthday, Kim, Kourtney and Khloé Kardashian and Kylie Jenner all dressed up as Kris through differen… [+1797 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "David Klepper | AP",
            "title": "Musk's past tweets reveal clues about Twitter's new owner - The Washington Post",
            "description": "What happens when a prolific user of social media buys the platform",
            "url": "https://www.washingtonpost.com/business/musks-past-tweets-reveal-clues-about-twitters-new-owner/2022/11/05/90fe1d02-5d14-11ed-bc40-b5a130f95ee7_story.html",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RKGGA6C5CQI63PCAWWQTB6K644.jpg&w=1440",
            "publishedAt": "2022-11-05T14:23:25Z",
            "content": "Comment on this story\r\nHe may be good with rockets and electric cars, but dont turn to Elon Musk for public health predictions.\r\nProbably close to zero new cases in US too by end of April, the worlds… [+5370 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Iran acknowledges drone shipments to Russia before Ukraine war - Reuters",
            "description": "Iran acknowledged for the first time on Saturday that it had supplied Moscow with drones but said they were sent before the war in Ukraine, where Russia has used drones to target power stations and civilian infrastructure.",
            "url": "https://www.reuters.com/world/iran-acknowledges-drone-shipments-russia-before-ukraine-war-2022-11-05/",
            "urlToImage": "https://www.reuters.com/resizer/_u7bvnCgITA2u27NI8EO-ANnfNk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/USQYJCU2BJKDHFENQ5HZ4EATPY.jpg",
            "publishedAt": "2022-11-05T14:12:00Z",
            "content": "Nov 5 (Reuters) - Iran acknowledged for the first time on Saturday that it had supplied Moscow with drones but said they were sent before the war in Ukraine, where Russia has used drones to target po… [+2388 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "College football picks, schedule: Predictions against the spread, odds for top 25 games in Week 10 - CBS Sports",
            "description": "A closer look at the top games for the 10th week of the 2022 college football season",
            "url": "https://www.cbssports.com/college-football/news/college-football-picks-schedule-predictions-against-the-spread-odds-for-top-25-games-in-week-10/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/22/a944dceb-f862-4355-bf5d-9aa598eb6582/thumbnail/1200x675/2928f030355a92025f7959b361697363/usatsi-bryce-young-alabama.jpg",
            "publishedAt": "2022-11-05T13:50:00Z",
            "content": "With the first College Football Playoff Rankings now released, the table is set for the remainder of the 2022 season. And it starts in earnest across Week 10 with two top-10 matchups involving SEC op… [+5670 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "https://www.theguardian.com/profile/barryglendenning",
            "title": "Man City v Fulham, Leeds v Bournemouth: Premier League and FA Cup clockwatch – live - The Guardian",
            "description": "Clockwatch: City look to take top spot and there are big games at the bottom, plus all the first-round Cup action with Barry Glendenning",
            "url": "https://www.theguardian.com/football/live/2022/nov/05/premier-league-clockwatch-manchester-city-fulham-fa-cup-efl-clockwatch-live",
            "urlToImage": "https://i.guim.co.uk/img/media/5529fbff0049e3a0a9b84957b50cbc7de3735059/140_146_4057_2437/master/4057.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=85d7763e0e68176bbc4471fc079b8378",
            "publishedAt": "2022-11-05T13:38:00Z",
            "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nScottish Premiership: Celtic have scored two at the death against Dundee United and now lead 4-2. Furuhashi and Abada sparing the Ce… [+8538 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "A look at damage after storm, confirmed tornadoes in North Texas - WFAA",
            "description": "As of Saturday morning, 18 tornadoes were confirmed between northern Texas and parts of Oklahoma.",
            "url": "https://www.youtube.com/watch?v=mTQCdjCtC8o",
            "urlToImage": "https://i.ytimg.com/vi/mTQCdjCtC8o/hqdefault.jpg",
            "publishedAt": "2022-11-05T13:19:28Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "North Korea News LIVE | North Korean Ballistic Missile Lands Near South Korea's Coast | English News - CNN-News18",
            "description": "North Korea News LIVE | North Korean Ballistic Missile Lands Near South Korea's Coast | English NewsA North Korean ballistic missile landed less than 60 kilo...",
            "url": "https://www.youtube.com/watch?v=Mc9qkydjwhM",
            "urlToImage": "https://i.ytimg.com/vi/Mc9qkydjwhM/maxresdefault_live.jpg",
            "publishedAt": "2022-11-05T12:50:14Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Stephanie Giang-Paunon",
            "title": "HBO cancels 'Westworld' after four seasons: 'It has been a privilege' - Fox News",
            "description": "HBO made the shocking decision to stop production of \"Westworld\" after airing the series for four seasons. The news comes months after Warner Bros. merged with Discovery.",
            "url": "https://www.foxnews.com/entertainment/hbo-cancels-westworld-four-seasons-privilege",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/west-world.jpg",
            "publishedAt": "2022-11-05T12:40:43Z",
            "content": "After four seasons, HBO has canceled \"Westworld,\" the network announced Friday.\r\nThe news of the sci-fi drama ending comes as a shock to fans, considering the Season 4 finale aired on Aug. 14.\r\nThe d… [+2739 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle",
            "title": "Ukraine updates: Putin urges 'evacuation' from Kherson - DW (English)",
            "description": "Russian President Vladimir Putin said civilians should be \"evacuated\" from the Kherson region. The G7 agreed on the need for a mechanism to help Ukraine repair its critical infrastructure. DW has the latest.",
            "url": "https://www.dw.com/en/ukraine-updates-putin-urges-evacuation-from-kherson/a-63650008",
            "urlToImage": "https://static.dw.com/image/63493223_6.jpg",
            "publishedAt": "2022-11-05T12:19:49Z",
            "content": "Russian President Vladimir Putin said on Friday that civilians in Ukraine's southern Kherson region should be \"evacuated\" from the conflict zone.\r\n\"Now, of course, those who live in Kherson should be… [+7962 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Zachary B. Wolf",
            "title": "What early voting data can and cannot tell us - CNN",
            "description": "Early voting has surged in some of the key states for this year's midterm elections. But Michael McDonald, the University of Florida political scientist known for tracking early voting data, predicts turnout will fall below the highs seen in 2018.",
            "url": "https://www.cnn.com/2022/11/05/politics/early-voting-turnout-midterms-what-matters/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221104164006-early-voting-georgia-110422.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-05T12:05:00Z",
            "content": "A version of this story appeared in CNNs What Matters newsletter. To get it in your inbox, sign up for free here. \r\nWhen Democrats won the House in 2018, they did it with help from a great uptick in … [+11110 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ben Church",
            "title": "World Series game 6 preview: Houston Astros look to clinch title at home - CNN",
            "description": "The Houston Astros will look to capitalize on home advantage as it prepares to face the Philadelphia Phillies in Game 6 of the World Series on Saturday.",
            "url": "https://www.cnn.com/2022/11/05/sport/world-series-game-6-astros-phillies/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221104001109-12-world-series-game-5-2022.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-05T11:30:00Z",
            "content": "The Houston Astros will look to capitalize on home advantage as it prepares to face the Philadelphia Phillies in Game 6 of the World Series on Saturday.\r\nThe Astros take a slender 3-2 lead into the g… [+2152 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Jarrett Bell, USA TODAY",
            "title": "Herschel Walker's ex-Cowboys teammates speak out on his Senate run - USA TODAY",
            "description": "As midterms loom, several former Dallas Cowboys, including Jimmy Johnson, discuss Herschel Walker and share a range of reactions to his Senate run.",
            "url": "https://www.usatoday.com/story/sports/nfl/columnist/bell/2022/11/05/herschel-walker-cowboys-teammates-jimmy-johnson-senate-georgia/8247300001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/11/04/USAT/4ca90b09-8af1-4d14-b3c8-6e29d05b3aec-Herschelw.jpg?auto=webp&crop=5215,2933,x801,y177&format=pjpg&width=1200",
            "publishedAt": "2022-11-05T11:00:19Z",
            "content": "Herschel Walker is locked in a heated race for a U.S. Senate seat, but the football legend is also bound to an essential rule when catching up with former Dallas Cowboys teammate Jim Jeffcoat.\r\n“We’v… [+9896 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Justinweather.com"
            },
            "author": "Justin Berk",
            "title": "Meteor Sighting Friday Night November 4: Video From Baltimore County And Map Where It Tracked - Just In Weather",
            "description": "On Friday November 4, we were greeted to a rare mild November evening while the moon was in conjunction with Jupiter. This provided a great opportunity for many to be outside viewing and spotting a spectacular meteor streak across the sky.  It was reported by…",
            "url": "https://justinweather.com/2022/11/05/meteor-sighting-friday-night-november-4-video-from-baltimore-county-and-map-where-it-tracked/",
            "urlToImage": "https://justinweather.com/wp-content/uploads/2022/11/metoer-baltimore-county-november-4-2022.jpg",
            "publishedAt": "2022-11-05T10:43:57Z",
            "content": "On Friday November 4, we were greeted to a rare mild November evening while the moon was in conjunction with Jupiter. This provided a great opportunity for many to be outside viewing and spotting a s… [+4238 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Will Bedingfield",
            "title": "Age of Empires is 25 years old and fans are shaping the franchise - Ars Technica",
            "description": "WIRED sat down with Xbox CEO Phil Spencer and Worlds's Edge Studio chief Michael Mann to talk about ‘AoE’ and everything real-time strategy.",
            "url": "https://www.wired.com/story/age-of-empires-25-anniversary-console-launch-xbox/",
            "urlToImage": "https://media.wired.com/photos/6360575100e08e244b10a513/191:100/w_1280,c_limit/Age-of-Empires-Is-25-Years-Old.-Fans-Are-Shaping-the-Franchise-Culture.jpg",
            "publishedAt": "2022-11-05T10:31:41Z",
            "content": "Its been 25 years since a small studio in Dallas recast the ancient world through the prism of a real-time strategy game. Age of Empires has echoed Monk wololos about our homes ever since: Parents be… [+2831 chars]"
        }
    ]
    constructor(){
        super();
        console.log("constructor from news");
        this.state={
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount()
    {
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dbb2ef303dce434c87ca8488d40b1e9b"
        let data = await fetch(url);
        let parsedData = await data.json()

        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
            <h2>NEWS-Monkey Top headlines</h2>
            <div className="row">
            { this.state.articles.map((el)=>{
                return(
                    <div className="col-md-4" key={el.url}>
                    <NewsItem  title={el.title} description={el.description} imageUrl={el.urlToImage} newsUrl={el.url}/>
                    </div>
                )
            })}
            </div>
      </div>
    )
  }
}

export default News