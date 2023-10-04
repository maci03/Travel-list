const initialItems = [
  {id: 1, description: "Passports", quantity: 2, packed: false},
  {id: 2, description: "Socks", quantity: 12, packed: false},
]

export default function App() {
  return (
    <div className="App">
     <Logo />
     <Form />
     <PackingList />
     <Stats />
    </div>
  )
}

function Logo(){
  return <h1>Far Away</h1>
}

function Form(){

  function handleSubmit(e){
    e.preventDefault();
  }

  return(
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({length: 20},(_ , i) => i + 1).map(
          (num) => (
            <option value={num} kay={num}>
              {num}
            </option>
          ))}
      </select>
      <input type="text" placeholder="item..." />
      <button>Add</button>
    </form>
  )
}

function PackingList(){
  return <ul className='list'>
    {initialItems.map((item) => (
      <item item={item} />
    ))}
  </ul>;
}

function item({item}){
  return <li>
    <span style={item.packed ? {textDecoration: "line-through"} : {}}>
      {item.quantity}{item.description}
    </span>
    <button>X</button>
    </li>
}

function Stats(){
  return <footer className='stats'>
    you have X items on your list, and you already packed x (X%)
  </footer>
}


