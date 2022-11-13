import Head from 'next/head'
import Image from 'next/image'
import Testing from './Testing'


export default function Home({backend}) {

  return (
    <>
   <Testing backend={backend}/>
    </>
  )
}
export async function getStaticProps(){
  const res = await fetch ('http://localhost:8000/api/posts')
  const allDate = await res.json();
  return{
      props:{
          backend:allDate || []
      }
  }
}