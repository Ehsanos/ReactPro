import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

export const Body = ({arr}) => {
    var arr1=arr;

   const [itm,setTem]=useState(arr1)

   const remove=()=>{

    setTem(itm=arr1.reverse())


   }
  return (
    <div className = "body" > {
        arr1.map((item,index) => {
                return (

                    <div  key={index} className = "person" >
                    <img className = "avatar"
                    src = "./p1.jpg" alt = "ttt" / >
                    <h6 className = "name" > { item.name } </h6> <h6 className = "name" > { item.time }
                    PM </h6>

                    <Button onClick={remove}>X</Button> </div>)

                })
        }


        </div>
  )
}
