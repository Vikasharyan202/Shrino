/* eslint-disable react/prop-types */
import ProductInfoPage from "./ProductInfoPage";

const Product = ({item}) => {

    function editHandler () {
        alert("edit")
    }
    function deletetHandler () {
        alert("delete")    }
  return (
    <div className="product">
        <img alt="item" src={item.image} />
        <div className="product_details">
            <div className="description">
                <p className="title">{item.title}</p>
                <p className="price">Price: {item.price} </p> 
                <p className="category">{item.category}</p>                     
            </div>
            <div className="btns">
                <button className="edit" onClick={editHandler}>Edit</button>
                <button className="delete" onClick={deletetHandler}>Delete</button>
            </div>
        </div>
        
    </div>
  )
}

export default Product;