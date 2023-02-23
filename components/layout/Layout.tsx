import { FC, Fragment, PropsWithChildren } from 'react';
import MainNavigation from '@/components/layout/Navigation';

export default function Layout(props: PropsWithChildren) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
