import React from 'react';
import {
  CustomTitle,
  MainStep,
  StepContent,
  StepDescription,
  StepIcon,
  StepImage,
  StepTitle,
  StepWrapper,
  StepsWrapper,
  Wrapper,
} from './styles';
import { Description, SubTitle } from '@/pages/HomePage/styles';
import StepImage1 from '@/assets/images/home-page/create-step-1.png';
import StepImage2 from '@/assets/images/home-page/create-step-2.png';
import StepImage3 from '@/assets/images/home-page/create-step-3.png';

const steps = [
  {
    key: 'step 1',
    title: 'Upload your photos',
    description:
      'Start by uploading 3-15 images. These can be selfies, portraits, or any images that truly represent you. The avatars will be based on the images you upload, so choose carefully!',
    imageSrc: StepImage1,
  },
  {
    key: 'step 2',
    title: 'Choose your styles',
    description:
      'Let your creativity soar in this step. Customize your avatars with an endless range of aesthetics, styles, themes for multiple possible outcomes.',
    imageSrc: StepImage2,
  },
  {
    key: 'step 3',
    title: 'Generate your avatar',
    description: `Now, it's time to sit back and relax as our advanced AI technology works its magic. In just a matter of minutes, your personalized AI avatar will be crafted and promptly delivered straight to your email inbox.`,
    imageSrc: StepImage3,
  },
];

export default function StepsToCreate() {
  return (
    <Wrapper id="how-it-works">
      <SubTitle>HOW IT WORKS</SubTitle>
      <CustomTitle>Steps to create AI avatars</CustomTitle>
      <Description>
        {`Creating AI avatars is a breeze with our user-friendly platform. No technical or design skills needed – just your creativity!`}
      </Description>

      <StepsWrapper>
        {steps.map((step, index) => (
          <StepWrapper key={step.key}>
            <StepContent>
              <StepIcon>
                <p>{index + 1}</p>
              </StepIcon>
              <MainStep>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </MainStep>
            </StepContent>
            <StepImage src={step.imageSrc} alt={step.key} third={index === 2} />
          </StepWrapper>
        ))}
      </StepsWrapper>
    </Wrapper>
  );
}
