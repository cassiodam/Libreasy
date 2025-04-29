import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main class="flex flex-row items-center justify-center min-h-screen text-gray-800">
        <aside class="flex flex-col items-start justify-center w-1/2 p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          voluptatem animi voluptate fuga ipsam voluptatibus enim suscipit quis
          ullam ipsum, cum aliquam ea incidunt repellendus assumenda quo
          doloribus eligendi ducimus.
        </aside>
        <figure>
          <img src="../assets/ilustration-hero.png" alt="aaa" />
        </figure>
      </main>
      <Footer />
    </>
  );
};

export default Home;
