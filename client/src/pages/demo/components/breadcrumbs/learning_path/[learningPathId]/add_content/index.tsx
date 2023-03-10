import Breadcrumbs from '@/src/shared/components/Breadcrumbs';
import React, { Fragment } from 'react';

const BreadcrumbIndex: React.FunctionComponent = () => {
  return (
    <Fragment>
      <h3>With Exclude</h3>
      <Breadcrumbs excludePath={['demo']} />
      <br />
      <h3>Without Exclude</h3>
      <p>demo folder has no index, observe the behavior</p>
      <p>Click Demo to simulate error</p>
      <Breadcrumbs excludePath={['']} />
      <br />

      <h1>Add Content For learning Materials Sample Page</h1>
    </Fragment>
  );
};

export default BreadcrumbIndex;
