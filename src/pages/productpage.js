import Header from "../components/Header";

function productpage( {   id, title, price,rating, description, category, image,hasPrime}) 

{
    return (
        <div className="text-black">
            <Header />
            <p>{title}</p>
        </div>
    )
}

export default productpage
