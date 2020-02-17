import React from "react";
import PropTypes from "prop-types";
import readedSvg from "assets/img/readed.svg";
import noReadedSvg from "assets/img/noreaded.svg";

const ReadStatus = ({ isMe, isRead }) =>
  (isMe &&
    (isRead ? (
      <img className="message__icon-read" src={readedSvg} alt="Readed icon" />
    ) : (
      <img
        className="message__icon-read message__icon-read--no"
        src={noReadedSvg}
        alt="No read icon"
      />
    ))) ||
  null;

ReadStatus.propTypes = {
  isMe: PropTypes.bool,
  isRead: PropTypes.bool
};

export default ReadStatus;