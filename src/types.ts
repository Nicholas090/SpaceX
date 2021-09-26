
export  interface GetInfoInterface  {
    name: string,
    founder: string  ,
    founded: number | string ,
    employees: number | string,
    vehicles: number | string,
    launch_sites?: number,
    test_sites?: number,
    ceo: string,
    cto?: string,
    coo?: string,
    cto_propulsion?:string,
  valuation?: number,
  headquarters?: {
    address?: string,
    city?: string,
    state?: string
  },
  summary?: string
}

export interface GetCapsulesInterface {
  capsule_serial: string,
  capsule_id: string ,
  status: string ,
  original_launch: string,
  original_launch_unix: number ,
  missions: [
    {
      name: string,
      flight: number
    }
  ],
  landings: number,
  type: string,
  details: string,
  reuse_count: number
}

export interface IStartPageState {
  visible: boolean
}
  