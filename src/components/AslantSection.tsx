import { css } from '@emotion/react';
import { HTMLProps } from 'react';

type Props = {
  angle: number;
  height: number;
  colors: {
    primaryColor: string;
    secondaryColor?: string;
  };
};

export function AslantSection({ css: externalStyles, angle, height, colors, ...props }: Props & HTMLProps<HTMLElement>) {
  const styles = css`
    border-top: ${height}px solid transparent;
    clip-path: polygon(0 ${((height * 1) / 90) * (angle + 45)}px, 0 100%, 100% 100%, 100% ${height - ((height * 1) / 90) * (angle + 45)}px);
    background-color: ${colors.primaryColor};
  `;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <section css={[styles, externalStyles]} {...props} />;
}
