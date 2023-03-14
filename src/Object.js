import { useState } from "react";

const Object = () => {

    let [mtr, setMtr] = useState(
        {
                // Property
                merek : "YAMAHA",
                jenis : "AEROX 155",
                warna : "ABU-ABU",
                bensin : 20,
                harga : 3500000,
                plat  : "AD457754PA",
                status : "OFF",
                
            // Method
            nyalakan : ()=> {
                console.log('nyalakan mesin');
                setMtr( data => {
                    return{
                        ...data,
                        status: 'ON',
                        bensin: data.bensin - 5,
                    }
                })
                console.log(mtr);
            },
            matikan : () => {
                console.log('Matikan Mesin');
                setMtr( data => {
                    return{
                        ...data,
                        status: 'OFF'
                    }
                })
            },
            isibensin : () => {
                setMtr ( data => {
                    return{
                        ...data,
                        bensin: data.bensin + 20                    
                    }
                } )
        }
    }
    )
            
    const motor = {
        // Property
        merek : "YAMAHA",
        jenis : "AEROX 155",
        warna : "ABU-ABU",
        bensin : "PERTALITE",
        harga : 3500000,
        plat  : "AD457754PA",
        status : "OFF",
        
    // Method
    nyalakan : ()=> {
        console.log('nyalakan mesin');
        motor.status = "ON"
        console.log(motor.status);
    }
    
    }

    return (
        <div>
            <h1>Motor </h1>
            <ul>
                <li>Merek : {mtr.merek}</li>
                <li>Type : {mtr.jenis}</li>
                <li>Warna : {mtr.warna}</li>
                <li>bensin : {mtr.bensin} L</li>
                <li>harga : {mtr.harga}</li>
                <li>plat motor : {mtr.plat}</li>
                <li>status : {mtr.status}</li>
            </ul>
            <button onClick={()=> mtr.nyalakan()}>nyalakan mesin</button>
            <button onClick={mtr.matikan}>matikan mesin</button>
            <button onClick={mtr.isibensin}>isi mesin</button>
        </div>

    )
}

export default Object;