import React from 'react';
// import { Button, Icon, Popup } from 'semantic-ui-react';
import { Botao, SpanWrap, Span } from './styles';
import { Dados } from '../../api/model.gateway';
import { useSettings } from '../../context/useSettings';

interface InputLike {
	user : number,
	likedy : boolean
}

const LikeButton: React.FC<InputLike> = ({ user, likedy, children }) => {
	let Settings  = useSettings();
	
	const Liked = () => {
		let f : Array<Dados> = Settings.dados.filter((i: Dados) => i);
		for (let i in f) {
			if (f[i].id === user) {
				f[i].liked = !f[i].liked ;
				break;
			}
		};
      Settings.saveSettings(f);
   }
	
   return (
		<Botao title="Like" type="button" tabIndex={0} onClick={Liked}>
			<SpanWrap>
				<Span>
					{likedy ? 
					<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M12.072 17.284l-3.905 2.053a1 1 0 0 1-1.451-1.054l.745-4.349-3.159-3.08a1 1 0 0 1 .554-1.705l4.366-.635 1.953-3.956a1 1 0 0 1 1.794 0l1.952 3.956 4.366.635a1 1 0 0 1 .555 1.705l-3.16 3.08.746 4.349a1 1 0 0 1-1.45 1.054l-3.906-2.053z" fill="currentColor" fillRule="evenodd"></path></svg>
					
					:
					<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M12 16.373l3.98 2.193-.76-4.655 3.276-3.347-4.524-.69L12 5.687l-1.972 4.189-4.524.689L8.78 13.91l-.762 4.655L12 16.373zm0 2.283l-3.016 1.662a2 2 0 0 1-2.939-2.075l.599-3.656-2.57-2.624a2 2 0 0 1 1.129-3.377l3.47-.528 1.518-3.224a2 2 0 0 1 3.618 0l1.519 3.224 3.47.528a2 2 0 0 1 1.127 3.377l-2.569 2.624.599 3.656a2 2 0 0 1-2.94 2.075L12 18.656z" fill="currentColor" ></path></svg>
					}
				</Span>
			</SpanWrap>
		</Botao>
		
	);
   /* // <Button as="div" labelPosition="right" onClick={likePost}>
		// 	<Popup inverted content={liked ? 'Unlike' : 'Like'} trigger={children} >{LikeButton} </Popup>
		// </Button> */
}

export default LikeButton;