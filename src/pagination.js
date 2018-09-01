import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageCount: null,
        }
    }

    createPages(){ 
        let pages = [];
        let limitView = 3;
        let truePages = this.props.total / limitView;
    

             for (let i = 1; i < limitView; i++ ) {
                pages.push(<Link to={`/blog/${i}`} onClick={() => this.props.getEntries(i)}>{i}</Link>)
                 console.log('before if: ', pages);
                 }
                if(pages % limitView > 0){
                    truePages++;
                    return pages;
                } 
                console.log(truePages);
                return pages;
    }

    render() {
        return(
            <div className='row'>
                {this.createPages()}
            </div>
        )
    }
}

export default Pagination;


// render() {
//     let li = [];
//     for (let i = 0; i < this.props.total; i++ ) {
//         li.push(<li href="/" onClick={() => this.props.getPost(i+1)}>{i + 1}</li>)
//     }
//     return(
//         <ul>
//             {li}
//         </ul>
//     )
// }

// let total = this.props.total;
//     let pageCount = parseInt(total.length / i);
//     if (total.length % i > 0) {
//       pageCount++;
//     }
//     this.setState({
//       currentPage: startingPage,
//       pageCount: pageCount
//     });

// if(this.props.total % i > 0){
//     pages.push(<Link to={`/blog/${i}`} onClick={() => this.props.getEntries(i+1)}>{i + 1}</Link>)
//     console.log(pages);
// }