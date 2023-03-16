import React, { Fragment } from 'react';
import { useShowPerPage } from '@/src/shared/hooks/useShowPerPage';
import Navbar from '@/src/shared/components/Navbar';
import Breadcrumbs from '@/src/shared/components/Breadcrumbs';
import Container from '@/src/shared/layouts/Container';
import Table from '@/src/shared/components/Table';
import { dropdownItems, navItems } from '@/src/pages/demo/layouts/navbar';
import Select from '@/src/shared/components/Select';

const EnrollUser: React.FC = () => {
  const { paths, showPerPage, showPerPageOption, handleShowPerPage } =
    useShowPerPage();

  return (
    <Fragment>
      <Navbar navItems={navItems} dropdownItems={dropdownItems} />
      <Container>
        <Breadcrumbs paths={paths} />
        <Table header={['id', 'name', 'age']} data={showPerPage} />
        <div className="flex justify-end">
          <Select
            width="200px"
            eventHandler={handleShowPerPage}
            label="Show Per Page"
            options={showPerPageOption}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default EnrollUser;
