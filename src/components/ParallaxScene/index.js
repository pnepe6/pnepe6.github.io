import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parallax from 'parallax-js/dist/parallax.min';


const defaultProps = {
  layerList: [
    {
      name: 'layer-stars-start',
      opacity: '0.2',
      dataDepth: '2.00',
      shape: {
        name: 'star-start',
        size: '8px',
        amount: 60,
      }
    },
    {
      name: 'layer-stars-between',
      opacity: '0.6',
      dataDepth: '1',
      shape: {
        name: 'star-between',
        size: '4px',
        amount: 90,
      }
    },
    {
      name: 'layer-stars-end',
      opacity: '1',
      dataDepth: '0.4',
      shape: {
        name: 'star-end',
        size: '2px',
        amount: 150,
      }
    },
  ],
  sceneConfig: {
    name: 'default',
    style: {
      position: 'absolute',
      background: 'linear-gradient(135deg, #265d63 0%, #34B8C8 50%, #c4f8ff 100%)',
    },
  },
  layerConfig: {
    name: 'default',
    style: {
      width: '99vw',
      height: '106vh',
      position: 'relative',
      top: '0',
      left: '0',
    },
  },
  shapeConfig: {
    name: 'default',
    style: {
      background: '#fff',
      backgroundSize: 'cover',
      borderRadius: '100%',
      position: 'relative',
      marginBottom: '5px',
      transform: 'translate3d(-6.3px, 4.2px, 0px)',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden',
      display: 'block',
    },
  }
};

class ParallaxScene extends Component {
  static propTypes = {
    layerList: PropTypes.array,
    sceneConfig: PropTypes.object,
    layerConfig: PropTypes.object,
    shapeConfig: PropTypes.object,
  };

  static defaultProps = defaultProps;

  componentDidMount() {
    new Parallax(this.refs["parallax-scene"]);
  };

  createScene = () => {
    let { sceneConfig } = this.props;
    let layers = this.createLayers();
    return React.createElement('div', {
      ref: 'parallax-scene',
      style: {
        position: sceneConfig.style.position,
        background: sceneConfig.style.background,
      },
      children: layers.map((layer) => layer),
    });
  };

  createLayers = () => {
    let { layerList, layerConfig, shapeConfig } = this.props;
    let list = [];
    layerList.map((layer) => {
      let shapes = this.createShapes(shapeConfig, layer.shape);
      let newLayer = React.createElement('div', {
        ref: layer.name,
        key: layer.name,
        style: {
          width: layerConfig.style.width,
          height: layerConfig.style.height,
          position: layerConfig.style.position,
          top: layerConfig.style.top,
          left: layerConfig.style.left,
          opacity: layer.opacity,
        },
        "data-depth": layer.dataDepth,
        children: shapes.map((shape) => shape),
      });
      list.push(newLayer);
      return '';
    });
    return list;
  };

  createShapes = (config, customConfig) => {
    let shapeList = [];
    for (let i = 0; i < customConfig.amount; i++) {
      let shape = React.createElement('div', {
        key: `customConfig.name-${i}`,
        style: {
          background: config.style.background,
          backgroundSize: config.style.backgroundSize,
          borderRadius: config.style.borderRadius,
          position: config.style.position,
          marginBottom: config.style.marginBottom,
          transform: config.style.transform,
          transformStyle: config.style.transformStyle,
          backfaceVisibility: config.style.backfaceVisibility,
          display: config.style.display,
          width: customConfig.size,
          height: customConfig.size,
          left: this.getRandomInt(100)+ '%',
        },
        className: customConfig.name,
        "data-depth": customConfig.dataDepth,
      });
      shapeList.push(shape);
    }
    return shapeList;
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  render() {
    return this.createScene();
  }
}

export default ParallaxScene;
