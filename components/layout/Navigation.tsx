import Link from 'next/link';

import classes from './Navigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href={'/'}>Next Auth</Link>
      <nav>
        <ul>
          <li>
            <Link href={'/login'}>Login</Link>
          </li>
          <li>
            <Link href={'/profile'}>Profile</Link>
          </li>
          <li>
            <Link href={'/logout'}>Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
