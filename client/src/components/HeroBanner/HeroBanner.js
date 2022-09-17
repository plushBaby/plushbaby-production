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
    imageBg, id, imgStart, topLine, headline, description,
    img, alt, buttonLabel, darkTop, page
  }) => {
    
  return (
    <>
        <InfoContainer id={id} style={{backgroundImage: `url(${imageBg})`}}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine darkTop={darkTop}> {topLine} </TopLine>
                  <Heading > {headline} </Heading>
                  <Subtitle > {description} </Subtitle>
                  <BtnWrapper>
                    <Button to={page} component={Link} color="secondary" variant="contained"> {buttonLabel} </Button>
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
