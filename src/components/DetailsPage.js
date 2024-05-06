import { useLocation, useNavigate } from "react-router-dom";

export const DetailsPage = () => {
     const {description, id, price} = useLocation().state;
     console.log(description);
     const navigate = useNavigate();
     const onClickPrice = () => {
        navigate(`/price/${id}/`, {state : {price: price}})
     };
     return(
        <div style={{cursor:"pointer"}} onClick={onClickPrice}>
            {description}
        </div>
     );
};