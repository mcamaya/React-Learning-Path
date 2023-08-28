import "./ProductCard.css";
export default function ProductCard(props){
    const {title, price, description, image} = props;

    return(
        <div className="card">
            <div className="image-container">
                <img className="img" src={image} />
            </div>
            <div className="info-product">
                <h4>{title}</h4>
                <p>{description}</p>
                <h3>${price.toLocaleString()}</h3>
            </div>
            <button className="btn">Add to cart</button>
        </div>
    );
}