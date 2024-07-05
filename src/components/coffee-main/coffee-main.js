import { Component } from "react";

import About from "../about/about";
import ProductList from "../product-list/product-list";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../filter/filter";

import './coffee-main.scss';

class CoffeeMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            filter: "all",
            term: '',
        }
    }

    searchProd=(items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch=(term)=> {
        this.setState({term});
    }

    onFilter=(filter) => {
        this.setState({filter});
    } 

    filterProd =(items, filter) => {
        if(filter!=='all' ){
            return items.filter(item => item.country===filter);
        }
        return items;
    }
    

    render() {
        const {products} = this.props;  
        const {filter, term} = this.state;
        const visibleData = this.filterProd(this.searchProd(products, term), filter);
        
        return(
            <main>
                <div className="coffee-about">
                    <div className="coffee-about__wrapper">
                        <img src={require("../../static//img/woman.png")} alt="woman" className="coffee-about__image" />
                        <About
                            title={'About our beans'}
                            text={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/> Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br/> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'}
                        />
                    </div>
                    <div className="coffee-search-panel">
                        <SearchPanel
                            onUpdateSearch={this.onUpdateSearch}/>
                        <Filter
                            filter={filter}
                            onFilter = {this.onFilter}/>
                    </div>
                    <div className="coffee-list">
                        <ProductList
                            products={visibleData}
                            best={false}
                            />
                    </div>
                </div>            
            </main>
        )
    }    
}

export {CoffeeMain};