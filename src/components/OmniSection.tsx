import { ReactElement } from 'react';

type Props = {
  divider: ReactElement;
};

export function OmniSection({ divider }: Props) {
  if (divider.type !== 'svg') {
    throw new Error('Divider must be an svg element.');
  }
  return (
    <div>
      {divider}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum fugit voluptatem, harum atque adipisci ducimus rem
      accusamus quod velit error, vel expedita aperiam odio soluta libero nulla, ex qui?
    </div>
  );
}
