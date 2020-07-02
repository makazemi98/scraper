import React, { Fragment  , useState} from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';
import './PlaceList.css';
import CardItem from './CardItem';
import { useParams , useHistory } from 'react-router-dom';

const PlaceList = props => {
  const userName = useParams().name;
  const History = useHistory();
  const [mySearch,sertMysearch] = useState(userName)
  if (props.items.msg.people.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Teacher found. Maybe create one?</h2>
        </Card>
      </div>
    );
  }
  const searchHandler = (e)=>{
    sertMysearch(e.target.value)
  }
  const keyPress = (e)=>{
    if(e.keyCode === 13){
     History.push(mySearch)
    }
 }
  return (
    <Fragment> 
    <h2 className="ui center aligned icon header" style={{
      color:'white'
    }}>
      <i className="circular users icon" style={{
        color:'white'
      }}></i>
      نتایج جستوجو
    </h2>
    <div className="ui fluid category search" style={{
      textAlign:'center',
      margin:'30px 0'
    }}>
        <div className="ui icon input">
        <div className="ui compact menu" style={{
          marginRight:'20px'
        }}>
        <a className="item" dideo-checked="true">
          <i className="icon users"></i> نتیجه
          <div className="floating ui teal label">{props.items.msg.peopleCount}</div>
        </a>
      </div>
            <input className="prompt" type="text" placeholder={"جستوجو"} 
              value={mySearch}
              style={{
                textAlign:'right'
              }}
              onKeyDown={keyPress}
              onChange={searchHandler}
            />
            <i className="search icon" ></i>
        </div>
        
        <div className="results"></div>
    </div>

    <ul className="place-list">
      {props.items.msg.people.map(user => {
        return <CardItem
          key={user._source.title}
          name ={user._source.title}
          title={user._source.tagline}
          id={user._id}
          key={user._id}

        />
      })}
    </ul>
    </Fragment>

  );
};

export default PlaceList;
