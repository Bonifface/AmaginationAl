import { css } from "@emotion/react";

export const styles = () => ({
  wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    max-height: 65px;
    padding: 0 20px;
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,.05);
    
  `,
  img: css`
    width: 90px;
  `,
  btnCreate: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 40px;
    background-color: #6469ff;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;

    :hover {
      background-color: #6b6dc1;
    }
  `,
});
