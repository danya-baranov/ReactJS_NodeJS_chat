import React from 'react';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames'
import checkedSvg from '../../assets/img/readed.svg'
import unCheckedSvg from '../../assets/img/noreaded.svg'

import PropTypes from 'prop-types'

import './Message.scss';

const Message = ({ avatar, user, text, date, isMe, isRead, attachments }) => (
    <div className={classNames('message', { 'message--isme': isMe })}>
        <div className='message__content'>
            {isMe && isRead ? (
                <img
                    className="message__icon-readed"
                    src={checkedSvg}
                    alt="checked icon"
                />
            ) : (
                    <img
                        className="message__icon-readed message__icon-readed--no"
                        src={unCheckedSvg}
                        alt="checked icon"
                    />
                )}


            <div className='message__avatar'>
                <img src={avatar} alt={`Avatar ${user.fullName}`}></img>
            </div>
            <div>
                <div className='message__info'>
                    <div className='message__bubble'>
                        <p className='message__text'>{text}</p>
                    </div>
                    <div className='message__attachments'>
                        {attachments &&
                            attachments.map(item => (
                                <div className='message__attachments-item'>
                                    <img src={item.url} alt={item.fileName}></img>
                                </div>
                            ))
                        }
                    </div>
                    {/* <span className='message__date'>{formatDistanceToNow(date ,{addSuffix: true,locele: ruLocale})}</span> */}
                    <span className='message__date'>{date}</span>
                </div>

            </div>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array
}
export default Message;