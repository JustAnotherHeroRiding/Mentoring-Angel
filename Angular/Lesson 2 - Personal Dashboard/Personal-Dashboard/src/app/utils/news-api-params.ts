/* apiKey
REQUIRED
Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.

country
The 2-letter ISO 3166-1 code of the country you want to get headlines for. 
Possible options: aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza. 
Note: you can't mix this param with the sources param.

category
The category you want to get headlines for. Possible options: businessentertainmentgeneralhealthsciencesportstechnology. 
Note: you can't mix this param with the sources param.

sources
A comma-seperated string of identifiers for the news sources or blogs you want headlines from. 
Use the /top-headlines/sources endpoint to locate these programmatically or look at the sources index. Note: you can't mix this param with the country or category params.

q
Keywords or a phrase to search for.

pageSize
int
The number of results to return per page (request).
 20 is the default, 100 is the maximum.

page
int
Use this to page through the results if the total results found is greater than the page size.
 */

export interface newsArticle {
  source: {
    id: string | null | number;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

const newsParams = {
  COUNTRIES: [
    'ae',
    'ar',
    'at',
    'au',
    'be',
    'bg',
    'br',
    'ca',
    'ch',
    'cn',
    'co',
    'cu',
    'cz',
    'de',
    'eg',
    'fr',
    'gb',
    'gr',
    'hk',
    'hu',
    'id',
    'ie',
    'il',
    'in',
    'it',
    'jp',
    'kr',
    'lt',
    'lv',
    'ma',
    'mx',
    'my',
    'ng',
    'nl',
    'no',
    'nz',
    'ph',
    'pl',
    'pt',
    'ro',
    'rs',
    'ru',
    'sa',
    'se',
    'sg',
    'si',
    'sk',
    'th',
    'tr',
    'tw',
    'ua',
    'us',
    've',
    'za',
  ],

  categories: [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ],
};

export const RealNewsResponseObject: newsArticle[] = [
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Danica Creahan',
    title:
      "How to watch today's Kansas City Chiefs vs. New England Patriots game on Fox - Yahoo Sports",
    description:
      "Here's what you need to know about how to watch the Chiefs at Pats game.",
    url: 'https://sports.yahoo.com/how-to-watch-today-kansas-city-chiefs-new-england-patriots-game-fox-130010183.html',
    urlToImage:
      'https://s.yimg.com/ny/api/res/1.2/Gf8TC6vamrTaAuI27r.zEQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/8d785610-9b8a-11ee-bffc-4577d773318f',
    publishedAt: '2023-12-17T18:31:26Z',
    content:
      "For $76 per month, Hulus live TV bundle (with ads) will get you access to NBC, Fox, CBS and ESPN and access to ESPN+. Plus, for NCAA college football fans, you'll also get ESPNU, Fox, FS1, CBSN, NBC,… [+480 chars]",
  },
  {
    source: {
      id: null,
      name: 'BBC News',
    },
    author: null,
    title: 'Alex Batty: British teen found in France returns to UK - BBC.com',
    description:
      'Alex Batty, who was missing for six years, has returned to the UK, Greater Manchester Police says.',
    url: 'https://www.bbc.com/news/uk-67724917',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/56B3/production/_132059122_df1ad4ae3d0c7c441db7b5cf16ffefc159473b5a0_21_1200_6751200x675.jpg',
    publishedAt: '2023-12-17T18:06:09Z',
    content:
      'A younger Alex Batty, pictured before he went missing\r\nBritish teenager Alex Batty, who was found in France after being missing for six years, has returned to the UK, Greater Manchester Police has sa… [+3782 chars]',
  },
  {
    source: {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English',
    },
    author: 'Al Jazeera',
    title:
      'Starving Palestinians loot aid trucks as desperation mounts in Gaza’s Rafah - Al Jazeera English',
    description:
      'Not enough aid is flowing into the strip, forcing the Palestinians into a ‘survival mode’ amid heavy Israeli attacks.',
    url: 'https://www.aljazeera.com/news/2023/12/17/starving-palestinians-loot-aid-trucks-as-desperation-mounts-in-gazas-rafah',
    urlToImage:
      'https://www.aljazeera.com/wp-content/uploads/2023/12/image-1702831611.jpg?resize=1920%2C1080&quality=80',
    publishedAt: '2023-12-17T17:22:44Z',
    content:
      'The humanitarian crisis in Gaza continues to worsen after more than two months of Israeli bombing and forced displacement of people to the enclaves south.\r\nOn Sunday, hungry and desperate Palestinian… [+3539 chars]',
  },
  {
    source: {
      id: null,
      name: 'CBS Sports',
    },
    author: '',
    title:
      "NFL Week 15 Saturday grades: Lions earn 'A+' for Broncos beatdown, Bengals 'B+' for overtime win vs. Vikings - CBS Sports",
    description:
      'Here are the Week 15 grades for every NFL team that played on Saturday',
    url: 'https://www.cbssports.com/nfl/news/nfl-week-15-saturday-grades-lions-earn-a-for-broncos-beatdown-bengals-b-for-overtime-win-vs-vikings/',
    urlToImage:
      'https://sportshub.cbsistatic.com/i/r/2023/12/16/fd996a00-335a-4754-ae0d-26ab8942d85e/thumbnail/1200x675/71449c4fbcd97a77ad55e77a61daf373/browning-jpeg.jpg',
    publishedAt: '2023-12-17T16:58:00Z',
    content:
      'Welcome to a rare Saturday edition of the Week 15 grades. The NFL was kind enough to give us some Saturday football in the form of a tripleheader consisting of Vikings-Bengals, Steelers-Colts and Bro… [+935 chars]',
  },
  {
    source: {
      id: null,
      name: 'YouTube',
    },
    author: null,
    title:
      'Humanitarian crisis in Gaza deepens as fighting rages | DW News - DW News',
    description:
      'A communications blackout left Palestinians virtually cut off from the outside world in the Gaza Strip. Internet and telephone lines went down, according to ...',
    url: 'https://www.youtube.com/watch?v=DW4lJxRxne4',
    urlToImage: 'https://i.ytimg.com/vi/DW4lJxRxne4/maxresdefault.jpg',
    publishedAt: '2023-12-17T16:35:53Z',
    content: null,
  },
  {
    source: {
      id: 'espn',
      name: 'ESPN',
    },
    author: 'Adam Schefter',
    title: "Eagles' Jalen Hurts downgraded after illness worsens - ESPN",
    description:
      "The Eagles have downgraded Jalen Hurts to questionable for Monday night's game against the Seahawks after the quarterback's sickness worsened overnight.",
    url: 'https://www.espn.com/nfl/story/_/id/39132903/source-eagles-jalen-hurts-downgraded-illness-worsens',
    urlToImage:
      'https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1211%2Fr1264845_1296x729_16%2D9.jpg',
    publishedAt: '2023-12-17T16:26:00Z',
    content:
      "The Philadelphia Eagles have downgraded Jalen Hurts to questionable for Monday night's game against the Seattle Seahawks after the quarterback's sickness worsened overnight, the team announced Sunday… [+1097 chars]",
  },
  {
    source: {
      id: 'financial-times',
      name: 'Financial Times',
    },
    author: null,
    title:
      "Inside the 'Gaza metro': Israel displays Hamas tunnel big enough for a car - Financial Times",
    description:
      'Army shows ‘flagship’ concrete and steel passage built by militants as it faces pressure over Palestinian deaths',
    url: 'https://www.ft.com/content/97fcd9c1-0abe-4307-ab62-d9de149642f3',
    urlToImage: null,
    publishedAt: '2023-12-17T16:25:12Z',
    content:
      'Keep abreast of significant corporate, financial and political developments around the world. Stay informed and spot emerging risks and opportunities with independent global reporting, expert comment… [+30 chars]',
  },
  {
    source: {
      id: null,
      name: 'SciTechDaily',
    },
    author: null,
    title:
      "Glacial Pathfinders: Tracing North America's First Migrants via the Sea Ice Highway - SciTechDaily",
    description:
      'New research suggests some early Americans may have traveled on winter sea ice down the coast from Beringia as long as 24,000 years ago. One of the hottest debates in archeology is how and when humans first arrived in North America. Archaeologists have tradit…',
    url: 'https://scitechdaily.com/glacial-pathfinders-tracing-north-americas-first-migrants-via-the-sea-ice-highway/',
    urlToImage:
      'https://scitechdaily.com/images/People-Walking-on-Ice-Concept-Art.jpg',
    publishedAt: '2023-12-17T16:24:06Z',
    content:
      'New findings suggest early humans arrived in North America earlier than 13,000 years ago, possibly using a “sea ice highway” along the Pacific Coast. This theory, supported by paleoclimate data, chal… [+4677 chars]',
  },
  {
    source: {
      id: null,
      name: 'Variety',
    },
    author: 'Rebecca Rubin',
    title:
      'Timothée Chalamet’s ‘Wonka’ Tops Box Office With $39 Million Debut - Variety',
    description:
      '"Wonka," a fantasy musical starring Timothée Chalamet as the eccentric chocolatier, charmed the box office in its debut.',
    url: 'https://variety.com/2023/film/box-office/box-office-timothee-chalamet-wonka-wins-weekend-1235842643/',
    urlToImage:
      'https://variety.com/wp-content/uploads/2023/12/Screen-Shot-2023-12-12-at-11.13.12-AM.png?w=1000&h=563&crop=1',
    publishedAt: '2023-12-17T16:14:00Z',
    content:
      '“Wonka,” a fantasy musical starring Timothée Chalamet as the eccentric chocolatier, charmed in its box office debut, collecting $39 million over the weekend.\r\nIt’s a sweet start, as long as the $125 … [+3961 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Reuters',
    title:
      'North Korea fires short-range missile, condemns U.S. for raising tensions - Reuters',
    description: null,
    url: 'https://www.reuters.com/world/asia-pacific/north-korea-fires-suspected-ballistic-missile-south-korea-japan-say-2023-12-17/',
    urlToImage: null,
    publishedAt: '2023-12-17T15:56:00Z',
    content: null,
  },
  {
    source: {
      id: 'usa-today',
      name: 'USA Today',
    },
    author: 'Naledi Ushe',
    title:
      "'SNL' host Kate McKinnon brings on Kristen Wiig, Maya Rudolph for ABBA spoof and tampon ad - USA TODAY",
    description:
      '"Saturday Night Live" host Kate McKinnon was joined by her former co-stars Kristen Wiig and Maya Rudolph for an ABBA spoof and musical tampon ad.',
    url: 'https://www.usatoday.com/story/entertainment/tv/2023/12/17/snl-host-kate-mckinnon-kristen-wiig-maya-rudolph-cameos/71950888007/',
    urlToImage:
      'https://www.usatoday.com/gcdn/authoring/authoring-images/2023/12/17/USAT/71951770007-nup-203205-00051.JPG?crop=999,562,x0,y0&width=999&height=562&format=pjpg&auto=webp',
    publishedAt: '2023-12-17T15:34:37Z',
    content:
      '"Saturday Night Live" musical guest Billie Eilish wasn\'t the only one to carry a tune on the show\'s holiday episode.\r\nHost Kate McKinnon called in backup, her former "SNL" co-stars Kristen Wiig and M… [+1837 chars]',
  },
  {
    source: {
      id: null,
      name: '[Removed]',
    },
    author: null,
    title: '[Removed]',
    description: '[Removed]',
    url: 'https://removed.com',
    urlToImage: null,
    publishedAt: '1970-01-01T00:00:00Z',
    content: '[Removed]',
  },
  {
    source: {
      id: null,
      name: 'Page Six',
    },
    author: 'Desiree Murphy',
    title:
      'Demi Lovato engaged to musician Jutes after one year of dating: See her massive ring - Page Six',
    description:
      'The “Sorry” singer showed off her massive engagement ring from the musician while posing for photographers in Los Angeles.',
    url: 'https://pagesix.com/2023/12/17/entertainment/demi-lovato-engaged-to-musician-jutes-after-one-year-of-dating/',
    urlToImage:
      'https://pagesix.com/wp-content/uploads/sites/3/2023/12/73865637.jpg?quality=75&strip=all&w=1024',
    publishedAt: '2023-12-17T15:12:00Z',
    content:
      'Congrats are in order for Demi Lovato!\r\nThe Sorry singer is engaged to musician Jutes after one year of dating, Page Six can confirm.\r\nJutes (real name: Jordan Lutes) proposed to Lovato Saturday in L… [+2774 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Reuters',
    title:
      'France says worker killed by Israeli attack in southern Gaza - Reuters',
    description: null,
    url: 'https://www.reuters.com/world/middle-east/french-foreign-ministry-says-worker-killed-by-an-israeli-attack-rafah-2023-12-17/',
    urlToImage: null,
    publishedAt: '2023-12-17T15:06:45Z',
    content: null,
  },
  {
    source: {
      id: 'axios',
      name: 'Axios',
    },
    author: 'Axios',
    title: 'Top strategist for DeSantis super PAC resigns - Axios',
    description: null,
    url: 'https://www.axios.com/2023/12/17/ron-desantis-super-pac-resignations-gop',
    urlToImage: null,
    publishedAt: '2023-12-17T14:45:41Z',
    content: null,
  },
  {
    source: {
      id: 'associated-press',
      name: 'Associated Press',
    },
    author: 'WAFAA SHURAFA, SAMY MAGDY',
    title:
      'Israel faces new calls for truce after killing of hostages raises alarm about its conduct in Gaza - The Associated Press',
    description:
      "Israel’s government is facing calls for a cease-fire from some of its closest European allies as well as protesters at home. The deadly shooting of three hostages who waved a white flag has added to mounting concerns about Israel's wartime conduct. It could c…",
    url: 'https://apnews.com/article/israel-hamas-war-news-12-17-2023-22e6e6ac2098dbf29c89c1a49980907b',
    urlToImage:
      'https://dims.apnews.com/dims4/default/6454f38/2147483647/strip/true/crop/8250x4641+0+430/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F12%2F11%2F029e7f1b985d8f7434178a8d21cf%2F10fae7acdf4b4c02a20b40bf3dbf315a',
    publishedAt: '2023-12-17T14:24:00Z',
    content:
      'DEIR AL-BALAH, Gaza Strip (AP) Israels government faced calls for a cease-fire from some of its closest European allies and from protesters at home on Sunday after a series of shootings, including of… [+7048 chars]',
  },
  {
    source: {
      id: 'fox-news',
      name: 'Fox News',
    },
    author: 'Dana Blanton',
    title: 'Fox News Poll: Trump’s lead in GOP primary widens - Fox News',
    description:
      'Donald Trump gains momentum in the 2024 GOP presidential primary race, as less then one third of GOP voters back his opposition combined.',
    url: 'https://www.foxnews.com/official-polls/fox-news-poll-trumps-lead-gop-primary-widens',
    urlToImage:
      'https://static.foxnews.com/foxnews.com/content/uploads/2023/10/GettyImages-1705984999.jpg',
    publishedAt: '2023-12-17T14:00:00Z',
    content:
      'Former President Donald Trump keeps gaining ground in the Republican presidential nomination contest, as fewer than one third of GOP primary voters now back all his rivals combined, according to the … [+6671 chars]',
  },
  {
    source: {
      id: null,
      name: 'MMA Fighting',
    },
    author: 'Steven Marrocco',
    title:
      'Colby Covington rates UFC 296 performance, blames Leon Edwards loss on judges’ bias - MMA Fighting',
    description:
      'Colby Covington admitted he had an off night at UFC 296, but he also blamed judges for not awarding him a win over Leon Edwards.',
    url: 'https://www.mmafighting.com/2023/12/17/24004755/colby-covington-rates-ufc-296-performance-blames-leon-edwards-loss-on-judges-bias',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/1Mg50RkP7GazXOK-RfczsToFOEA=/0x156:3459x1967/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25168885/1861535770.jpg',
    publishedAt: '2023-12-17T14:00:00Z',
    content:
      'Colby Covington admitted he had an off night at UFC 296, but he also blamed judges for not awarding him a win over Leon Edwards. \r\nCovington reacted with shock when Edwards was declared the winner of… [+3004 chars]',
  },
  {
    source: {
      id: null,
      name: 'New York Post',
    },
    author: 'FOX Weather',
    title:
      'Geomagnetic storm could cause Northern Lights to dance across United States - New York Post ',
    description:
      'Auroras occur when charged particles from the sun interact with the Earth’s atmosphere, creating what are known as the Northern and Southern lights.',
    url: 'https://nypost.com/2023/12/17/lifestyle/where-to-see-the-northern-lights-this-holiday-season/',
    urlToImage:
      'https://nypost.com/wp-content/uploads/sites/2/2023/12/newspress-collage-aksev9so1-1702820629220.jpg?quality=75&strip=all&1702802674&w=1024',
    publishedAt: '2023-12-17T13:46:00Z',
    content:
      'Days after parts of the world were impacted by the most significant solar flare in six years, NOAAs Space Weather Prediction Center now warns the Earth could be in store for more geomagnetic impacts,… [+2227 chars]',
  },
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Annika Kim Constantino',
    title:
      "The weight loss drug boom isn't over yet — here's what to expect in the year ahead - CNBC",
    description:
      '2024 will be another big year for weight loss drugs, which soared in popularity despite hefty price tags, mixed insurance coverage and unpleasant side effects.',
    url: 'https://www.cnbc.com/2023/12/17/weight-loss-drugs-2024-expectations-for-wegovy-ozempic-zepbound.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/107346441-1702395741776-gettyimages-1807240143-WEIGHT_LOSS_DRUGS.jpeg?v=1702458927&w=1920&h=1080',
    publishedAt: '2023-12-17T13:00:01Z',
    content:
      'Weight loss drugs exploded into the public eye this year, and 2024 will bring more change to the evolving market. \r\nThe drugs skyrocketed in popularity in 2023 as they helped patients shed significan… [+11993 chars]',
  },
];

export interface NewsArticleMock {
  id: number;
  title: string;
  content: string;
  author: string;
  datePublished: Date;
}

export const mockNews: NewsArticleMock[] = [
  {
    id: 1,
    title: 'First News',
    content: 'Content of the first news',
    author: 'Author 1',
    datePublished: new Date(),
  },
  {
    id: 2,
    title: 'Second News',
    content: 'Content of the second news',
    author: 'Author 2',
    datePublished: new Date(),
  },
  {
    id: 3,
    title: 'Third News',
    content: 'Content of the third news',
    author: 'Author 3',
    datePublished: new Date(),
  },
];
