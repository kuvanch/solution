import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Chart from '../components/chart/Chart'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const Info = () => {
    let year:string[] = []; 
    let {id}:any = useParams()
    const {data} = useTypedSelector(state => state.data)
    
    const newData = data.filter(item => item.id === Number(id))
    
    const {avatar,name,added,description,roi,investors,asset,current_assets,
        personal_assets,min_deposit,max_deposit,track,fee,allowed_dropdown,max_investors,pnl,history}:IUser = newData[0]
    Object.keys(history).map(item => year.push(item))
        
    const [chartData, setChartData] = useState(history[Number(year[0])])
        
        console.log(chartData);
        
    const onChangeSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setChartData(history[Number(e.target.value)])
    }
    
    interface IUser {
        id?: number;
        avatar: string;
        name: string;
        added: string;
        description: string;
        roi: string;
        investors: number;
        asset: string;
        pnl: string[][];
        current_assets: number;
        personal_assets: number;
        min_deposit: number;
        max_deposit: number;
        track: number;
        fee: number;
        allowed_dropdown: number;
        max_investors: number;
        history: any[];
    }
    
    return (
        <div className='info'>
            <div className="info__body">
                <div className="info__user">
                    <div className="info__avatar">
                        <img src={`https://solution-fund.com${avatar}`} alt="" />
                    </div>
                    <div className="info__name">{name}</div>
                    <div className="info__create">Вступил в команду {added}</div>
                    <div className="info__desc">{description}</div>
                </div>
                <div className="info__static">
                    <div className="info__top">
                        <div className="info__row">
                            <div className="info__roi">Roi <span>{roi}%</span></div>
                            <div className="info__invest">Инвесторы <span>{investors}</span></div>
                        </div>
                    </div>
                    <hr />
                    <div className="info__center">
                        <div className="info__row">
                            <ul className="info__list">
                                <li className="info__item">Активов под управлением <span>{asset} {current_assets}</span></li>
                                <li className="info__item">Собственные активы трейдера<span>{asset} {personal_assets}</span></li>
                                <li className="info__item">Минимальный депозит<span>{asset} {min_deposit}</span></li>
                                <li className="info__item">Максимальный депозит <span>{max_deposit === -1 ? '∞': 'хз'}</span></li>
                            </ul>
                            <ul className="info__list">
                                <li className="info__item">Копирование сделок <span>{track === 1 ? 'Да':'Нет'}</span></li>
                                <li className="info__item">Комиссия с успешных сделок<span>{fee}%</span></li>
                                <li className="info__item">Допустимая просадка<span>{allowed_dropdown}</span></li>
                                <li className="info__item">Максимальное количество инвесторов <span>{max_investors === -1 ? '∞': 'хз'}</span></li>
                            </ul>
                            <ul className="info__pnl">
                                <span>PnL</span>
                                {
                                    pnl.map((item,id) => {
                                        return  <li className="info__pnl-item" key={id}>
                                        <span className="info__text">{item[0]}</span>
                                        <span className="info__number">{item[1]}%</span>
                                    </li>
                                    })
                                }
                               
                            </ul>
                        </div>
                    </div>
                </div>
        
            </div>
            {Object.keys(history).length && <div className="info__chart">
                 <Chart chartData={chartData}/>
                 <div className="info__select">
                     <h3>Выберите год</h3>
                     <select name="select" onChange={onChangeSelect}>
                         {
                             year.map((item,i) => {
                                return <option key={item} value={item}>{item}</option>
                             })
                         }
                     </select>
                 </div>
            </div>        
            }           
        </div>
    )
}
