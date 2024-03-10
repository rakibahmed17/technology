import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const { _id,name, photo, price, description } = product;

  const handleDelete=_id=>{
    console.log(_id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
       fetch(`http://localhost:5000/product/${_id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.deletedCount > 0){
                 Swal.fire({
            title: "Deleted!",
            text: "Your products has been deleted.",
            icon: "success"
          });

        }

       })


        }
      });
  }
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
            <button>Details</button>
            </div>
            <div className="badge badge-outline bg-green-500 text-white">
            <Link to={`/update/${_id}`}> <button> Update</button></Link>
            </div>
            <div className="badge badge-outline bg-blue-500 text-white">
            <button onClick={()=>handleDelete(_id)} >DELETE</button>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
