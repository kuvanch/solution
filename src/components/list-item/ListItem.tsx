import React from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import './ListItem.css'

interface IListItem {
    name: string,
    id: number
}
export const ListItem:FC<IListItem> = ({name,id}) => {
    return (
        <div className='list-item'>
            <div className="list-item__name">{name}</div>
            <Link to={`/traders/${id}`} className="list-item__link">Подробнее</Link>
        </div>
    )
}
