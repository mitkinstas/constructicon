import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import { withStyles } from '../../lib/css'
import styles from './styles'

const InputSelect = ({
  label,
  name,
  value,
  options = [],
  placeholder,
  onChange,
  required,
  classNames,
  ...props
}) => {
  const propsBlacklist = ['label', 'styles', 'options']
  const allowedProps = omit(props, propsBlacklist)

  return (
    <div className={classNames.root}>
      <label className={classNames.label}>
        {label}
        <span className={classNames.required}>*</span>
      </label>
      <select
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={classNames.field}
        required
        {...allowedProps}>
        {placeholder && <option>{placeholder}</option>}
        {options.map(({ value, label }, index) => (
          <option value={value} key={index}>{label}</option>
        ))}
      </select>
    </div>
  )
}

InputSelect.propTypes = {
  /**
  * The label for the field
  */
  label: PropTypes.string.isRequired,

  /**
  * The name of the field
  */
  name: PropTypes.string.isRequired,

  /**
  * The current value
  */
  value: PropTypes.string,

  /**
  * The available options i.e. [{ value, label}, { value, label }]
  */
  options: PropTypes.array.isRequired,

  /**
  * The change handler that will receive the updated value as it's only param
  */
  onChange: PropTypes.func.isRequired,

  /**
  * The placeholder for the field
  */
  placeholder: PropTypes.string,

  /**
  * Mark the field as required and displays an asterisk next to the label
  */
  required: PropTypes.bool
}

export default withStyles(styles)(InputSelect)
