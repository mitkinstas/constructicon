import { Component, PropTypes } from 'react'
import * as defaultTraits from '../../lib/traits'

/**
* Takes the default traits, and merges in any custom traits for your project
*/
class TraitsProvider extends Component {
  getChildContext () {
    const providedTraits = this.props.traits || {}

    const mergedTraits = Object.keys(defaultTraits).reduce((acc, key) => {
      // if trait is an object, merge it
      // otherwise overwrite it if set
      const isTraitAnObject = typeof providedTraits[key] === 'object'
      const combinedTrait = isTraitAnObject ? {
        ...defaultTraits[key],
        ...providedTraits[key]
      } : providedTraits[key] || defaultTraits[key]

      // add trait to our merged traits object
      return {
        ...acc,
        [key]: combinedTrait
      }
    }, {})

    return {
      traits: mergedTraits
    }
  }

  render () {
    return this.props.children
  }
}

TraitsProvider.propTypes = {
  /**
  * The children who will be provided these traits
  */
  children: PropTypes.any.isRequired,

  /**
  * The traits to be added - colors, fonts, treatments, radiuses, shadows etc.
  */
  traits: PropTypes.object
}

TraitsProvider.defaultProps = {
  traits: {}
}

TraitsProvider.childContextTypes = {
  traits: PropTypes.object,
  defaults: PropTypes.object
}

export default TraitsProvider
