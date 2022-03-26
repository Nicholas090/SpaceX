import {GetInfoInterface, GetCapsulesInterface} from '../types';

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

     _dateRegExp = (date: string) => {
        const reg =  date.match(/\d{4}-[0-9][0-9]-[0-9][0-9]/)
        return reg![0]
     }

        _GetInfo(info: GetInfoInterface) {

            return {
             name: info.name !==  undefined || '' ? info.name: 'Sorry, we dont have any information '   ,
             founder: info.founder  !==  undefined || '' ?  info.founder : 'Sorry, we dont have any information' ,
             founded: info.founded  !==  undefined ?  info.founded : 'Sorry, we dont have any information '    ,
             employees: info.employees  !== undefined ? info.employees : 'Sorry, we dont have any information ' ,
             vehicles: info.vehicles  !==  undefined ? info.vehicles : 'Sorry, we dont have any information' 
         }
    }
         _GetCapsules(info: GetCapsulesInterface) {
             
            return {
                capsule_serial: info.capsule_serial  !== '' || undefined ? info.capsule_serial : 'Sorry, we dont have any information '  ,
                capsule_id: info.capsule_id  !== '' || undefined ? info.capsule_id : 'Sorry, we dont have any information '  ,
                status: info.status  !== '' || undefined ? info.status : 'Sorry, we dont have any information '  ,
                original_launch: info.original_launch  !== '' || undefined ? this._dateRegExp(info.original_launch) : 'Sorry, we dont have any information '  ,
                details: info.details == null || '' ? 'No information ' : info.details
            }
        }

        _GetRockets(info) {
            
            return {
                "stages": 2,
                "boosters": 0,
                "cost_per_launch": 6700000,
                "success_rate_pct": 40,
                "first_flight": "2006-03-24",
                "country": "Republic of the Marshall Islands",
                "height": {
                  "meters": 22.25,
                },
                "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9",
                "rocket_name": "Falcon 9",
            }
        }
    
     
 
}
