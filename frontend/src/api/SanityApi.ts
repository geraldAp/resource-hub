import { client } from '../utils/sanity'


export const getPhysicsResources = async (): Promise<Resource[]> => {


    try {
        const data = await client.fetch(` *[_type == "resourceContent"] | order(_createdAt asc) {
        _id,
        name,
        'slug': slug.current,
         'courses': courses[]{
            course_title,
           introduction,
           'resourceSlug':resource->slug.current
          }
          }`)
        console.log(data)
        return data
    } catch (error) {
        throw error
    }



}

export const getBlogs = async (): Promise<Post[]> => {
    try {
        const data = await client.fetch(`*[_type == 'post']{
            _id,
              title,
              mainImage,
              'slug': slug.current,
                 "author": author->name,
          }`)
        console.log(data)
        return data
    } catch (error) {
        throw error
    }

}