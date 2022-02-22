import React from "react";
import {
    CoinBarBox,
    CoinbarContainer,
    CoinBarIconBox,
    CoinBarIconBoxDot,
    CoinBarIconBoxIcon, CoinBarIconBoxProgress,
    CoinBarTextBox
} from "./style";
import axios from "axios";
import btcLogo from "./icons/bitcoin-btc-logo.svg"
import ethLogo from "./icons/ethereum-eth-logo.svg"
import { priceRound } from "../../utils/dataManipulators"

const CoinDataText = ({text, value}) => {
    return (
        <CoinBarTextBox>
            {text} {value}
        </CoinBarTextBox>
    )
}

const CoinDataIcon = ({value, icon, progressValue}) => {
    console.log(Math.floor(progressValue))
    return (
        <CoinBarIconBox>
            {icon ? (
                <CoinBarIconBoxIcon src={icon}/>
            ) : (
                <CoinBarIconBoxDot/>
            )}
            <CoinBarTextBox htmlFor={value}>{String(value).substring(0,2)}</CoinBarTextBox>
            {/*{progressValue && <CoinBarIconBoxProgress val={Math.floor(progressValue)} max={100}/>}*/}
        </CoinBarIconBox>
    )
}


class CoinBar extends React.Component {
    state = {
        isLoading: false,
        hasError: false,
        coinBarData: null,
        currency: this.props.currency,
        texts: [
            {
                title: 'Coins',
                objectKey: 'active_cryptocurrencies'
            },
            {
                title: 'Exchange',
                objectKey: 'markets'
            },
            {
                objectKey: `total_market_cap`
            },
            {
                objectKey: "total_volume",
                progressValue: "market_cap_percentage"
            },
            {
                objectKey: "market_cap_percentage",
                progressValue: "market_cap_percentage",
                progressCurrency: "btc",
                icon: btcLogo
            },
            {
                objectKey: "market_cap_percentage",
                progressValue: "market_cap_percentage",
                progressCurrency: "eth",
                icon: ethLogo
            }
        ],
    }

    getCoinBarData = async () => {
        try {
            this.setState({isLoading: true});

            const {data} = await axios(`${process.env.REACT_APP_API_ENDPOINT}/global`);
            this.setState({coinBarData: data.data, isLoading: false});
        } catch (err) {
            console.log(err)
        }
    }

    getConditionedValue  = (textObject) => {
        return textObject.progressCurrency ?
            this.state.coinBarData[textObject.objectKey][textObject.progressCurrency] :
            this.state.coinBarData[textObject.objectKey][this.props.currency]
    }


    componentDidMount() {
        if (!this.state.coinBarData) {
            this.getCoinBarData();
        }
    }

    render() {
        const {coinBarData, texts, textIcons, currency} = this.state;
        return (
            <CoinbarContainer>
                <CoinBarBox>
                    {coinBarData && (
                        texts.map((text, index) => {
                            if (text.title) {
                               return <CoinDataText key={index} text={text.title} value={coinBarData[text.objectKey]}/>
                            }else {
                                return <CoinDataIcon
                                    key={index}
                                    progressValue={ text.progressCurrency ?
                                        coinBarData[text.objectKey][text.progressCurrency] : null }
                                    value={text.progressCurrency ?
                                        coinBarData[text.objectKey][text.progressCurrency] :
                                        coinBarData[text.objectKey][this.props.currency]}
                                    icon={text.icon} />
                            }
                        })
                    )
                    }
                </CoinBarBox>
            </CoinbarContainer>
        )
    }
}

export default CoinBar