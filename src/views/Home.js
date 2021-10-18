import React from 'react';
import { useState, useEffect } from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
 

export default function Home(props) {

  

  

  return (
    <DeviceOrientation lockOrientation={'portrait'}>
      <Orientation orientation='portrait' alwaysRender={false}>
        <a href="/book">Start Artemisia Gentileschi Book</a>
      </Orientation>

      <Orientation orientation='landscape'  alwaysRender={false}>
        <div>
        <p>For the optimal tour experience,<br/> please turn your phone to portrait mode.</p>
        </div>
      </Orientation>


    </DeviceOrientation>
    );
    



}



