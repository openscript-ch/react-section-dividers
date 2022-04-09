import { css } from '@emotion/react';
import { HTMLProps } from 'react';

type Props = {
  angle: number;
  height: number;
  primaryColor: string;
  position?: 'top' | 'bottom';
};

export function AslantSection({ css: externalStyles, angle, height, primaryColor, position, ...props }: Props & HTMLProps<HTMLElement>) {
  const baseStyles = css`
    background-color: ${primaryColor};
  `;

  let styles = css``;

  if (position === 'bottom') {
    styles = css`
      border-bottom: ${height}px solid transparent;
      clip-path: polygon(
        0 0,
        0 calc(100% - ${(height / 90) * (angle + 45)}px),
        100% calc(100% - ${height - (height / 90) * (angle + 45)}px),
        100% 0
      );
    `;
  } else {
    styles = css`
      border-top: ${height}px solid transparent;
      clip-path: polygon(0 ${(height / 90) * (angle + 45)}px, 0 100%, 100% 100%, 100% ${height - (height / 90) * (angle + 45)}px);
    `;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <section css={[baseStyles, styles, externalStyles]} {...props} />;
}
