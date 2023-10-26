// import { useState } from "react";
import "../styles/show-prices-style.css";

const ShowPrices = ({ prices }) => {
    // const [Prices,setPrices] = useState();
    const thePrices = [ 
        { id: 1, name: "سکه بهار آزادی", value: prices.BaharAzadi, img : './images/baharAzadi.png' },
        { id: 2, name: "سکه امامی", value: prices.Emami, img : './images/Emami.png' },
        { id: 3, name: "سکه گرمی", value: prices.Gerami, img : './images/Gerami.png' },
        { id: 4, name: "طلای 18 عیار", value: prices.Gold18G, img : './images/gold18.png' },
        { id: 5, name: "طلای 24 عیار", value: prices.Gold24G, img : './images/gold24.png' },
        { id: 6, name: "ربع سکه", value: prices.AzadiQuarter, img : './images/Quarter.png' },
        { id: 7, name: "نیم سکه", value: prices.AzadiHalf, img : './images/Half.png', },
    ];
    console.log(`hello`, thePrices);

    return (
        <>
            <section className="prices-section">
                <div className="prices-box p-4 rounded-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center" scope="col">نماد</th>
                                <th className="text-center" scope="col">نام</th>
                                <th className="text-center" scope="col">قیمت</th>
                                <th className="text-center" scope="col">واحد پولی</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thePrices.map((p,i) => (
                                <tr>
                                    <th key={i} scope="row">
                                    <img src={p.img} width='35px' height='35px' alt="" />
                                    </th>
                                    <td>{p.name}</td>
                                    <td>{p.value}</td>
                                    <td>ریال ایران</td>                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );

    // function getPrices () {
  

    // }

}

export default ShowPrices;