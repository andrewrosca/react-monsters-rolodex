// Functional Component
import "./card-list.styles.css";

import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;

// Class Component
// import { Component } from "react";
// import './card-list.styles.css';

// import Card from '../card/card.component';

// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;

//         return (
//         <div className='card-list'>
//            { monsters.map((monster) => {

//             return (
//             <Card monster={monster} />
//            )})}
//         </div>
//         )
//     }
// }

// export default CardList;
