import Breadcrumbs from '@/src/shared/components/Breadcrumbs';
import React, { Fragment } from 'react';

const BreadcrumbIndex: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Breadcrumbs excludePath={['demo']} />
      Sample Page
    </Fragment>
  );
};

export default BreadcrumbIndex;
