import axios from 'axios';
import { Dados } from './model.gateway';

class GetDados {
   public usuarios :Array<Dados>;

   constructor(){
      this.usuarios = [{
         id: 0,
         name:'',
         website: '',
         phone: '',
         email:''
      }];
   }

   public async GetItens(): Promise<Array<Dados>> {
      await axios.get(`https://jsonplaceholder.typicode.com/users`)
                 .then((r) => {
                    this.usuarios = r.data as Array<Dados>;
                    console.log(r.status, ' - Usuários carregados com sucesso!')
                  })
                 .catch((err) => {
                         console.log(err)
                         });
                         
      return this.usuarios;
   }

   // async GetAvatar( ID : number){
   //    await axios.get(`https://avatars.dicebear.com/v2/avataaars/${ID}.svg?options[mood][]=happy`)
   //               .then(r =>{ 
   //                  this.avatar = r.data
   //                  console.log(r.status, ' - Avatares carregados com sucesso!')
   //                })
   //               .catch((err) => console.log(err));
   // }
}
export default new GetDados();