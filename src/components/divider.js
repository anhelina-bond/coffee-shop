import styled from 'styled-components'

const Divider = styled.div`
    margin: 0 auto;
    margin-top: 15px;    
    // background: url('../static/icons/beans-white.png');
    position: relative;
    width: 35px;

    &:after{
        content: '';
        position: absolute;
        width: 70px;
        height: 1px;
        background: #fff;
        z-index: 10;
        left: 70px;
        top: 16px;
        
    }
    &:before{
        content: '';
        position: absolute;
        width: 60px;
        height: 2px;
        background: #fff;
        z-index: 10;
        top: 16px;
        right: 70px;
    }
`



export {Divider};