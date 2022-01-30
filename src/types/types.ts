export interface IUser {
   id: 1;
   name: string;
   username: string;
   email: string;
   address: IAddress;
}

export interface IAddress {
   street: string;
   city: string;
   zipcode: string;
}

export interface ITodo {
   id: number;
   title: string;
   completed: boolean;
}