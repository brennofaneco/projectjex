import React, { FC, ReactNode, createContext, useState, useEffect } from 'react';
import { Dados } from '../api/model.gateway';
import GetDados from './../api';

const queryContext = createContext<any>([]);
const Provider = queryContext.Provider;

export const QueryProvider: FC<{ children: ReactNode, dadosContext?:Array<Dados> }> = ({ children, dadosContext }) => {
	const [dados, setDados] = useState<Array<Dados> | undefined>(); 
	let Dados = GetDados;
	
   useEffect(() => {
		Dados.GetItens().then(r => setDados(Dados.usuarios));
   }, []);

	const saveSettings = (values :Array<Dados>) => {
		setDados(values);
	};

	return <Provider value={{ dados,  saveSettings}}>{children}</Provider>;
};

export const SettingsConsumer = queryContext.Consumer;

export default queryContext;
