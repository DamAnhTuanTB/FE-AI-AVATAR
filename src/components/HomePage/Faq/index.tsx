import { Title } from '@/pages/HomePage/styles';
import { Collapse } from 'antd';
import {
  AnyQuestion,
  ContactMail,
  CustomCollapsePanel,
  ExpandIconWrapper,
  QuestionsWrapper,
  TitleWrapper,
  Wrapper,
} from './styles';
import MinusIcon from '@/components/Icons/MinusIcon';
import PlusIcon from '@/components/Icons/PlusIcon';
import { useState } from 'react';

export default function Faq() {
  const [activeKey, setActiveKey] = useState<any>(['1']);

  const questions = [
    {
      key: '1',
      title: 'Is Avatarist suitable for all skill levels?',
      content: `Absolutely! Our user-friendly interface makes avatar creation a breeze, whether you're a tech wizard or a complete novice.`,
    },
    {
      key: '2',
      title: 'Can I use my avatars on multiple platforms?',
      content: `Absolutely! Your avatars are designed to shine on social media, gaming channels, professional platforms, and beyond.`,
    },
    {
      key: '3',
      title: 'How long does it take to create an avatar?',
      content: `After you've crafted your avatar, we'll weave its magic and send it straight to your inbox within 15-30 minutes.`,
    },
    {
      key: '4',
      title: 'How will I receive my avatar after creation?',
      content: `Absolutely. Your privacy is our priority. Your data remains secure and never leaves our realm.`,
    },
  ];

  return (
    <Wrapper id="faq">
      <TitleWrapper>
        <Title>FAQs</Title>
        <AnyQuestion>
          Have more questions? <br />
          Email us at
          <ContactMail href={'mailto:hello@avatarist.ai'}>
            hello@avatarist.ai
          </ContactMail>
        </AnyQuestion>
      </TitleWrapper>
      <QuestionsWrapper>
        <Collapse
          activeKey={[...activeKey]}
          ghost
          expandIconPosition={'end'}
          expandIcon={({ isActive }) => {
            if (isActive)
              return (
                <ExpandIconWrapper>
                  <MinusIcon />
                </ExpandIconWrapper>
              );

            return (
              <ExpandIconWrapper>
                <PlusIcon />
              </ExpandIconWrapper>
            );
          }}
          onChange={(key) => {
            if (key.length > 1) {
              setActiveKey(key.slice(-1));
            } else {
              setActiveKey(key);
            }
          }}
        >
          {questions.map((question, index) => (
            <CustomCollapsePanel
              header={question.title}
              key={question.key}
              first={index === 0}
            >
              <p>{question.content}</p>
            </CustomCollapsePanel>
          ))}
        </Collapse>
      </QuestionsWrapper>
    </Wrapper>
  );
}
