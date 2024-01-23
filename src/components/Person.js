import { Button, Container } from "react-bootstrap";
import {arr} from './Data.js'
import {Numbers} from "./Numbers.js";
import {Body} from "./Body.js";
import {Actions} from "./Actions.js";
import {useState} from "react";

const Person = () => {

     const [dataPerson,setData]=useState(arr)

const filldata =()=>{
setData(arr)

}

const empty = () => {
    setData([])
}

        return (
        <Container className = "mt-5  flex-column d-flex align-content-center justify-content-between continar" >
        <Numbers arr={dataPerson}/>
           <Body arr={dataPerson}/>
             <Actions clear={empty} fill={filldata}/>

                </Container>
            );
        }

        export default Person