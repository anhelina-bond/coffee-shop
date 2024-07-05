

import './filter.scss'

const Filter = (props) => {
    const buttonsData = [
        {name: 'Brazil', lable: 'Brazil'},
        {name: 'Kenya', lable: 'Kenya'},
        {name: 'Columbia', lable: 'Columbia'},
    ];

    const buttons = buttonsData.map(({name, lable})=> {
        const active = props.filter === name;
        const clazz = active ? 'active' : 'normal';
        return(
            <button 
                className={`filter-btn ${clazz}`}
                type='button'
                key={name}
                onClick={()=> props.onFilter(name)}>
                    {lable}
            </button>
        )
    })

    return(
        <>
            <div className="filter-wrapper">
                    <div className="filter-text">
                        On filter
                    </div>
                    <div className="filter-btns">
                        {buttons}        
                    </div>
            </div>
        </>
        
    )
}

export default Filter;