import { css } from "@emotion/react";

export const styles = () => ({
  container: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media screen and (max-width: 500px){
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `,
});
