export const Quadrado  = () => {

    const data = { 
        name: 'Matheus',
        age: 24,
        country: 'Brasil',
        city: 'São Paulo',
        codigopostal :'01001-000',
        formatted: 'Brasil, São Paulo, 01001-000'
    }

    return (
        <div  style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px',
          }} >
            
           <div style={{}} >
           <img src="https://picsum.photos/200/300" alt="qualquer" />
           </div>
           <div  style={{ marginRight: '20px' }}>
               <p>{data.name}</p>
               <p>{data.age}</p>
               <p>{data.country}</p>
               <p>{data.city}</p>
               <p>{data.codigopostal}</p>
            </div>
        </div>
    )
}

 