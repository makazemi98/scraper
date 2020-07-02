import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const CardItem = (props) => {
    return (
        <Fragment>

        <div className="ui cards rtl">
            <div className="card" style={{
                width:'100%'
            }}>
            <div className="content" style={{
                textAlign:'right'
            }}>
                <img className="right floated mini ui image" src="https://semantic-ui.com//images/avatar/large/elliot.jpg"/>
                <div className="header">
                {props.name}
                </div>
                <div className="meta" style={{
                    fontSize:'0.8em'
                }}>
                {props.title}
                </div>
            </div>
            <div className="extra content">
            <Link to={`/Professor/${props.id}`}  className="ui inverted green button">مشاهده</Link>
                <div className="ui one buttons">
                </div>
            </div>
            </div>
            </div>
        </Fragment>
    )
}

export default CardItem
