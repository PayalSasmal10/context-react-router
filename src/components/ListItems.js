import { useContext } from "react";
import { StoreContext } from "../store/store";
import { useNavigate } from "react-router-dom";

export const ListItems = () => {
    const {items} = useContext(StoreContext);
    const navigate = useNavigate();

    const onClickHandlerDetails = (item) => {
        navigate(`/details/${item.id}`, {state : {description: item.description,id: item.id, price: item.price}});
    }
    return(
        <div>
            {items.map((item) => {
                return(
                    <div key={item.id} className="list-items" onClick={() => onClickHandlerDetails(item)}>
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                        <img src={item.image} alt="list"/>
                    </div>
                );
            })}
        </div>
    );
}