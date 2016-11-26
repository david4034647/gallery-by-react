require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');

function genImageURL (imageDatasArr) {
	for (var i = 0, j = imageDatas.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
	};

	return imageDatasArr;
}

imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <span>Hello World.</span>
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div>

      <section className="stage">
     	<section className="img-sec">

     	</section>
     	<nav className="controller-nav">
     	</nav>
      </section>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
