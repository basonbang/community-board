import './App.css';
import { Flex, Text, Divider } from '@aws-amplify/ui-react';
import Header from './components/Header';
import GymList from './components/GymList';
import gyms from "./gyms.json"


const App = () => {

  return (
    <div className="App">
      <Header />
      <Flex direction="column">
        <Divider />
      </Flex>
      <GymList gyms={gyms} />
    </div>
  );
}

export default App
