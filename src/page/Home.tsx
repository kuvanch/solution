import React from 'react'
import { ListItem } from '../components'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const Home = () => {

    const {data,error,isLoading} = useTypedSelector(state => state.data)
    if(isLoading) {
        return <h2>Loading</h2>
    }
    if(error) {
        return <h2>{error}</h2>
    }
    console.log(data)
    return (
        <>
            <div className="list">
                {data.map((item) => {
                    return <ListItem key={item.id} name={item.name} id={item.id}/>
                })}
            </div>
      </>
    )
}
