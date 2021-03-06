import React, { Fragment } from "react";
import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/esm/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => (
  <Fragment>
    {distanceInWordsToNow(date, { addSuffix: true, locale: ruLocale })}
  </Fragment>
);

Time.propTypes = {
  date: PropTypes.number  
};

export default Time;