import React from 'react';
import { FooterContainer,FooterSubText,  
    FooterSubscription, FooterHeading, 
    Form, FormInput,
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinksItems, FooterLinkTitle,FooterLink,
    SocialMedia, Socialogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink
} from './Footer.elements';
import { Button } from '../../globalStyles'
import { FaFacebook, FaTwitter, FaInstagram,  FaYoutube, } from 'react-icons/fa';

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
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>How It works</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destinations</FooterLink>
                            <FooterLink to='/'>Sponsorships</FooterLink>
                        </FooterLinksItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit video</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Infuencer</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Twitter</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Instagram</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterSubscription>
            <SocialMedia>
                <Socialogo>
                    <SocialIcon>
                        ULTRA
                    </SocialIcon>
                    <WebsiteRights>ULTRA 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='' target='_blank' aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        {/* <SocialIconLink href='' target='_blank' aria-label="LinkedIn">
                            <FaLinkedIn />
                        </SocialIconLink> */}
                    </SocialIcons>
                </Socialogo>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;