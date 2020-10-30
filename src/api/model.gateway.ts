interface Address {
   street: string,
   suite: string,
   city: string,
   zipcode: string
}

interface Dados {
   id: number,
   name: string,
   email: string,
   address?: Address,
   phone: string,
   website: string,
   dadosContext ?: any,
   liked?: boolean 
}

export type { Dados };