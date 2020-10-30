import React, { useEffect, useState } from 'react';
import DeleteButton from '../DeleteButton';
import LikeButton from '../LikeButton';
import { Container, Card, Wrap, Imagem, Item, Source, Botoes, Contato, Nome, Email, Telefone, Site, Span, WrapGeral } from './styles';
import { Dados } from '../../api/model.gateway';
import { useSettings } from '../../context/useSettings';

const Cards: React.FC = () => {
   const [dados, setDados] = useState<Array<Dados>>(); 
  
   let Settings  = useSettings();
   useEffect(() => {
     setDados(Settings.dados);
   }, [Settings.dados]);
   
   return (
      <>
       <WrapGeral>
      <Container>
         {dados && dados.map((i) => (
            <Card  key= {i.id.toString()}>
               <Wrap>
                  <Imagem>
                     <Item>
                        <Source role="img">
                           <img alt={i.id.toString()} src={`https://avatars.dicebear.com/v2/avataaars/${i.id}.svg?options[mood][]=happy`}></img>
                        </Source>
                     </Item>
                  </Imagem>
                  <Contato>
                     <Nome> {i.name} </Nome>
                     <Email>
                        <Span>
                           <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M5 7v10h14V7H5zm14-2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14z" fillRule="nonzero"></path><path d="M5.498 6.5H3.124c.149.44.399.854.75 1.205l5.882 5.881a3.117 3.117 0 0 0 4.41 0l5.882-5.881c.35-.351.6-.765.749-1.205h-2.373l-5.672 5.672a1.119 1.119 0 0 1-1.583 0L5.498 6.5z"></path></g></svg>
                        </Span>
                        <Span>{i.email}</Span>
                     </Email>
                     <Telefone>
                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M5.467 14.95l2.611-.656s.64-.237.652-.978l-.01-1.212s.038-.471.637-.557c1.768-.327 3.418-.34 5.182 0 .689.131.636.557.636.557l.007.889c.013.74.652.977.652.977l2.593.982c1.227.37 1.868-1.473 1.44-2.574-.991-2.557-3.996-2.994-6.281-3.294-1.085-.143-2.291-.077-3.274 0-1.72.137-5.17.713-6.165 3.27-.427 1.1.093 2.966 1.32 2.596z" fill="silver" fillRule="evenodd"></path></svg>
                        <Span>{i.phone}</Span>
                        
                     </Telefone>
                     <Site>
                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M10.5 16H9a1 1 0 0 1-1-1v-4.946l3.28-3.379.021-.021a1 1 0 0 1 1.414.021L16 10.059V15a1 1 0 0 1-1 1h-1.5v-2.5a1.5 1.5 0 0 0-3 0V16zm7.5-3.936a1 1 0 0 0 1.215-1.564L14.15 5.282a3 3 0 0 0-4.242-.063l-.063.063L4.78 10.5A1 1 0 0 0 6 12.061V15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2.936zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="currentColor" fillRule="evenodd"></path></svg>
                        <Span>{i.website}</Span>
                     </Site>
                  </Contato>
                  
                  <Botoes>
                     <LikeButton user= {i.id} likedy={i.liked ? true : false}/>
                     <DeleteButton user={i.id}/> 
                  </Botoes>
               </Wrap>
            </Card>
        
      ))}
      </Container>
      </WrapGeral>
      
      </>
   )
};

export default Cards;