import { product } from "./product.model";
export interface ProductResponse{
    message : string;
    data: product[];
}
