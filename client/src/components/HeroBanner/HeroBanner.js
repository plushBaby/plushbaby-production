import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TopLine,
    Heading,
    TextWrapper,
    BtnWrapper,
    Subtitle,
    ImgWrap,
    Img
  } from './HeroBannerStyles'

  const HeroBanner = ({
    lightBg , dark, primary, 
    id, imgStart, topLine, headline, description,
    img, alt, buttonLabel, darkText, lightText, darkTop, page
  }) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine darkTop={darkTop}> {topLine} </TopLine>
                  <Heading lightText={lightText}> {headline} </Heading>
                  <Subtitle darkText={darkText}> {description} </Subtitle>
                  <BtnWrapper>
                    <Button to="/newlisting"  component={Link} color="secondary" variant="contained"> Create a New Listing </Button>
                  </BtnWrapper>
                </TextWrapper>
              </Column1>

              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
  )
}

export default HeroBanner;
