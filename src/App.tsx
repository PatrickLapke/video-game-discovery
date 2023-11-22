import Input from "./components/Input";
import FormDropdown from "./components/FormDropdown";

function App() {
  return (
    <>
      <Input type="text" label="Description" id="description"></Input>
      <Input type="number" label="Amount" id="amount"></Input>
      <FormDropdown
        id="inputState"
        label="Category"
        categories={["Groceries", "Utilities", "Entertainment"]}
      ></FormDropdown>
    </>
  );
}

export default App;
