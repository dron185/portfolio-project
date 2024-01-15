import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>
        </div>
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