import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ContentBox  from '../components/ContentBox'
import CompanyInformation from '../components/CompanyInformation'
import Hamburger from '../components/Hamburger'
//import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import About from '../components/About'


export default function Home() {
  return (
    <ReactFullpage
      licenseKey={"YOUR_LICENSE_KEY"}
      scrollOverflow={true}
      //sectionsColor={["white", "blue", "whitesmoke"]}
      //onLeave={this.onLeave.bind(this)}
      //afterLoad={this.afterLoad.bind(this)}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
             <Hero/>
             <Hamburger/>
            </div>

            <div className="section section1">
            <ContentBox/>
            </div>

            <div className="section">
             <About/>
            </div>

            <div className="section section1">
            <CompanyInformation/>
            </div>


              <button onClick={() => fullpageApi.moveTo(1, 0)}>
                Move top
              </button>
            </div>
        );
      }}
    />
  );
}
