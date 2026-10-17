import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    name: "Aditya",
    age: "21",
  };
  const myArr = [1, 2, 3, 4, 5];

  const data = [
    {
      channel: "Bullet",
      btnText: "Ganna",
    },
    {
      channel: "Himanshi",
      btnText: "Java",
    },
    {
      channel: "Adityabuilder",
      btnText: "AI",
    },
  ];

  return (
    <>
      <h1 className="text-red-500 mb-4 items-center justify-center flex bg-green-300 font-semibold p-5 rounded-xl text-4xl">
        Tailwind test
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <Card
          channel="chaiaurcode"
          btnText="DSA"
          someObject={myObj}
          someArr={myArr}
        />
        <Card channel="Adityabuilder" />
        {data.map((item, index) => {
          return (
            <Card key={index} channel={item.channel} btnText={item.btnText} />
          );
        })}
      </div>
    </>
  );
}

export default App;
