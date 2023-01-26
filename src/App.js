import Card from "./Components/Card"
import './App.css';

const cards = [{
  image: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  alt: "картинка",
  title: "Title",
  text: "Text text"
},
{
  image: "",
  alt: "",
  title: "Some title",
  text: "Soem text"
}]

function App() {
  return (
    <main className="App">
    {cards.map(card => {
      return(
    <Card props={card}/>
      )
    }
  )}
    </main>
  );
}

export default App;
