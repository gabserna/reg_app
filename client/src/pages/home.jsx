import "../styles/GlobalStyles.css";

const mtechImage = '../mtech_building.png';
function Home() {
  return (
    <div>
      <h1>Welcome!!</h1>
      <h1>Registration App - Capstone Project</h1>
      <img id="home_img" src={mtechImage} alt="mtech" />
    </div>
  );
}
export default Home;