import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const product = useLoaderData();
  const { _id, name, photo, price,brand,type, description } = product;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const type = form.type.value;
    // const details = form.details.value;
    const photo = form.photo.value;
    const updateProducts = {
      name,
      brand,
      price,
      description,
      type,
    //   details,
      photo,
    };
    console.log(updateProducts);

    fetch(`https://technology-electronics-server-rose.vercel.app/Product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="bg-violet-500 m-6 p-24 rounded-lg ">
      <h1 className="text-3xl font-extrabold p-2 text-center py-5 mb-6">Update Products</h1>
      <form onSubmit={handleUpdate}>
        <div className=" sm:w-full  md:flex w-full gap-3">
          <div className="form-control  md: w-full ">
            <label className="label">
              <span className="label-text font-extrabold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Products name"
              name="name"
              defaultValue={name}
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-extrabold">
                Brand Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Brand Name"
              name="brand"
              defaultValue={brand}
              className="input input-bordered  "
              required
            />
          </div>
        </div>
        <div className=" md:flex w-full gap-3">
          <div className="form-control md: w-full ">
            <label className="label">
              <span className="label-text font-extrabold">
                Price
              </span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              defaultValue={price}
              className="input input-bordered  "
              required
            />
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-extrabold">
                Short Description
              </span>
            </label>
            <input
              type="text"
              placeholder=""
              name="description"
              defaultValue={description}
              className="py-8 p-2  rounded-md  "
              required
            />
          </div>
        </div>
        <div className=" md:flex w-full gap-3">
          <div className="form-control md: w-full ">
            <label className="label">
              <span className="label-text font-extrabold">
                Type of Product
              </span>
            </label>
            <input
              type="text"
              placeholder="Type of products"
              name="type"
              defaultValue={type}
              className="input input-bordered  "
              required
            />
          </div>
        </div>
        <div className=" md:flex w-full gap-3">
          <div className="form-control md: w-full ">
            <label className="label">
              <span className="label-text font-extrabold ">
                photo
              </span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              defaultValue={photo}
              className="input input-bordered  "
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update"
          className="w-full bg-violet-900-700 my-5 p-2 border font-extrabold rounded-md"
        />
      </form>
    </div>
  );
};

export default UpdateProducts;
