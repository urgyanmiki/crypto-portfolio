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

const CoinDataText = ({text, value}) => {
    return (
        <CoinBarTextBox>
            {text} {value}
        </CoinBarTextBox>
    )
}

const CoinDataIcon = ({text, icon, progressValue}) => {
    return (
        <CoinBarIconBox>
            {icon ? (
                <CoinBarIconBoxIcon src={icon}/>
            ) : (
                <CoinBarIconBoxDot/>
            )}
            <CoinBarTextBox for={text}>{text}</CoinBarTextBox>
            {progressValue && <CoinBarIconBoxProgress val={Math.floor(progressValue)} max={100}/>}
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
            }
        ],
        textIcons: [
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
        ]
    }

    getCoinBarData = async () => {
        this.setState({isLoading: true});

        const {data} = await axios(`${process.env.REACT_APP_API_ENDPOINT}/global`);
        this.setState({coinBarData: data.data});
        console.log(this.state.coinBarData)
    }

    componentDidMount() {
        if (!this.state.coinBarData) {
            this.getCoinBarData();
        }
    }

    render() {
        const {coinBarData, texts, textIcons, currency} = this.state
        return (
            <CoinbarContainer>
                <CoinBarBox>
                    {coinBarData &&
                    texts.map((text, index) => (
                        <CoinDataText key={index} text={text.title} value={coinBarData[text.objectKey]}/>
                    ))}
                    {coinBarData &&
                    textIcons.map((textIcon, index) => {
                        <CoinDataIcon key={index}
                                      text={coinBarData[textIcon.objectKey][currency]}
                                      icon={textIcon.icon}
                                      progressValue={coinBarData[textIcon.progressValue][textIcon.progressCurrency]}/>
                    })}
                    }
                </CoinBarBox>
            </CoinbarContainer>
        )
    }
}

export default CoinBar