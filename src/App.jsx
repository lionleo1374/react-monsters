import React, { Component } from 'react';
import { CardList } from 'components/card-list/card-list';
import { SearchBox } from "components/search-box/search-box";
import api from 'api'
import 'App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
    // api.getProducts(products => this.setState({ monsters: products }))
  }

  handleChange = ({ target }) => this.setState({ searchField: target.value })


  render() {
    const { monsters, searchField } = this.state
    const filterMonster = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="my-3 App" >
        <div className="container mx-auto" style={{justifyContent:"center"}}>
          <h1 >Monsters Rolodex</h1>
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          />
        </div>
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}


export default App;




