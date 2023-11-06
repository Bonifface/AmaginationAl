import { css } from "@emotion/react";

export const styles = () => ({
  container: css`
    position: relative;
    //width: 100%;
    //height: 100%;
    //display: grid;
    grid-column: auto/span 2;
    grid-row: auto/span 2;
  `,
  container1: css`
    position: relative;
    max-width: 300px;
    max-height: 300px;
    //width: 100%;
    //height: 100%;
    //display: grid;
  `,

  img: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  wrapper: css`
    position: absolute;
    top: 0;
    left: 0;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-evenly;
    height: 100%;
    width: 100%;
    opacity: 0;
    align-items: center;
    transition: opacity 0.2s ease-in-out;
    background: rgba(250, 250, 252, 0.95);
    :hover {
      opacity: 0.8;
    }
  `,
  section: css`
    display: flex;
    padding: 10px;
    width: 100%;
    justify-content: space-around;
  `,
  title: css`
    font-size: 18px;
    line-height: 1.3em;
    font-weight: normal;
  `,
  imgDownload: css`
    width: 30px;
    height: 30px;
  `,
});
