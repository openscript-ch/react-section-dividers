import { css } from '@emotion/react';

const styles = css`
  display: flex;
  background-color: red;
  margin-bottom: -1px;
`;

export function AslantDivider() {
  return (
    <svg css={styles} viewBox="0 0 100 50">
      <polygon points="0,0 0,50 100,50" fill="black" />
    </svg>
  );
}
