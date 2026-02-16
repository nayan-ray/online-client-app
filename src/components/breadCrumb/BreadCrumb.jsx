import React from 'react'
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  let path = "";
  const crumbs = pathnames.map((item , i)=>{
    path += `/${item}`;
    const isLast = i === pathnames.length -1;
    return isLast ? (
      <span key={path}>{item}</span>
    ) : (
      <span key={path}>
        <Link to={path}>{" " + item}</Link> / 
      </span>
    )

  })

  return (
    <div>
        <span> <Link to = "/">home /</Link></span>
        {crumbs}
    </div>
  )
}

export default BreadCrumb