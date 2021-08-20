import React from "react";
import { Dropdown } from "./components/dropdown/Dropdown";

function App() {

  const [selectedItem, setSelectedItem] = React.useState(null)

  return (
    <div className="App">
      {selectedItem && <div>Seu item: {selectedItem}</div>}

      <Dropdown
        title="Selecione um item da lista"
        options={['Mamão', 'Uva', 'Laranja']}
        onSelect={setSelectedItem}
      />
    </div>
  );
}

export default App;
