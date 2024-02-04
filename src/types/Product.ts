export  type Product = {
    id: number
    price : number, 
    description: string
    url: string
  }

export type Props = {
    name : string
    idade: number
    endereco: string
    children?: React.ReactNode
}