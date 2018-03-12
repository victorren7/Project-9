
import React from 'react';
import GetImages from './GetImages';

 //a welcome page to begin with. Shows random pictures and gives some friendly instructions.

  const Home = props =>{

    return (
      <div>
      <div className="home">
        <h2>Welcome To My Animal Gallery</h2>
        <p>Click on any animal button or you can click on on the search button and do your own search</p>
      </div>


      <GetImages subject ="random photos"/>

      </div>
    )
  }


export default Home;
