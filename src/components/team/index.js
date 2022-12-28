import Collaborator from '../collaborator'
import './team.css'

const Team = (props) => {
    
    if (props.collaborators.length > 0) { 
        return (
            <section className='team' style={{backgroundColor: props.secondaryColor}}> 
                <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
                <div className='collaborators'>
                    {props.collaborators.map(x => <Collaborator key={x.name} name={x.name} office={x.office} image={x.image} backgroundColor={props.primaryColor}/>)}
                </div>
            </section>
        );
    }

    return '';
}

export default Team