// import flowers from "../components/Products.js";
import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class ProductStore {
  // flowers = flowers;
  flowers = [];

  deleteFlower = (id) => {
    this.flowers = this.flowers.filter((flowerid) => flowerid.id !== id);
  };

  fetchFlowers = async () => {
    try {
      const response = await axios.get("http://localhost:8001/flowers");
      this.flowers = response.data;
    } catch (error) {
      console.error("productStore -> fetchFlowers -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      flowers: observable,
      deleteFlower: action,
      fetchFlowers: action,
    });
  }
}
const productStore = new ProductStore();
productStore.fetchFlowers();
export default productStore;
