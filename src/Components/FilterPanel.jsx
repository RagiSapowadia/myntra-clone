import React from 'react';
import './FilterPanel.css';
 
import GenderFilter from '../FilterOptions/Gender';
import DiscountFilter from '../FilterOptions/Discount';
import ColorFilter from '../FilterOptions/Color';
import PriceFilter from '../FilterOptions/Price';
import { useSelector , useDispatch } from 'react-redux';
import { checkIfNoFilter } from '../helpers/selectors';
import {clearAllFilters} from '../actions/filters';
export default function FilterPanel() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filtersStore);
    // console.log(filters);
    let isFilterApplied = !checkIfNoFilter(filters);
    // console.log(isFilterApplied);
    const [isFilterContainerActive , setFilterContainerActive] = React.useState(false);
    return (
        <>
        <div 
            className={`mobile-filter-icon ${!isFilterContainerActive ? '' : 'mobile-hide-filter'}`}
            onClick={() => setFilterContainerActive(true)}
        ><i class="fas fa-sliders-h"></i></div>
        <div 
            className={`mobile-filter-icon ${isFilterContainerActive ? '' : 'mobile-hide-filter'} close-filter-container`}
            onClick={() => setFilterContainerActive(false)}
        ><i class="fas fa-times"></i></div>
        <div 
            className= {`filter-container ${isFilterContainerActive ? '' : 'mobile-hide-filter'}`}
        >
            <div className="filter-container-header flex-row " >
                <span className="filter-container-title" >FILTERS</span>
                <span 
                    className="clear-all-filters" 
                    style={isFilterApplied ? {display: 'block'} : {display: 'none'}}
                    onClick={() => dispatch(clearAllFilters())}
                >
                    CLEAR ALL
                </span>
            </div>
            <GenderFilter activeFilter={filters.gender} />
            <DiscountFilter activeFilter={filters.discount} />
            <ColorFilter activeFilter={filters.color} />
            <PriceFilter activeFilter={filters.price} />
        </div>
        </>
    )
}
