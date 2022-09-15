import styled from 'styled-components'

export const InfoContainer = styled.div `
    color: white;
    background: #e6eaff;
    margin-bottom: 50px;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div `
  z-index: 1;
  height: 400px;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: center;
`

export const InfoRow = styled.div `
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 768px) {
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1' 'col1' 'col2' 'col2'`)};
  }
`

export const Column1 = styled.div `
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col1;
`

export const Column2 = styled.div `
  margin--bottom: 15px;
  padding: 0 25px;
  grid-area: col2;
`

export const TextWrapper = styled.div `
  max-width: 520px;
  padding-top: 0;
`


export const TopLine = styled.p `
  color: #020e38;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: bold;
  color: ${({ darkTop}) => (darkTop ? '#020e38' : '#cb00e8')};
`

export const Heading = styled.h1 `
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText}) => (lightText ? 'black' : 'white')};
`

export const Subtitle = styled.p `
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1PX;
  color: ${({ darkText}) => (darkText ? '#181b23' : 'white')};
`

export const BtnWrapper = styled.div `
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div `
  max-width: 520px;
  height: 100%;
`

export const Img = styled.img `
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
