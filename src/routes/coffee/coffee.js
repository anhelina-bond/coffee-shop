import {useOutletContext} from "react-router-dom";

import { CoffeeMain } from '../../components/coffee-main/coffee-main';

import './coffee.scss'

const Coffee =() => {
    const [products] = useOutletContext();
    return(
        <>
            <header className='coffee-header'>
                <h1 className="title">Our Coffee</h1>                    
            </header>
            <CoffeeMain
                products={products}/>
        </>
    )
}

export default Coffee;