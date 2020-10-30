import styled from 'styled-components';

export const WrapGeral = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
`;

export const Container = styled.div`
   align-items: flex-start;
   display: flex;
   flex-wrap: wrap;
   margin: 0px auto;
   max-width: 100%;
   padding: 0px 20px;
   position: relative;
   /* width: 80%; */
`;

export const Card = styled.div`
    width: 49%;
   background-color: var(--white);
   background-clip: border-box;
   border: 1px solid rgba(0, 0, 0, 0.125);
   border-radius: 0.25rem;
   box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
   overflow: hidden;
   margin-bottom: 20px;
   max-width: calc(25% - 40px);
   min-width: calc(8.33333% - 40px);

   flex: 1 0 calc(25% - 40px);
   margin: 20px 20px;
   overflow-wrap: break-word;
`;

export const Wrap = styled.div`
   display: flex;
   flex-direction: column;
   -webkit-box-pack: center;
   justify-content: center;
   align-items: flex-start;
   border: 1px solid rgb(221, 221, 221);
   /* margin-bottom: 20px; */
`;

export const Imagem = styled.div`
   width: 100%;
   display: flex;
   -webkit-box-pack: center;
   justify-content: center;
   background-color: rgb(221, 221, 221);
`;

export const Item = styled.div`
   display: inline-block;
   position: relative;
   outline: 0px;
`;

export const Source = styled.span`
   height: 128px;
   width: 128px;
   -webkit-box-align: stretch;
   align-items: stretch;
   background-color: rgb(255, 255, 255);
   border-radius: 50%;
   box-sizing: content-box;
   cursor: inherit;
   display: flex;
   flex-direction: column;
   -webkit-box-pack: center;
   justify-content: center;
   outline: none;
   overflow: hidden;
   position: static;
   transform: translateZ(0px);
   transition: transform 200ms ease 0s, opacity 200ms ease 0s;
   box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px;
   border: none;
   margin: 2px;
   padding: 0px;
`;

export const Botoes = styled.div`
   width: 100%;
   height:100%;
   display: flex;
   background-color: rgb(238, 238, 238);
`;

export const Contato = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

export const Nome = styled.h3`
   font-size: 1.8rem;
   line-height: 1.2;
   font-weight: 700;
   letter-spacing: -.008rem;
   color: var(--text);
   margin-bottom:10px;
   margin-top: 0;
   display: flex;
   align-items: center;
   justify-content: flex-start;
`;
export const Email = styled.div`
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   justify-content: flex-start;
`;

export const Span = styled.span`
   display: inline-block;
   fill: rgb(255, 255, 255);
   flex-shrink: 0;
   line-height: 1;
   font-size: 1.43rem;
`;

export const Telefone = styled.div`
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   justify-content: flex-start;   
`;

export const Site = styled.div`
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   justify-content: flex-start;
`;