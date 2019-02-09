
import React from 'react';

import '../index.css';



class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        /// PROPS = VIENT DE PARENTS
        ///ONCLICK APPELLE HANDLECLICK , PERMET DE REMONTER DES INFOS
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
export default Square;
