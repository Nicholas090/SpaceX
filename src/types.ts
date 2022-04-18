
export  interface GetInfoInterface  {
    name: string,
    founder: string  ,
    founded: number | string ,
    employees: number | string,
    vehicles: number | string,
    launch_sites?: number,
    test_sites?: number,
    ceo?: string,
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
  original_launch_unix?: number ,
  missions?: [
    {
      name?: string,
      flight?: number
    }
  ],
  landings?: number,
  type?: string,
  details: string,
  reuse_count?: number
}

export interface GetRocketsInterface {
  id?: number,
  active?: boolean,
  stages: number,
  boosters: number,
  cost_per_launch: number,
  success_rate_pct: number,
  first_flight: string,
  country: string,
  company: string,
  height?: {
    meters: number,
    feet: number
  },
  diameter?: {
    meters: number,
    feet: number   
  },
  mass?: {
    kg:number,
    lb: number
  },
  payload_weights?: 
  {
    id: string,
    name: string,
    kg: number, 
    lb: number
  }[],
  first_stage?: {
    reusable: boolean,
    engines: number,
    fuel_amount_tons: number,
    burn_time_sec: number,
    thrust_vacuum: {
      kN: number,
      lbf: number
    }
  },
  second_stage?:{
    engines: number,
    fuel_amount_tons: number,
    burn_time_sec: number,
    thrust_vacuum: {
      kN: number,
      lbf: number
    }
  }
  payloads?: {
    option_1: string,
    option_2: string,
    composite_fairing: {
      height: {
        meters: number,
        feet: number
      }
      diameter: {
        meters: number,
        feet: number
      }
    }
  },
  engines?: {
    number: number,
    type: string,
    version: string,
    layout: string,
    engine_loss_max: number,
    propellant_1: string,
    propellant_2: string,
    thrust_sea_level: {
      kN: number,
      lbf: number
    },
    thrust_vacuum: {
      kN: number,
      lbf: number
    },
    thrust_to_weight: number
    },
    landings_legs?: {
      number: number,
      material: string
    },
    wikipedia: string,
    description?: string,
    rocket_id?: string,
    rocket_name: string,
    rocket_type?: string
  }



export interface IStartPageState {
  visible: boolean
}
  