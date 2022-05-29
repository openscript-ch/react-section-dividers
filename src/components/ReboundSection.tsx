/* eslint-disable no-nested-ternary */
import { css } from '@emotion/react';
import { ElementType, HTMLProps } from 'react';

type Props = {
  rebound: number;
  bottomRebound?: number;
  height: number;
  bottomHeight?: number;
  position?: 'top' | 'bottom' | 'both';
  flip?: 'top' | 'bottom' | 'both' | 'none';
  primaryColor?: string;
  as?: ElementType;
};

export function ReboundSection({
  css: externalStyles,
  as: Section = 'section',
  rebound,
  bottomRebound,
  height,
  bottomHeight,
  primaryColor,
  position = 'top',
  flip = 'none',
  ...props
}: Props & HTMLProps<HTMLElement>) {
  const baseStyles = css`
    background-color: ${primaryColor ?? '#000000'};
  `;
  const polygon = [
    position === 'top' ? '0 100%' : flip !== 'none' && flip !== 'bottom' ? `0 100%` : `0 calc(100% - ${bottomHeight ?? height}px)`,
    position === 'top'
      ? '0 100%'
      : flip !== 'none' && flip !== 'bottom'
      ? `${`${bottomRebound ?? rebound}%`} calc(100% - ${bottomHeight ?? height}px)`
      : `${`${bottomRebound ?? rebound}%`} 100%`,
    position === 'top' ? '100% 100%' : flip !== 'none' && flip !== 'bottom' ? '100% 100%' : `100% calc(100% - ${bottomHeight ?? height}px)`,
    position === 'bottom' ? '100% 0' : flip !== 'none' && flip !== 'top' ? '100% 0' : `100% ${height}px`,
    position === 'bottom' ? '100% 0' : flip !== 'none' && flip !== 'top' ? `${rebound}% ${height}px` : `${rebound}% 0`,
    position === 'bottom' ? '0 0' : flip !== 'none' && flip !== 'top' ? `0 0` : `0 ${height}px`,
  ];

  const styles = css`
    ${position !== 'top' ? `border-bottom: ${bottomHeight ?? height}px solid transparent;` : ''}
    ${position !== 'bottom' ? `border-top: ${height}px solid transparent;` : ''}
    clip-path: polygon(${polygon.join(',')});
  `;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Section css={[baseStyles, styles, externalStyles]} {...props} />;
}
