import img1 from "./images/img1.JPG";
import img2 from "./images/img2.JPG";
import img3 from "./images/img3.JPG";
import img4 from "./images/img4.JPG";

const imgs = [img1, img2, img3, img4];
const styles = {
  image: {
    height: "400px",
    width: "350px",
  },
};

const Flowers = [
  {
    id: 1,
    name: "Baby Pink Vase",
    price: 30,
    image: <img alt="Baby Pink Vase" src={imgs[0]} style={styles.image} />,
  },
  {
    id: 2,
    name: "Light Wooden Vase",
    price: 35,
    image: <img alt="Light Wooden Vase" src={imgs[1]} style={styles.image} />,
  },
  {
    id: 3,
    name: "Glass Vase (small)",
    price: 25,
    image: <img alt="Glass Vase (small)" src={imgs[2]} style={styles.image} />,
  },
  {
    id: 4,
    name: "Glass Vase (large)",
    price: 40,
    image: <img alt="babypinkvase" src={imgs[3]} style={styles.image} />,
  },
];

export default Flowers;
