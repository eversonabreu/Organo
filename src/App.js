import './App.css';
import Banner from './components/banner/Banner';
import Form from './components/form';
import { useState } from 'react';
import Team from './components/team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Sciense',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE95F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ];

  const [collaborators, setCollaborator] = useState([]);

  const onSaveCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onSaveCollaborator={collaborator => onSaveCollaborator(collaborator)} teams={teams.map(x => x.name)} />
      {teams.map(team => 
      <Team 
        key={team.name} 
        name={team.name} 
        collaborators={collaborators.filter(x => x.team === team.name)} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
      />)}
    </div>
  );
}

export default App;
