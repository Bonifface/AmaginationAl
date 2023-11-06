import { css } from "@emotion/react";

export const styles = () => ({
  container: css`
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  `,
  title: css`
    margin: 0;
    padding-top: 20px;
    font-weight: 800;
    color: #222328;
    font-size: 32px;
  `,
  subTitle: css`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: #666e75;
    font-size: 16px;
  `,
  titleSearch: css`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 12px;
    color: #666e75;
  `,
  subtitleSearch: css`
    color: #222328;
  `,
});
