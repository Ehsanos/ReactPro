import React from 'react'
import {Button} from 'react-bootstrap'

export const Actions = ({clear ,fill}) => {
  return (
    <div className = "buttons" >
    <Button onClick={fill}> عرض البيانات </Button>
     <Button onClick={clear}>  مسح البيانات </Button>
    </div>
  )
}
