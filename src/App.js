import React, { useState, useMemo } from 'react' 
import styled from "styled-components";
import green from './img/green.jpg'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
//import Income from './Components/Income/Income'
//import Dashboard from './Components/Dashboard/Dashboard';
//import Expenses from './Components/Expenses/Expenses';

function App() {
  const [active, setActive] = useState(1)
  
 
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <AppStyled green={green} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          <h1>Hello</h1>
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.green});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;  
    }
  }
`;
export default App; 
