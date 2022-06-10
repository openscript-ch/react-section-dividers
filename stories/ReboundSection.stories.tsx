import { css } from '@emotion/react';
import { Fragment } from 'react';
import { ReboundSection } from '../src';
import { SectionDummy } from './components/SectionDummy';

export default {
  title: 'Rebound/Section',
  component: ReboundSection,
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
    bottomRebound: {
      defaultValue: 40,
      control: { type: 'range', min: 0, max: 100 },
    },
    height: {
      defaultValue: 40,
      control: { type: 'number', min: 1 },
    },
    bottomHeight: {
      defaultValue: 60,
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

type StoryProps = {
  rebound: number;
  bottomRebound?: number;
  height: number;
  bottomHeight?: number;
  position?: 'top' | 'bottom' | 'both';
  flip?: 'top' | 'bottom' | 'both' | 'none';
  primaryColor?: string;
  secondaryColor?: string;
};

export function Basic({ rebound, bottomRebound, height, bottomHeight, primaryColor, secondaryColor, position, flip }: StoryProps) {
  return (
    <Fragment>
      <SectionDummy
        css={css`
          background-color: ${secondaryColor};
          color: #000;
          padding-bottom: ${height}px;
        `}
      />
      <ReboundSection
        rebound={rebound}
        bottomRebound={bottomRebound}
        height={height}
        bottomHeight={bottomHeight}
        position={position}
        flip={flip}
        css={css`
          background-color: ${primaryColor};
          color: #fff;
          margin-top: -${height}px;
          margin-bottom: -${bottomHeight}px;
        `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat velit? Sapiente delectus, quo perspiciatis, veniam at porro
        consequatur, vel explicabo optio impedit necessitatibus perferendis rerum aliquid itaque fugit inventore. Omnis debitis voluptatibus
        sunt error laboriosam aperiam fuga. Eius, labore, aut, fugiat eligendi nam quasi doloremque dolore laudantium atque consequuntur
        minus! Soluta similique reiciendis beatae unde perspiciatis et! Doloribus, nostrum. Excepturi non maxime eius minus voluptate. Ad,
        nemo distinctio suscipit voluptatibus, dignissimos magnam modi quisquam illo nobis, a vitae unde sit consequatur eum numquam ipsa id
        in. Expedita, quod quam? Nam, repellendus! Assumenda impedit voluptas corporis debitis quam aut cumque, perferendis, nobis minus
        obcaecati quos distinctio tenetur delectus repellat error reiciendis laborum? Ratione veniam illum odio tempora ad voluptates natus?
        Maiores at veniam soluta neque tempore? Non molestiae eum iusto alias vel quisquam ipsum, numquam in molestias minima eius aut, ex
        saepe. Maxime earum molestias voluptates dicta iste iure veniam?
      </ReboundSection>

      <SectionDummy
        css={css`
          background-color: ${secondaryColor};
          color: #000;
          padding-top: ${bottomHeight}px;
        `}
      />
    </Fragment>
  );
}

export function BackgroundImages({
  rebound,
  bottomRebound,
  height,
  bottomHeight,
  primaryColor,
  secondaryColor,
  position,
  flip,
}: StoryProps) {
  return (
    <Fragment>
      <SectionDummy
        css={css`
          background-color: ${secondaryColor};
          background-image: url(./res/photo2.jpg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: #000;
          padding-bottom: ${height}px;
        `}
      />
      <ReboundSection
        rebound={rebound}
        bottomRebound={bottomRebound}
        height={height}
        bottomHeight={bottomHeight}
        position={position}
        flip={flip}
        css={css`
          color: #fff;
          background-color: ${primaryColor};
          background-image: url(./res/photo.jpg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          margin-top: -${height}px;
          margin-bottom: -${bottomHeight}px;
        `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat velit? Sapiente delectus, quo perspiciatis, veniam at porro
        consequatur, vel explicabo optio impedit necessitatibus perferendis rerum aliquid itaque fugit inventore. Omnis debitis voluptatibus
        sunt error laboriosam aperiam fuga. Eius, labore, aut, fugiat eligendi nam quasi doloremque dolore laudantium atque consequuntur
        minus! Soluta similique reiciendis beatae unde perspiciatis et! Doloribus, nostrum. Excepturi non maxime eius minus voluptate. Ad,
        nemo distinctio suscipit voluptatibus, dignissimos magnam modi quisquam illo nobis, a vitae unde sit consequatur eum numquam ipsa id
        in. Expedita, quod quam? Nam, repellendus! Assumenda impedit voluptas corporis debitis quam aut cumque, perferendis, nobis minus
        obcaecati quos distinctio tenetur delectus repellat error reiciendis laborum? Ratione veniam illum odio tempora ad voluptates natus?
        Maiores at veniam soluta neque tempore? Non molestiae eum iusto alias vel quisquam ipsum, numquam in molestias minima eius aut, ex
        saepe. Maxime earum molestias voluptates dicta iste iure veniam?
      </ReboundSection>

      <SectionDummy
        css={css`
          background-color: ${secondaryColor};
          color: #000;
          padding-top: ${bottomHeight}px;
        `}
      />
    </Fragment>
  );
}
