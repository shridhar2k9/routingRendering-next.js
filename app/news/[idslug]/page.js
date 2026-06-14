'use client';
import { useParams } from "next/navigation"

const NewsPage = () =>{
    const news = useParams()
    return (
        <>
        <h1>{news.idslug}</h1>
        </>
    )
}

export default NewsPage;