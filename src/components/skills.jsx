
import React, { Component } from 'react';
export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src="" className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}

// export default class Skills extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <header>Skills:</header>
//           <div className="row">
//             <div className="col-lg-4 col-md-4 col-sm-4">
//               <h5>Front-end:</h5>
//               <ul>
//                 <li>JavaScript (ES6)</li>
//                 <li>React</li>
//                 <li>Redux</li>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>AJAX</li>
//                 <li>Hooks</li>
//                 <li>Next.js</li>
//                 <li>Semantic-UI</li>
//               </ul>
//             </div>
//             <div className="col-lg-4 col-md-4 col-sm-4">
//               <h5>Back-end:</h5>
//               <ul>
//                 <li>Node.js</li>
//                 <li>Firestore/Firebase</li>
//                 <li>Google Cloud Functions</li>
//                 <li>Express</li>
//                 <li>SQL/PostgreSQL</li>
//               </ul>
//             </div>
//             <div className="col-lg-4 col-md-4 col-sm-4">
//               <h5>Other:</h5>
//               <ul>
//                 <li>Git</li>
//                 <li>AWS</li>
//                 <li>JSON</li>
//                 <li>Agile development</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       )
//     }
//   }