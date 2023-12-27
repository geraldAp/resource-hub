import axios from "axios"


const H_Url = import.meta.env.VITE_HYGRAPH_API_KEY as string
export const getQuotes = async (): Promise<MotivationalQuote[]> => {

  try {
    const {data} = await axios.post('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clq6sdyjv5luw01uig1td8qix/master', {
      query: ` query MyQuery {
        motivationalQoutes {
          id
          mentorImage {
            url
          }
          mentorName
          qoute
        }
      }`})
    console.log(data.data)
    return data.data.motivationalQoutes
  } catch (error) {
    // console.error('Error:', error.response);
    throw error
  }

}