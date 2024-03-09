const Product = ({ product }) => {
  const { name, brand, photo, price, description, type, details } = product;
  return (
    <div>
      <div className="card  bg-base-100 p-5 shadow-xl">
        <figure>
          <img src={photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold">{name}</h2>
          <p className="font-bold">{price}</p>
          <p>{description}</p>
          <div className="card-actions justify-end mt-4 mr-8 font-extrabold">
            <div className="badge badge-outline  bg-orange-500 text-white">
              Details
            </div>
            <div className="badge badge-outline bg-green-500 text-white">
              Update
            </div>
            <div className="badge badge-outline bg-blue-500 text-white">
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
