import { NavLink } from 'react-router-dom';

const Category = ({ category }) => {
    return (
        <div className="border-2  bg-white grid grid-cols-1 gap-2 h-fit py-5 px-8 rounded-3xl">
        {category.map(cate => (
            
              <NavLink
                    className={({ isActive }) =>
                        `rounded-full border-2 text-center ${isActive ? 'bg-[#9538E2] text-white' : ''}`
                    }
                    to={`/category/${cate.category}`}>
                 <button key={cate.product_id} className="px-5 py-2  "> {cate.category}</button>
                   
                </NavLink>
           
           
        ))}
    </div>
    );
};

export default Category;
