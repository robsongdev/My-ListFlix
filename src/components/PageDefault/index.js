import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
<<<<<<< HEAD
import styled, { css } from 'styled-components';
=======
import styled,{css} from 'styled-components';
>>>>>>> ec180bcffff187abac85494c8e378184944a8f97

const Main = styled.main`
    background-color: var(--black);
    color:var(--white);
    flex:1;
    padding-top:50px;
    padding-left: 5%;
    padding-right:5%;
<<<<<<< HEAD
    ${({paddingAll}) => css `
        padding: ${paddingAll}
=======
    ${({paddingAll})=> css`
        padding: ${paddingAll};
>>>>>>> ec180bcffff187abac85494c8e378184944a8f97
    `}
`;

function PageDefault({children, paddingAll}){
    return(
        <>
            <Menu />
                <Main paddingAll = {paddingAll}>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default PageDefault