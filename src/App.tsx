import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';


function App() {
    return (
        <Header/>
        // <Main/>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;

const StyledAnxiety = styled.div`
  background-color: black;
  padding: 20px;
  border: 1px solid red;
  border-radius: 15px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
`