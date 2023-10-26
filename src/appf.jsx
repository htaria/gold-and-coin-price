import axios from "axios";
import { useEffect, useState } from "react";
import ShowPrices from './compontnts/show-prices';

const App = () => {
    const [prices, setPrices] = useState({});
    useEffect(() => {
        //  function getPrices(){

        // }
        // getPrices();
        setInterval(async () => {
            const response = await axios.get('https://arya.demoio.ir/my-f-apis/GoldCoin.php');
            console.log(response.data.result);
            setPrices(response.data.result);
        }, 1000);

    }, []);
    return (
        <>
            <ShowPrices prices={prices} />
        </>
    );
}

export default App;