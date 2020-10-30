import styled from 'styled-components';

export const Botao = styled.button`
    color: rgb(66, 82, 110) !important;
   align-items: baseline;
   border-width: 0px;
   border-radius: 3px;
   box-sizing: border-box;
   display: inline-flex;
   font-style: normal;
   font-weight: 500;
   max-width: 100%;
   position: relative;
   text-align: center;
   text-decoration: none;
   white-space: nowrap;
   background: none;
   transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
   cursor: pointer;
   height: 2.7rem;
   line-height: 2.4rem;
   padding: 0px 2px;
   vertical-align: middle;
   width: 100%;
   -webkit-box-pack: center;
   justify-content: center;
   margin-bottom:1px;

   &:hover {
      background: rgba(9, 30, 66, 0.08);
      text-decoration: none;
      transition-duration: 0s, 0.15s;
      color: rgb(66, 82, 110) !important; 
   }
   &:active {
      background: rgba(179, 212, 255, 0.6);
      transition-duration: 0s, 0s;
      color: rgb(0, 82, 204) !important;
   }
   &:focus{
      background: none;
      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;
      transition-duration: 0s, 0.2s;
      outline: none;
      color: rgb(66, 82, 110) !important;
   }
`;

export const SpanWrap = styled.span`
   transition: opacity 0.3s ease 0s;
   opacity: 1;
   align-self: center;
   display: flex;
   -webkit-box-flex: 0;
   flex-grow: 0;
   flex-shrink: 0;
   line-height: 0;
   font-size: 0px;
   user-select: none;
   margin: 0px 2px;
`;

export const Span = styled.span`
   display: inline-block;
   fill: rgb(255, 255, 255);
   flex-shrink: 0;
   line-height: 1;

    > svg {
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    pointer-events: none;
    vertical-align: bottom;
   }    
`;