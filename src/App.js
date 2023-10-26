import React, { Component } from 'react';
import ShowPrices from './compontnts/show-prices';
import axios from 'axios';
import './styles/style.css';


class App extends Component {
    state = {
        prices: {}
    }

    componentDidMount() {
        // const self = this;
        setInterval(
            async () => {
                const response = await axios.get('https://arya.demoio.ir/my-f-apis/GoldCoin.php');
                console.log(response.data.result);
                this.setState({ prices: response.data.result });
            },
            2000
        );
    }


    render() {
        return (
            <>

                <ShowPrices prices={this.state.prices} />
            </>
        );
    }

}

export default App;

