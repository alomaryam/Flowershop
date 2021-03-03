import flowers from "../components/Products.js";
import { makeObservable, observable, action } from "mobx";

class ProductStore {
  flowers = flowers;

  deleteFlower = (id) => {
    this.flowers = this.flowers.filter((flowerid) => flowerid.id !== id);
  };

  constructor() {
    makeObservable(this, {
      flowers: observable,
      deleteFlower: action,
    });
  }
}
const productStore = new ProductStore();
export default productStore;
