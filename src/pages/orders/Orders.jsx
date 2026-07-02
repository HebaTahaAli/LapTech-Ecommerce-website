export default function Orders() {

    const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

    return (

        <div className="container" style={{padding:"60px 0"}}>

            <h1>My Orders</h1>

            <br/>

            {

                orders.length===0 ?

                <p>No Orders Yet</p>

                :

                orders.map((order,index)=>(

                    <div key={index}>

                        <h3>Order #{index+1}</h3>

                        <p>Total : ${order.total}</p>

                        <hr/>

                    </div>

                ))

            }

        </div>

    )

}