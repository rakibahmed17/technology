const AddProducts = () => {



    const handleProducts=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const brand=form.brand.value;
        const price=form.price.value;
        const description=form.description.value;
        const type=form.type.value;
        const details=form.details.value;
        const photo =form.photo.value;
        const newProducts ={name,brand,price,description,type,details,photo};
        console.log(newProducts);


    }


  return (
    <div className="bg-green-200 m-6 p-24 rounded-lg ">
      <h1 className="text-3xl font-extrabold p-2">Add Products</h1>
      <form  onSubmit={handleProducts}>
        <div className=" sm:w-full  md:flex w-full gap-3">
          <div className="form-control  md: w-full ">
            <label className="label">
              <span className="label-text font-extrabold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Products name"
              name="name"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-extrabold">Brand Name</span>
            </label>
            <input
              type="text"
              placeholder="Brand Name"
              name="brand"
              className="input input-bordered  "
              required
            />
          </div>
        </div>
        <div className=" md:flex w-full gap-3">
          <div className="form-control md: w-full ">
            <label className="label">
              <span className="label-text font-extrabold">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered  "
              required
            />
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-extrabold">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="input input-bordered  "
              required
            />
          </div>
        </div>
        <div className=" md:flex w-full gap-3">
          <div className="form-control md: w-full ">
            <label className="label">
              <span className="label-text font-extrabold">Type of Product</span>
            </label>
            <input
              type="text"
              placeholder="Type of products"
              name="type"
              className="input input-bordered  "
              required
            />
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-extrabold">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              name="details"
              className="input input-bordered  "
              required
            />
          </div>
        </div>
        <div className=" md:flex w-full gap-3">
          <div className="form-control md: w-full ">
            <label className="label">
              <span className="label-text font-extrabold">photo</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered  "
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add"
          className="w-full bg-green-700 my-5 p-2 text-white font-extrabold rounded-md"
        />
      </form>
    </div>
  );
};

export default AddProducts;
