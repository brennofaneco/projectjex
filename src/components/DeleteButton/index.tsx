import React from 'react';
// import { Button,  Icon, Confirm } from 'semantic-ui-react';
import { Botao, SpanWrap, Span } from './styles';
import { Dados } from '../../api/model.gateway';
import { useSettings } from '../../context/useSettings';

interface InputDelete {
   user : number
}

const DeleteButton: React.FC<InputDelete> = ({ user, ...rest }) => {
   let dados  = useSettings();

   const DeleteRegistro = () => {
      let f : Array<Dados> = dados.dados.filter((i: Dados) => i.id !== user);
      dados.saveSettings(f);
   }
   
	return (
      <Botao title="Delete" type="button" tabIndex={0}
      onClick={DeleteRegistro}
      >
         <SpanWrap>
            <Span role="presentation">
               <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M5 5a1 1 0 0 0-1 1v1h16V6a1 1 0 0 0-1-1H5zm11.15 15H7.845a1 1 0 0 1-.986-.835L5 8h14l-1.864 11.166a.999.999 0 0 1-.986.834M9 4.5a.5.5 0 0 1 .491-.5h5.018a.5.5 0 0 1 .491.5V5H9v-.5z" fill="currentColor" fillRule="evenodd"></path></svg>
            </Span>
         </SpanWrap>
      </Botao>
	);
};

export default DeleteButton;
