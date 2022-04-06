import { css } from '@emotion/react';
import { Fragment } from 'react';
import { AslantDivider } from '../src';
import { SectionDummy } from './components/SectionDummy';

export default {
  title: 'Aslant Divider',
  component: AslantDivider,
  parameters: {
    docs: {
      page: null,
    },
  },
};

export function Basic() {
  return (
    <Fragment>
      <AslantDivider />
      <SectionDummy
        css={css`
          background-color: black;
          color: white;
        `}
      />
    </Fragment>
  );
}
