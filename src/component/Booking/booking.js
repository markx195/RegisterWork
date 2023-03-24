import React, {useState} from 'react';
import {TimePicker} from "antd";
import data from './booking.json'
import dayjs from 'dayjs';

const format = 'HH:mm';

const RegisterBooking = () => {
    const [listDay, setListDay] = useState(data);
    const toggleRestDay = (day) => {
        let newState = listDay.map(obj => {
            if (obj.id === day.id) {
                return {...obj, restDay: !day.restDay, isDisable: day.restDay};
            }
            return obj;
        });
        setListDay(newState)
    };
    const toggleLunchBreak = (day) => {
        let newState = listDay.map(obj => {
            if (obj.id === day.id) {
                return {...obj, mittagspause: !day.mittagspause};
            }
            return obj;
        });
        setListDay(newState)
    }
    return (<div className="shadow-md rounded-lg">
            {listDay && listDay.map(day => (
                <div className="py-6 px-8 border-b-2 flex items-center justify-center" key={day.id}>
                    <div onClick={() => toggleRestDay(day)} className="inline-grid">
                        <b>{day.name}</b>
                        {day.restDay ? <button className="border p-2 rounded w-24">Rest day + </button> :
                            <button className="bg-green-300 p-2 border rounded w-24">Rest day - </button>}

                    </div>
                    <b className="px-32 w-[500px]">
                        {day.restDay ?
                            <TimePicker.RangePicker placeholder
                                value={[day.endTime ? dayjs(day.startTime, format) : null, day.endTime ? dayjs(day.endTime, format) : null]}
                                format={format}/> :
                            'Closed'}
                    </b>
                    <div onClick={() => toggleLunchBreak(day)}>
                        {day.mittagspause ? <button className=" border rounded border-solid p-2"
                                                    disabled={day.isDisable}>Lunch break + </button> :
                            <button disabled={day.isDisable}
                                    className="border rounded bg-green-300 border-solid p-2">
                                <span className="underline">Lunch break - </span> <br/> 12:00 -13:00</button>}
                    </div>
                </div>))}
        </div>
    )
}
RegisterBooking.propTypes = {}


export default RegisterBooking;
