import flowers from "../components/Products.js";
import { makeObservable, observable } from "mobx";

class ProductStore {
  flowers = flowers;

  constructor() {
    makeObservable(this, {
      flowers: observable,
    });
  }
}
const productStore = new ProductStore();
export default productStore;
