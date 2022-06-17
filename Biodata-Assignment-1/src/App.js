import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Biodata from "./components/Biodata";

function App() {
  return (
    <main>
      <Header />
      <Biodata
        name="Mahir Asief"
        email="asiefmahir1@gmail.com"
        phone="0167-908-908"
        skills={["React", "Node", "Js"]}
        interests={["Web 3", "NFT"]}
        refer="Foyzul Karim"
      />

      < Biodata 
        name = "Saidur Rahman Setu"
        email = "srsetu1@gmail.com"
        phone = "0167-908-908"
        skills = {["React", "Node", "Js", "WP", "PHP"]}
        interests = {["Web 3", "NFT", "Deno"]}
        refer = "Sumit Shaha"
      />
      <Footer />
    </main>
  );
}

export default App;
