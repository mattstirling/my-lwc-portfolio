import { LightningElement } from 'lwc';
import AlarmCloseAssets from '@salesforce/resourceUrl/AlarmClockAssets';
export default class AlarmClockApp extends LightningElement {
    clockImage = AlarmCloseAssets + '/AlarmClockAssets/clock.png'

    currentTime = '';
    hours = [];
    minutes = [];

    connectedCallback(){
        this.createMinutesOptions();
        this.createHoursOptions();
        this.currentTimeHandler();
        this._interval = setInterval(
            ()=> this.currentTimeHandler()
            ,1000
        );    
    }

    disconnectedCallback(){
        clearInterval(this._interval);
    }                                               


    currentTimeHandler(){
        let dateTime = new Date()
        let hour = dateTime.getHours()
        let min = dateTime.getMinutes()
        let sec = dateTime.getSeconds()
        let ampm = "AM"
        if (hour === 0){
            hour = 12
            ampm = "AM"
        } else if (hour === 12){
            ampm = "PM"
        } else if (hour >= 12){
            hour = hour - 12
            ampm = "PM"
        }   
    
        hour = hour<10 ? "0" + hour : hour
        min = min<10? "0" + min : min
        sec = sec<10? "0" + sec : sec

        this.currentTime = `${hour}:${min}:${sec} ${ampm}`
    
    }

    currentTimeHandler_from_tutorial(){
        setInterval(()=>{
            let dateTime = new Date()
            let hour = dateTime.getHours()
            let min = dateTime.getMinutes()
            let sec = dateTime.getSeconds()
            let ampm = "AM"
            if (hour === 0){
                hour = 12
                ampm = "AM"
            } else if (hour === 12){
                ampm = "PM"
            } else if (hour >= 12){
                hour = hour - 12
                ampm = "PM"
            }   
        
            hour = hour<10 ? "0" + hour : hour
            min = min<10? "0" + min : min
            sec = sec<10? "0" + sec : sec

            this.currentTime = `${hour}:${min}:${sec} ${ampm}`
        },1000)
    }

    createHoursOptions(){
        for(let i=1; i<=12; i++){
            let val = i<10 ? `0${i}` : i
            this.hours.push(val);
        }
    }
    
    createMinutesOptions(){
        for(let i=0; i<=59; i++){
            let val = i<10 ? `0${i}` : i
            this.minutes.push(val);
        }
    }
}