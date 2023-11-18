import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      {alert == true && (
        <Alert children="Alert Here" onClose={() => setAlert(false)}></Alert>
      )}
      <Button color="primary" onClick={() => setAlert(true)}>
        {"My Button"}
      </Button>
    </div>
  );
}

export default App;
