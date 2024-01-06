import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography, Button } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

import Iconify from '../components/iconify';

import CreateCarForm from 'src/components/create-user-form/CreateUserForm';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal);
  };



  return (
    <>
      <Helmet>
        <title> Dashboard: Carros </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Carros
        </Typography>

        <Button
          onClick={handleOpen}
          variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
          Cadastrar Carro
        </Button>

        <CreateCarForm
          isDialogOpened={openModal}
          handleCloseDialog={() => setOpenModal(false)}
        />

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            {/* <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            /> */}
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} />

      </Container>
    </>
  );
}
