import { useLocation } from "react-router-dom"

export const Price = () => {
    const {price} = useLocation().state;
    return(
        <div>
            {price}
        </div>
    )
}