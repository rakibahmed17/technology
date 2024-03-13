
import Swal from "sweetalert2";

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

        fetch('https://technology-electronics-server-rose.vercel.app/product',{
          method:'POST',
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(newProducts)
            })
            .then(res=>res.json())
            .then(data=>{
            if(data.insertedId){
              Swal.fire({
                title: "Success!",
                text: "You clicked the button!",
                icon: "success"
              });
            }
            })
  
        

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
              placeholder=""
              name="description"
              className="py-8 p-2  rounded-md  "
              required
            />
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-extrabold">Details</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="details"
              className="py-8 p-2 rounded-md"
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
