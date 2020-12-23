import React from 'react';
import { FooterContainer,FooterSubText,  FooterSubscription, FooterHeading, Form, FormInput} from './Footer.elements';
import { Button } from '../../globalStyles'

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
                <Form>
                    <FormInput name='email' type='email' placeholder='your email' />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer;