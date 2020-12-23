import React from 'react';
import { FooterContainer,FooterSubText,  FooterSubscription, FooterHeading,} from './Footer.elements';

function Footer() {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterHeading>
                    Join our exclusive membership to recieve exclusive news and offers.
                </FooterHeading>
                <FooterSubText>
                    You can unsubscribe anytime you want.
                </FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer;