/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const color1 = '#f0ebd8';
const color2 = '#89b0ae';
const color3 = '#3e5c76';
// const color4 = '#1d2d44';
// const color5 = '#0d1321';

export const inputStyle = css`
  border-style: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #dbdbdb;
  height: 30px;
  margin: 20px;
`;

export const appStyle = css`
  color: #555b6e;
  font-family: arial;
  display: grid;
  grid-template-columns: 0.7fr 1 fr 1 fr 0.7fr;
  grid-template-rows: repeat(9, 1fr);
  justify-items: center;
  align-items: center;
  font-weight: bold;
`;

export const mainHeading = css`
  grid-column: 2/4;
  grid-row: 1/2;
`;
export const tLabelInput = css`
  grid-column: 2/3;
  grid-row: 2/3;
`;

export const tTextInput = css`
  grid-column: 2/3;
  grid-row: 3/4;
`;
export const bTextInput = css`
  grid-column: 2/3;
  grid-row: 4/5;
`;
export const memeTemplateInput = css`
  grid-column: 2/3;
  grid-row: 5/6;
`;
export const generateButton = css`
  grid-column: 2/3;
  grid-row: 6/7;
  font-size: 1.2em ;
  text-align: center;
  background-color: #89b0ae;
  border-radius: 15px;
  border-style: none;
  /* box-sizing: border-box; */
  color: #ffffff;
  cursor: pointer;
  font-family: 'Arial',
  font-weight: 500;
  height: 40px;
  width: 130px;
  padding: 10px 10px;
  &:hover {
        background-color: ${color3}; }

`;

export const previewHeading = css`
  grid-column: 3/4;
  grid-row: 2/3;
`;
export const previewImage = css`
  grid-column: 3/4;
  grid-row: 3/6;
  object-fit: scale-down;
  width: 300px;
  height: auto;
`;
export const downloadButton = css`
  grid-column: 3/4;
  grid-row: 6/7;
  font-size: 1.2em ;
  align-self: center;
  text-align: center;
  background-color: #89b0ae;
  border-radius: 15px;
  border-style: none;
  /* box-sizing: border-box; */
  color: #ffffff;
  cursor: pointer;
  font-family: 'Arial',
  font-weight: 500;
  height: 40px;
  width: 130px;
  padding: 10px 10px;
  &:hover {
        background-color: ${color3}; }

`;

export const leftPartStyle = css`
  grid-column: 1/2;
  grid-row: 1/10;
  background-color: ${color2};
  justify-self: stretch;
  align-self: stretch;
`;

export const rightPartStyle = css`
  grid-column: 4/5;
  grid-row: 1/10;
  background-color: ${color2};
  justify-self: stretch;
  align-self: stretch;
`;

export const middlePartStyle = css`
  grid-column: 2/4;
  grid-row: 1/10;
  background-color: ${color1};
  justify-self: stretch;
  align-self: stretch;
`;
