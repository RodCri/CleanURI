import { useState,useEffect } from "react"

export const CleanUri = () => {

  const [link, setLink] = useState('https://google.com/')
  const [links, setLinks] = useState([])

  useEffect(() => {
    callingAPI()
  }, [])
  

  const callingAPI = async () => {
    const backendUrl = 'https://url-short-api-seven.vercel.app/shorten'
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: link }),
      })
      console.log(response)
      const data = await response.json()
      const updatedLinks = [
        ...links,
        {
          userLink: link,
          shortLink: data.result_url,
        },
      ]
      setLinks(updatedLinks)
      //sessionStorage.setItem('data', JSON.stringify(updatedLinks))
      setLink('')
      console.log(links)
    } catch (error) {
      console.error('Failed to call backend: ', error)
    }
  }


  return (
    <>
      {links.map((ele,index) => <li key={index}>{ele.shortLink}</li>)}
    </>
  )
}
