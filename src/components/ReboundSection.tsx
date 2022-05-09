import { css, SerializedStyles } from '@emotion/react';
import { ElementType, HTMLProps } from 'react';

type Props = {
  rebound: number;
  as?: ElementType;
  bottomRebound?: number;
  height: number;
  bottomHeight?: number;
  primaryColor: string;
  position?: 'top' | 'bottom' | 'both';
};

export function ReboundSection({
  css: externalStyles,
  as: Section = 'section',
  rebound,
  bottomRebound,
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
      clip-path: polygon(0 0, 0 calc(100% - ${height}px), ${rebound}% 100%, 100% calc(100% - ${height}px), 100% 0);
    `;
  } else if (position === 'both') {
    styles = css`
      border-top: ${height}px solid transparent;
      border-bottom: ${bottomHeight ?? height}px solid transparent;
      clip-path: polygon(
        0 ${height}px,
        0 calc(100% - ${bottomHeight ?? height}px),
        ${`${bottomRebound ?? rebound}%`} 100%,
        100% calc(100% - ${bottomHeight ?? height}px),
        100% ${height}px,
        ${`${rebound}%`} 0
      );
    `;
  } else {
    styles = css`
      border-top: ${height}px solid transparent;
      clip-path: polygon(0 ${height}px, 0 100%, 100% 100%, 100% ${height}px, ${rebound}% 0);
    `;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Section css={[baseStyles, styles, externalStyles]} {...props} />;
}
