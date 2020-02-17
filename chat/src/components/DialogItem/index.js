import React from 'react';
import { Time, ReadStatus } from 'components'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'


import './DialogItem.scss';


const getMessageTime = create_at => {
    if (isToday(create_at)) {
        return format(create_at, "HH:mm")
    }else{
        return format(create_at, "dd.MM.yyyy")
    }

}


const getAvatar = user => {
    if (user.avatar) {
        return (
            <img src={user.avatar}
                alt={`${user.fullName} avatar  `} />)
    } else {
        //generate avatar
    }
}


const DialogItem = ({ user, message, unread }) => (
    <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
        <div className='dialogs__item-avatar'>
            {getAvatar(user)}
        </div>
        <div className='dialogs__item-info'>
            <div className='dialogs__item-info-top'>
                <b>{user.fullName}</b>
                <span>
                    {getMessageTime(message.created_at)}

                </span>
            </div>
            <div className='dialogs__item-info-bottom'>
                <p>{message.text}</p>
                <ReadStatus isMe={true} isRead={true} />
                {unread > 0 && (<div className="dialogs__item-info-bottom-count">{unread > 9 ? "+9" : unread}</div>)}
            </div>

        </div>
    </div>
);




export default DialogItem;