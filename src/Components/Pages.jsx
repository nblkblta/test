import React, {useEffect, useState} from 'react';
import AquamarineButton from "../UI/AquamarineButton";
import style from '../Styles/AquamarineButton.css'
const Pages = ({postsOnPagesLimit, currentPage, totalPages}) => {
    const [pages, setPages] = useState([])
    const [pagesCount, setPagesCount] = useState(0)
    useEffect(()=>{
        setPagesCount(Math.ceil(totalPages/postsOnPagesLimit))
        let pagesMass = []
        for(let i=0;i<pagesCount;i++){
            pagesMass[i]=i+1
        }
        setPages(pagesMass)

    },[currentPage, postsOnPagesLimit])
    return (
        <div>
            {pages.map((page)=><AquamarineButton className={style.aquaMarineButton} key={page} children={page}/>)}
        </div>
    );
};

export default Pages;