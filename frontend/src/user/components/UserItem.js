import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/peoples/${props.name}`}>
          <div className="user-item__image">
            <Avatar image={
              props.image.includes('img') ? props.image : 'https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png'
            } alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
