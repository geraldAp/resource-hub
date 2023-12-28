import { client } from '../utils/sanity'


export const getPhysicsResources = async (): Promise<Resource[]> => {


    try {
        const  data  = await client.fetch(` *[_type == "resourceContent"] | order(_createdAt asc) {
        _id,
        name,
         'courses': courses[]{
            course_title,
           introduction,
          }
          }`)
        console.log(data)
        return data
    } catch (error) {
        throw error
    }



}