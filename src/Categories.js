import React, { Component } from 'react';
import GET_CAT from './logic/getCat';
import { Link } from 'react-router-dom';

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
          cat: []
        }
      }
        componentDidMount() {
          GET_CAT()
          .then((categories) => {
            this.setState({
                cat: categories
            })
          })
          
        }
    render(){
        let li = []
        let hash = {}
        for (var x = 0; x<this.state.cat.length;x++) {
            const element = this.state.cat[x]
            if (!hash[element.Category]) {
                li.push(element)
            }
            hash[element.Category] = 1;
        }
         const mapCategory = li.map((cat, i) => {
             if(this.state.cat) {
               return (
                 <Link to={`/category/${cat.Category}`}><li key={i}>{cat.Category}</li></Link>
               )
             }
         })  
         return (
             <section>
                 <h3>category</h3>
                 <ul>
                 {mapCategory}
                 </ul>
             </section>
         )
        
    }
}
export default CategoryList;