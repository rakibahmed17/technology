
import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer/Footer";



const MyCarts = () => {
    const cardsData=useLoaderData();
    console.log(cardsData)
        return (
        <div className="">
     <div className="grid md:grid-cols-3 gap-5 mb-5">
     {
            cardsData?.map(card=>
                <div className="card p-6 bg-base-100 shadow-xl">
                <figure><img src={card.photo} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{card.name}</h2>
                  <p>{card.description}</p>
                  <div className="card-actions justify-end">
                    
                  </div>
                </div>
              </div> )
          }
     </div>
     <Footer></Footer>
        </div>
    );
};

export default MyCarts;