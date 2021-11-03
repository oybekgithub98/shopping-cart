import React, {useState} from 'react';
import Menu from '../menu/Menu';
import Categories from '../categories/Categories';
import items from '../data/MenuData';
import './ProductsAll.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const ProductsAll = () => {

    const [menuItems, setMenuItems] = useState(items);
    const [categories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return;
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline">

                    </div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default ProductsAll