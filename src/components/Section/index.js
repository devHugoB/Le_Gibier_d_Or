import React from 'react';
import {
    SectionContainer,
    SectionHeading,
    SectionItems,
    SectionH1,
    SectionImg,
    SectionP,
    SectionBtn
} from './SectionElements'

const Section = ({heading, title, pathImg, text, button, pathBtn, pathBg, isBg, isImg, isBtn}) => {
    return (
        <SectionContainer pathBg={pathBg} isBg={isBg} isImg={isImg} isBtn={isBtn}>
            <SectionHeading>{heading}</SectionHeading>
            <SectionItems>
                <SectionH1>{title}</SectionH1>
                <SectionImg src={pathImg} isImg={isImg}/>
                <SectionP>{text}</SectionP>
                <SectionBtn to={isBtn ? pathBtn : ''} isBtn={isBtn}>{button}</SectionBtn>
            </SectionItems>
        </SectionContainer>
    )
}

export default Section
