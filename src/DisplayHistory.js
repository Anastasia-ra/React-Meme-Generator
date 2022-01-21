import { historyStyle } from './Style';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function DisplayHistory({ obj }) {
  const history = obj.map((meme) => {
    return (
      <li key={`meme -§{meme.memeTemplate}`}>
        Top text: {meme.topText} | Bottom text: {meme.bottomText} | Meme name:
        {meme.memeTemplate}
      </li>
    );
  });
  return (
    <div css={historyStyle}>
      <h2> Meme History </h2>
      {history}
    </div>
  );
}
