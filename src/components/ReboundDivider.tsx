import { css } from '@emotion/react';
import { CustomSVGElement } from '../elements/CustomSVGElement';

type Props = {
  rebound: number;
  height: number;
  primaryColor: string;
  secondaryColor?: string;
};

export function ReboundDivider({ rebound, height, primaryColor, secondaryColor }: Props) {
  const viewBox = `0 0 100 ${height}`;
  const points = `0,${height} ${rebound},0 100,${height}`;

  return (
    <CustomSVGElement
      css={css`
        background-color: ${secondaryColor || 'transparent'};
        width: 100%;
        height: ${height}px;
      `}
      viewBox={viewBox}
    >
      <polygon points={points} fill={primaryColor} />
    </CustomSVGElement>
  );
}
