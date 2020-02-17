import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Time, ReadStatus } from 'components'

import './Message.scss';

const Message = ({ avatar, user, text, date, isMe, isRead, attachments, isTyping }) => (
    <div className={classNames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
    })}>
        <div className='message__content'>

            <ReadStatus isMe={isMe} isRead={isRead} />

            <div className='message__avatar'>
                <img src={avatar} alt={`Avatar ${user.fullName}`}></img>
            </div>
            <div>
                <div className='message__info'>
                    {(text || isTyping) && (
                        <div className='message__bubble'>
                            {text && <p className='message__text'>{text}</p>}
                            {isTyping && (
                                <div className="message__typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            )}
                        </div>
                    )}
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
                    {date &&
                        (<span className='message__date'>
                            <Time date={date} />
                        </span>)}
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
    attachments: PropTypes.array,
    isMe: PropTypes.bool,
    isRead: PropTypes.bool,
    isTyping: PropTypes.bool,
}
export default Message;