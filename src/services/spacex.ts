import { type response } from '../types/api'
import { type Doc } from '../types/api'

export const getLaunchesById = async ({id}: {id: string}) =>{
  const res = await fetch('https://api.spacexdata.com/v5/launches/'+id)
  const launch = (await res.json()) as Doc
  console.log(launch)
  return launch;
}

export const getLatestLaunches = async () =>{
  const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
  method: 'post',
  headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          data_unix: "asc"
        },
        limit: 12,
      }
    })
  })
  const { docs: launches } = (await res.json()) as response
  return launches;
}

