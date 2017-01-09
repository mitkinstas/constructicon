import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'

const RichText = ({
  children,
  tag: Tag,
  classNames
}) => (
  <Tag className={classNames.root}>
    {
      typeof children === 'string' ?
        <span dangerouslySetInnerHTML={{ __html: children }} /> :
        children
    }
  </Tag>
)

RichText.propTypes = {
  /**
  * The html to be structured
  */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,

  /**
  * The tag to be used for the containing element
  */
  tag: PropTypes.string
}

RichText.defaultProps = {
  tag: 'div'
}

export default withStyles(styles)(RichText)