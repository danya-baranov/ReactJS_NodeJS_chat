import React from 'react';
import { ReadStatus,Avatar } from 'components'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'


import './DialogItem.scss';


const getMessageTime = created_at => {
    const date = Date.parse(created_at)
    if (isToday(date)) {
      return format(date, 'HH:mm');
    } else {
      return format(date, 'dd.MM.yyyy');
    }
  };




const DialogItem = ({ user, created_at, text, unread, isMe }) => (
    <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
        <div className='dialogs__item-avatar'>
            <Avatar user={user}/>
        </div>
        <div className='dialogs__item-info'>
            <div className='dialogs__item-info-top'>
                <b>{user.fullName}</b>
                <span>
                    {getMessageTime(created_at)}

                </span>
            </div>
            <div className='dialogs__item-info-bottom'>
                <p>{text}</p>
                {isMe && <ReadStatus isMe={true} isRead={true} />}
                {unread > 0 && (
                    <div className="dialogs__item-info-bottom-count">
                        {unread > 9 ? "+9" : unread}</div>
                )}
            </div>

        </div>
    </div>
);




export default DialogItem;