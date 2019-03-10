import React, { Component } from 'react';
import './heroButton.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ParticleEffectButton from 'react-particle-effect-button'

export default class Button extends Component {
    static propTypes = {
      background: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      buttonStyles: PropTypes.object.isRequired,
      buttonOptions: PropTypes.object.isRequired
    }
  
    state = {
      hidden: false,
      animating: false
    }
  
    render () {
      const {
        background,
        text,
        buttonStyles,
        buttonOptions
      } = this.props
  
      const {
        hidden,
        animating
      } = this.state
  
      return (  
          <ParticleEffectButton
            hidden={hidden}
            onComplete={this._onAnimationComplete}
            {...buttonOptions}
          >
            <NavLink to="/"
              style={{
                background: 'rgba(0,0,0,0.5)',
                borderRadius: '10px',
                color: '#fff',
                padding: '1.5rem 3rem',
                border: '1px solid #000',
                cursor: 'pointer',
                fontSize: '1.2em',
                ...buttonStyles
              }}
              onClick={this._onToggle}
            >
              {text}
            </NavLink>
          </ParticleEffectButton>
      )
    }
  
    _onToggle = () => {
      if (this.state.animating) return
  
      this.setState({
        hidden: !this.state.hidden,
        animating: true
      })
    }
  
    _onAnimationComplete = () => {
      this.setState({
        animating: true
      })
    }
  }