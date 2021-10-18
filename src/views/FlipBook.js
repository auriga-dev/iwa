import React from 'react';
import { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
 

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}



export default function FlipBook(props) {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const Page = React.forwardRef((props, ref) => {

    return (
        <div ref={ref}>
          <div className="demoPage">
            <div>
              <div style={{ backgroundImage: 'url(' + props.imgSrc + ')'}} className="pageBackground"></div>
               
               <h1>{props.title}</h1>
            </div>
          </div>
        </div>
    );
  });


  

  return (
    <DeviceOrientation lockOrientation={'landscape'}>
		<Orientation orientation='landscape' alwaysRender={false}>
			<div className="flipBookContainer">
			    <HTMLFlipBook width={windowDimensions.width/2} height={windowDimensions.height} usePortrait = {false}>
			        <Page title="Madonna and Child" imgSrc="./img/page4.jpg"/>
			        <Page title="Judith and Her Maidservant with the Head of Holofernes" imgSrc="./img/page1.jpg"/>
			        <Page title="Mary Magdalene in Ecstasy" imgSrc="./img/page2.jpg"/>
			        <Page title="Lucretia" imgSrc="./img/page3.jpg"/>
			        
			      
			      </HTMLFlipBook>
			</div>
		</Orientation>


		<Orientation orientation='portrait'  alwaysRender={false}>
			<div>
			<p>For the optimal tour experience,<br/> please turn your phone to landscape mode.</p>
			</div>
		</Orientation>
    </DeviceOrientation>
    );
    



}
