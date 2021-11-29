import './App.css';

import { Adresse } from './components/profil/Adresse';
import { FullName } from './components/profil/FullName';
import ProfilePhoto from './components/profil/ProfilePhoto';

function App() {
  return (
    <div className="App">
      
     <ProfilePhoto/>
<FullName/>
<Adresse/>
    </div>
  );
}

export default App;
