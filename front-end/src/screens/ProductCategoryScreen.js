import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Meta from '../components/Meta';
import Spinner from '../components/Spinner';
import Paginate from '../components/Paginate';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import { listCategoryProducts } from '../actions/productActions';

const ProductCategoryScreen = ({ match }) => {
  const category = match.params.category;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productCategory = useSelector((state) => state.productCategory);
  const { loading, error, products, page, pages } = productCategory;

  useEffect(() => {
    dispatch(listCategoryProducts(category, pageNumber));
  }, [dispatch, category, pageNumber]);

  return (
    <Fragment>
      <Meta />
      {!category ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h2>{category}</h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={pages} page={page} />
        </>
      )}
    </Fragment>
  );
};

export default ProductCategoryScreen;
