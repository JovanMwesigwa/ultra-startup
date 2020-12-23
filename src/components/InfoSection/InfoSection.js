import React from 'react';
import { InfoSec, InfoRow,ImgWrapper,Img, TopLine, Subtitle, Heading, InfoColumn, TextWrapper } from './InfoSection.elements';
import { Container, Button } from '../../globalStyles';
import { Link } from'react-router-dom'


function InfoSection({lightBg,primary,start, img, alt, topLine,heading, description,buttonLabel, imgStart, lightSubtitle, lightHeading, lightTopLine}) {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightHeading={lightHeading}>{heading}</Heading>
                                <Subtitle lightSubtitle={lightSubtitle}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary} >{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;