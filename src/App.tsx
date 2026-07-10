import { GameCanvas } from "@/engine/renderer";
import { UniverseScene } from "@/scene";

function App() {
  return (
    <GameCanvas>
      <UniverseScene />
    </GameCanvas>
  );
}

export default App;