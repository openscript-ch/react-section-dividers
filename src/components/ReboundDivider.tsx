import { css } from '@emotion/react';
import { CustomSVGElement } from '../elements/CustomSVGElement';

type Props = {
  rebound: number;
  height: number;
  flip?: boolean;
  primaryColor: string;
  secondaryColor?: string;
};

export function ReboundDivider({ rebound, height, flip, primaryColor, secondaryColor }: Props) {
  const viewBox = `0 0 100 ${height}`;
  const points = flip ? `0,0 ${rebound},${height} 100,0` : `0,${height} ${rebound},0 100,${height}`;

  return (
    <CustomSVGElement
      css={css`
        background-color: ${flip ? primaryColor : secondaryColor || 'transparent'};
        width: 100%;
        height: ${height}px;
      `}
      viewBox={viewBox}
    >
      <polygon points={points} fill={flip ? secondaryColor : primaryColor} />
    </CustomSVGElement>
  );
}
