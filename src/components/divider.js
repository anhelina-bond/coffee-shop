import styled from 'styled-components'

const Divider = styled.div`
    margin: 0 auto;
    margin-top: 15px;    
    position: relative;
    width: 35px;

    &:after{
        content: '';
        position: absolute;
        width: 70px;
        height: 1px;
        background-color: ${props => props.$white ? "#fff" : "#000"};
    
        z-index: 10;
        left: 70px;
        top: 16px;
        
    }
    &:before{
        content: '';
        position: absolute;
        width: 60px;
        height: 2px;
        background-color: ${props => props.$white ? "#fff" : "#000"};
        z-index: 10;
        top: 16px;
        right: 70px;
    }

`; 


export {Divider};