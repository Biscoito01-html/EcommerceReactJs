import { Props } from "../types/tyoes"

export const Caixa = ( { name, idade, endereco, children } : Props,  ) => {
    return <>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        margin: '10px'}}>
        <img src="https://picsum.photos/200/300" alt="blabla" />
            {name}
            {idade}
            {endereco}
            {children}
        </div>
    </>


}