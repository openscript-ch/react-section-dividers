import { css, SerializedStyles } from '@emotion/react';
import { HTMLProps } from 'react';

type Props = {
  angle: number;
  bottomAngle?: number;
  height: number;
  bottomHeight?: number;
  primaryColor: string;
  position?: 'top' | 'bottom' | 'both';
};

export function AslantSection({
  css: externalStyles,
  angle,
  bottomAngle,
  height,
  bottomHeight,
  primaryColor,
  position,
  ...props
}: Props & HTMLProps<HTMLElement>) {
  const baseStyles = css`
    background-color: ${primaryColor};
  `;
  let styles: SerializedStyles;

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
  } else if (position === 'both') {
    styles = css`
      border-top: ${height}px solid transparent;
      border-bottom: ${bottomHeight ?? height}px solid transparent;
      clip-path: polygon(
        0 ${(height / 90) * (angle + 45)}px,
        0 calc(100% - ${((bottomHeight ?? height) / 90) * ((bottomAngle ?? angle) + 45)}px),
        100% calc(100% - ${(bottomHeight ?? height) - ((bottomHeight ?? height) / 90) * ((bottomAngle ?? angle) + 45)}px),
        100% ${height - (height / 90) * (angle + 45)}px
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
