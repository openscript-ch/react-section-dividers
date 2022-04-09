import { css } from '@emotion/react';
import { SVGProps } from 'react';

const styles = css`
  display: flex;
  margin-bottom: -0.5px;
`;

export function CustomSVGElement({ css: externalStyles, ...props }: SVGProps<SVGSVGElement>) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <svg preserveAspectRatio="none" {...props} css={[styles, externalStyles]} />;
}
