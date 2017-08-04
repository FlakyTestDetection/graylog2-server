import PropTypes from 'prop-types';
import React from 'react';

import DecoratorStyles from '!style!css!components/search/decoratorStyles.css';

const DecoratedMessageFieldMarker = React.createClass({
  propTypes: {
    className: PropTypes.string,
  },
  render() {
    const classNames = [DecoratorStyles.decoratorMarker];
    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return <small className={classNames.join(' ')}>(decorated)</small>;
  },
});

export default DecoratedMessageFieldMarker;
