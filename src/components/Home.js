import flowershop from "./images/flowershop.jpg";

const styles = {
  text: {
    textAlign: "center",
    fontFamily: "Kunstler Script",
    color: "#404040",
  },
  image: {
    height: "400px",
    width: "1500px",
  },
};

const Home = () => {
  return (
    <div>
      <h1 style={styles.text}>Florescence</h1>
      <p style={styles.text}>Checkout our Fresh Blooms!</p>
      <img alt="flowershop" src={flowershop} style={styles.image} />
    </div>
  );
};

export default Home;
