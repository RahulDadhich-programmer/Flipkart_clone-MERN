import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHomeAction } from "../../actions/Actions";
const Categories = () => {
  const dispatch = useDispatch();
  const { home, loading } = useSelector((state) => state.getHome);
  useEffect(() => {
    if (!loading && home?.length === 0) {
      dispatch(getHomeAction());
    }
  }, [dispatch, home, loading]);
  return (
    <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">
      <div className="flex items-center justify-between mt-4">
        {home?.category.map((category, index) => (
          <Link
            to={`/category`}
            className="flex flex-col gap-1 items-center p-2 group"
            key={index}
          >
            <div className="h-16 w-16">
              <img
                draggable="false"
                className="h-full w-full object-contain"
                src={category.imageURL}
                alt="categories"
              />
            </div>
            <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
              {category.Title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
