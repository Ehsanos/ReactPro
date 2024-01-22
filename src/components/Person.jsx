import {Button, Container} from "react-bootstrap";


const Person=()=> {

function clearFunc(){
    console.log('inside Person')
}
    const arr = [
        {id: '1', name: "ahmad1", time: "8", img: '1.jpg'},
        {
            id: '1',
            name: "ahmad",
            time: "9",
            img: '1.jpg'
        }, {id: '1', name: "ahmad2", time: "9", img: '1.jpg'}
        , {id: '1', name: "egr", time: "7", img: '1.jpg'},
        {
            id: '1',
            name: "dgfg",
            time: "17",
            img: '1.jpg'
        }, {id: '1', name: "fgh", time: "2", img: '1.jpg'}]
    console.log(arr.length)
    return (
        < Container className="mt-5  flex-column d-flex align-content-center justify-content-between continar">
            <h3 className="header mx-4">لديك {arr.length} مواعيد</h3>
            <div className="body">
                {arr.map(item=>{
                    return(
                        <div className="person">
                            <img className="avatar" src="./p1.jpg" alt="ttt"/>
                            <h6 className="name">{item.name}</h6>
                            <h6 className="name">{item.time} PM</h6>
                        </div>)

                })}


            </div>
            <div className="buttons">
                <Button>عرض البيانات</Button>
                <Button onClick={clearFunc}>مسح البيانات</Button>
            </div>
        </Container>
    );
}

export default Person