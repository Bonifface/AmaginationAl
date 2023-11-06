import { Link } from 'react-router-dom';
import { logo } from '../../../../assets';
import { styles } from './Header.styles.ts';

export const Header = () => {
  const classes = styles();

  return (
    <div css={classes.wrapper}>
      <Link to='/'>
        <img css={classes.img} src={logo} alt='#'/>
      </Link>
      <Link to='/create-post' css={classes.btnCreate}>
       <p>Create</p>
      </Link>
    </div>
  )
}
