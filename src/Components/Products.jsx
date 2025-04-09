import { React } from 'react';
import ItemCard from './ItemCard';
import Sort from './Sort';
import ActiveFilters from './ActiveFilters';
import Empty from './Empty';
import './Products.css';
import { sorter } from '../helpers/sort';
import { filterer, checkIfNoFilter } from '../helpers/selectors';
import { searcher } from '../helpers/search';
import { useSelector } from 'react-redux';
import FilterPanel from './FilterPanel';
import { Breadcrumb } from 'react-bootstrap';

export default function Products({ products }) {
  const { sortParameter, filters, searchQuery } = useSelector(state => ({
    sortParameter: state.sortStore,
    filters: state.filtersStore,
    searchQuery: state.searchStore.query,
  }));
if(products){
  console.log(products)
}
  if (!products) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading products...</div>;
  }

  if (searchQuery !== null && searchQuery !== "") {
    products = searcher(products, searchQuery);
  }

  let isFilterApplied = !checkIfNoFilter(filters);
  if (isFilterApplied) {
    products = filterer(products, filters);
  }

  if (sortParameter != null) {
    products = sorter(products, sortParameter);
  }

  return (
    <div className="products-page-wrapper m-3">
      <aside className="filter-panel-wrapper border-top border-end border-bottom">
        <FilterPanel />
      </aside>

      <main className="products-content">
        <div className="product-container-header">
          <Sort sortParameter={sortParameter} />
          <ActiveFilters />
        </div>

        <div className="product-list">
          {
            products.length === 0
              ? <Empty />
              : products.map((item, index) => (
                  <ItemCard key={index} item={item} />
                ))
          }
        </div>
      </main>
    </div>
  );
}

