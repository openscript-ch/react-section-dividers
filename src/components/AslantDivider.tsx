import { css } from '@emotion/react';
import { CustomSVGElement } from '../elements/CustomSVGElement';

type Props = {
  angle: number;
  height: number;
  primaryColor: string;
  secondaryColor?: string;
};

export function AslantDivider({ angle, height, primaryColor, secondaryColor }: Props) {
  const viewBox = `0 0 100 ${height}`;
  const points = `0,${(height / 90) * (angle + 45)} 0,${height} 100,${height} 100,${height - (height / 90) * (angle + 45)}`;

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
