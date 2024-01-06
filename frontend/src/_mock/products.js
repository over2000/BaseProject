import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Jetta TSI 2012',
  'Audi A3 1.8 T',
  'Golf GTI',
];

// ----------------------------------------------------------------------

const products = [...Array(3)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
  };
});

export default products;
