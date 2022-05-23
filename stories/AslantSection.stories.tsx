import { css } from '@emotion/react';
import { Fragment } from 'react';
import { AslantSection } from '../src';
import { SectionDummy } from './components/SectionDummy';

export default {
  title: 'Aslant/Section',
  component: AslantSection,
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
    bottomAngle: {
      defaultValue: 40,
      control: { type: 'range', min: -45, max: 45 },
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

export function Basic({
  angle,
  bottomAngle,
  height,
  bottomHeight,
  primaryColor,
  secondaryColor,
  position,
}: {
  angle: number;
  bottomAngle: number;
  height: number;
  bottomHeight: number;
  primaryColor: string;
  secondaryColor: string;
  position?: 'bottom' | 'top';
}) {
  return (
    <Fragment>
      <SectionDummy
        css={css`
          background-color: ${secondaryColor};
          color: #000;
          padding-bottom: ${height}px;
        `}
      />
      <AslantSection
        angle={angle}
        bottomAngle={bottomAngle}
        height={height}
        bottomHeight={bottomHeight}
        primaryColor={primaryColor}
        position={position}
        css={css`
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
      </AslantSection>

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
  angle,
  bottomAngle,
  height,
  bottomHeight,
  primaryColor,
  secondaryColor,
  position,
}: {
  angle: number;
  bottomAngle: number;
  height: number;
  bottomHeight: number;
  primaryColor: string;
  secondaryColor: string;
  position?: 'bottom' | 'top';
}) {
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
      <AslantSection
        angle={angle}
        bottomAngle={bottomAngle}
        height={height}
        bottomHeight={bottomHeight}
        primaryColor={primaryColor}
        position={position}
        css={css`
          color: #fff;
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
      </AslantSection>

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
