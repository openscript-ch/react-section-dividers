import { css } from '@emotion/react';
import { Fragment } from 'react';
import { AslantDivider } from '../src';
import { SectionDummy } from './components/SectionDummy';

export default {
  title: 'Aslant/Divider',
  component: AslantDivider,
  parameters: {
    docs: {
      page: null,
    },
  },
  argTypes: {
    angle: {
      defaultValue: 20,
      control: { type: 'range', min: -45, max: 45 },
    },
    height: {
      defaultValue: 40,
      control: { type: 'number', min: 1 },
    },
    primaryColor: {
      defaultValue: '#000',
      control: { type: 'color' },
    },
    secondaryColor: {
      defaultValue: '#FFF',
      control: { type: 'color' },
    },
  },
};

export function Basic({
  angle,
  height,
  primaryColor,
  secondaryColor,
}: {
  angle: number;
  height: number;
  primaryColor: string;
  secondaryColor: string;
}) {
  return (
    <Fragment>
      <SectionDummy
        css={css`
          background-color: ${secondaryColor};
          color: #000;
        `}
      />
      <AslantDivider angle={angle} height={height} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <SectionDummy
        css={css`
          background-color: ${primaryColor};
          color: #fff;
        `}
      />
    </Fragment>
  );
}
