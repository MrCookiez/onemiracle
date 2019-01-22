import React from 'react';
import './heroButton.css';

const HeroButton = () => {
    return (
            <div class="grid__item theme-7">
                    <button class="action">
                        <svg class="icon icon--rewind">
                            <use href="#icon-rewind" />
                        </svg>
                    </button>
                <button class="particles-button">Subscribe</button>
            </div>
    );
};

export default HeroButton;