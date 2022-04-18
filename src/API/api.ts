import {GetInfoInterface, GetCapsulesInterface, GetRocketsInterface} from '../types';

export default class GetService  {
    _apiBase!: string;

    constructor() {
        this._apiBase = 'https://api.spacexdata.com/v3/'
    }

    http = async (request: string): Promise<any> => {
        const res = await fetch(request);
        const body = await res.json();
        return body;
     }
      
     getCompanyInfo = async () => {
      const res = await this.http(`${this._apiBase}info`)
      return this._GetInfo(res)
       
     }

     getAllCapusles = async () => {
         const res = await this.http(`${this._apiBase}capsules`)
         return res.map(this._GetCapsules)
     }

     getOneCapsule = async (id: string) => {
        const res = await this.http(`${this._apiBase}capsules/${id}`)
        console.log(res)
        return this._GetCapsules(res)
     }

     getOneRocket = async (id: string) => {
        const res = await this.http(`${this._apiBase}rockets/${id}`)
        console.log(res)
        return this._GetRockets(res)
     }

     getAllRockets = async () => {
        const res = await this.http(`${this._apiBase}rockets`)
        return res.map(this._GetRockets)
    }

     _dateRegExp = async (date: string) => {
        await date
        const reg = date.match(/\d{4}-[0-9][0-9]-[0-9][0-9]/)
        console.log(reg)
        return reg![0]
     }

        _GetInfo(info: GetInfoInterface) {

            return {
             name: info.name !==  undefined || '' || null ? info.name: 'Sorry, we dont have any information '   ,
             founder: info.founder  !==  undefined || '' || null ?  info.founder : 'Sorry, we dont have any information' ,
             founded: info.founded  !==  undefined || null ?  info.founded : 'Sorry, we dont have any information '    ,
             employees: info.employees  !== undefined || null ? info.employees : 'Sorry, we dont have any information ' ,
             vehicles: info.vehicles  !==  undefined || null ? info.vehicles : 'Sorry, we dont have any information' 
         }
    }
        _GetCapsules(capsule: GetCapsulesInterface) {
            //  this._dateRegExp(info.original_launch)
            return {
                capsule_serial: capsule.capsule_serial  !== '' || undefined || null  ? capsule.capsule_serial : 'Sorry, we dont have any information '  ,
                capsule_id: capsule.capsule_id  !== '' || undefined  || null ? capsule.capsule_id : 'Sorry, we dont have any information '  ,
                status: capsule.status  !== '' || undefined  || null ? capsule.status : 'Sorry, we dont have any information '  ,
                original_launch: capsule.original_launch  !== '' || undefined || null ?  (capsule.original_launch) : 'Sorry, we dont have any information '  ,
                details: capsule.details !== null || '' || undefined ? 'No information ' : capsule.details
            }
        }

        _GetRockets(rocket: GetRocketsInterface) {
            
            return {
                stages:  rocket.stages  !== undefined || null ? rocket.stages : 'Sorry, we dont have any information ',
                boosters:  rocket.boosters  !== undefined || null ? rocket.boosters : 'Sorry, we dont have any information ',
                cost_per_launch:  rocket.cost_per_launch  !== undefined || null ? rocket.cost_per_launch : 'Sorry, we dont have any information ',
                success_rate_pct:  rocket.success_rate_pct  !== undefined || null ? rocket.success_rate_pct : 'Sorry, we dont have any information ',
                first_flight:  rocket.first_flight  !== '' || undefined || null ? rocket.first_flight : 'Sorry, we dont have any information ',
                country: rocket.country  !== '' || undefined || null ? rocket.country : 'Sorry, we dont have any information ',
                company:  rocket.company  !== '' || undefined || null ? rocket.company : 'Sorry, we dont have any information ',
                wikipedia:  rocket.wikipedia  !== '' || undefined || null ? rocket.wikipedia : 'Sorry, we dont have any information ',
                rocket_name:  rocket.rocket_name  !== '' || undefined || null ? rocket.rocket_name : 'Sorry, we dont have any information ',
            }
        }
    
     
 
}

