import { css } from '@emotion/react';
import { Fragment } from 'react';
import { OmniSection } from '../src';
import { SectionDummy } from './components/SectionDummy';

export default {
  title: 'Omni/Section',
  component: OmniSection,
  parameters: {
    docs: {
      page: null,
    },
  },
  argTypes: {
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

export function Basic({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor: string }) {
  return (
    <Fragment>
      <SectionDummy
        css={css`
          background-color: ${secondaryColor};
          color: #000;
        `}
      />
      <OmniSection divider={<svg />} />
      <SectionDummy
        css={css`
          background-color: ${primaryColor};
          color: #fff;
        `}
      />
    </Fragment>
  );
}
