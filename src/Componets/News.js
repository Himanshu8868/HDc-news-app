import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
        articles = [
          {
              "source": {
                  "id": "news-com-au",
                  "name": "News.com.au"
              },
              "author": null,
              "title": "Cricket legend’s daughter stuns at Everest",
              "description": "Spring racing season is well and truly here, with a bevy of attendees stepping out for TAB Everest Day at Sydney’s Royal Randwick Racecourse.",
              "url": "https://www.news.com.au/lifestyle/spring-racing/tab-everest-day-2024-all-the-fashion-looks-from-royal-randwick-racecourse/news-story/ded683efeea9ebb224f11a451332a991",
              "urlToImage": "https://content.api.news/v3/images/bin/3b74760aab3752798cd9663e94749986",
              "publishedAt": "2024-10-19T02:38:00Z",
              "content": "Spring racing season is well and truly here, with a bevy of attendees stepping out for TAB Everest Day at Sydney’s Royal Randwick Racecourse.\r\nWith a record-breaking $30 million in prize money for th… [+2341 chars]"
          },
          {
              "source": {
                  "id": "espn-cric-info",
                  "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
              "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
              "publishedAt": "2020-04-27T11:41:47Z",
              "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
          },
          {
              "source": {
                  "id": "espn-cric-info",
                  "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
              "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
              "publishedAt": "2020-03-30T15:26:05Z",
              "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
          }
      ]
       constructor() {
        super();
        this.state = {
   articles : this.articles,
   loading : false
        }
       }
       componentDidMount(){
        console.log("compountdidmount latest news")
    //    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d34c14befe564593a9ff507a97d7466e"  ; 
       }
  render() {
    return (
      <div>
         <div className="container my-3 ">
          <h1>Top -headlines</h1>
       
          <div className="row">
          {this.state.articles.map((element) =>{
   return <div className="col  md-4 mb-4" key={element.url} >
  <NewsItem title= {element.title.slice(0 ,20)} description = {element.description.slice(0 , 88)} Imageurl ={element.urlToImage} NewsUrl = {element.url} />      {/* using this.props in Newsitem to use picture */}
  </div>
          })}
          </div>
          </div>
      </div>
    )
  }
}

export default News
