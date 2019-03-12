import React from 'react';
import axios from 'axios';

class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            post: [],
        }
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people/2/')
            .then(results => {
                this.setState({post: results.data})
        })
    }
    render() {
        const character = this.state.post
        console.log(character);
        const characterList = character ? 
            (
                <div key={character.birth_year}>
                    <span>Name: {character.name}</span> <br/>
                    <span>height: {character.height}</span> <br/>
                    <span>Skin Color: {character.skin_color}</span> <br/>
                    <span>Hair Color: {character.hair_color}</span> <br/>
                </div>
            )
        : (<p>Loading character...</p>)
        return(
            <div>
                <h2>{characterList}</h2>
            </div>
        )
    }
}

export default Person