import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Price() {
    // Initialize state
    const [coin, setCoin] = useState(null);
    
    const params = useParams();
    console.log(params);

    const apiKey = process.env.REACT_APP_API_KEY;
    const symbol = params.symbol;

    const url=`http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    const getCoin = async () => {
        try {
            const res = await axios.get(url);
            setCoin(res.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getCoin();
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>$ {coin.rate}</h2>
            </div>
        )
    }
    const loading = () => <h1>Loading...</h1>

    return coin && coin.rate ? loaded() : loading();
}

export default Price;