import './Second-Sidebar.scss';
import { useEffect, useState } from 'react';
import axios from 'axios'

function getDateFromUnix(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    const formattedDate = `${day}-${month}-${year}`;
  
    return formattedDate;
  }

function SecondSidebar({data}) {
    const [avgHistScore, setAvgHistScore] = useState(0)
    useEffect(()=>{
        if (data !== undefined) {
            let numbers = data["history"].map(hist => {return hist["score"]});
            setAvgHistScore(numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length);
        }
        
    },[data])
    if (data !== undefined)
    return(
        <div className='second-sidebar'>

            <div className='sec-sb-header'>
                <p> <strong> ID:</strong> {data["id"]}</p>
                <p><strong>Тип объекта: </strong>{data["object_type"]}</p>
                <p><strong>ID владельца:</strong> {data["customer_id"]}</p>
                <p><strong>Средняя оценка обслуживания:</strong> {Math.round(avgHistScore * 100) / 10} / 10</p>
            </div>
            <h1>История обслуживания:</h1>
            {data["history"].map(hist => {
                return(
                    <div className={(hist["type"]=="regular") ? 'type-island-regular' : 'type-island-incident'}>
                        <p>Тип работ: {(hist["type"]=="regular" ? "регулярный" : "инцидент")}</p>
                        {hist["type"] != "regular" ? <p>Описание: {hist["description"]}</p> : <></>}
                        <p>ID подрядчика: {hist["assigner_id"]}</p>
                        <p>ID исполнителя: {hist["assignable_id"]}</p>
                        <p>Создано: {getDateFromUnix(hist["created_at"])}</p>
                        <p>Изменено: {getDateFromUnix(hist["updated_at"])}</p>
                        <p>Дедлайн: {getDateFromUnix(hist["deadline_at"])}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SecondSidebar;