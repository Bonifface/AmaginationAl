import { CircularProgress } from '@mui/material';
import { styles } from './Loader.styles.ts';

export const Loader = () => {
  const classes = styles()

  return (
    <div css={classes.loaderWrapper}>
      <CircularProgress />
    </div>
  )
}