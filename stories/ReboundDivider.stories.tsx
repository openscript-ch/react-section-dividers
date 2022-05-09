import { css } from '@emotion/react';
import { Fragment } from 'react';
import { ReboundDivider } from '../src/components/ReboundDivider';
import { SectionDummy } from './components/SectionDummy';

export default {
  title: 'Rebound/Divider',
  component: ReboundDivider,
  parameters: {
    docs: {
      page: null,
    },
  },
  argTypes: {
    rebound: {
      defaultValue: 20,
      control: { type: 'range', min: 0, max: 100 },
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
  rebound,
  height,
  primaryColor,
  secondaryColor,
}: {
  rebound: number;
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
      <ReboundDivider rebound={rebound} height={height} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <SectionDummy
        css={css`
          background-color: ${primaryColor};
          color: #fff;
        `}
      />
    </Fragment>
  );
}
