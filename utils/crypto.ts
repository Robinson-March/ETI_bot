export const paymentOptions: Record<
  string,
  { id: string; symbol: string; address: string }
> = {
  pay_usdt_trc20: {
    id: "tether",
    symbol: "USDT (TRC20)",
    address: "TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3",
  },
  pay_usdt_erc20: {
    id: "tether",
    symbol: "USDT (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_btc: {
    id: "bitcoin",
    symbol: "BTC",
    address: "bc1qz0ltmf0m627fzqynahtxtmdvv8yrkeh620l3lh",
  },
  pay_eth: {
    id: "ethereum",
    symbol: "ETH",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_ltc: {
    id: "litecoin",
    symbol: "LTC",
    address: "ltc1q69p9chl4x39ttmka8n90vaparwq7xxwrn6h0rr",
  },
  pay_doge: {
    id: "dogecoin",
    symbol: "DOGE",
    address: "DPnKhsKzzm2p18e5kDMRUx4FGt1BYcRJji",
  },
  pay_busd_bep20: {
    id: "binance-usd",
    symbol: "BUSD (BEP20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_busd_erc20: {
    id: "binance-usd",
    symbol: "BUSD (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_usdc_erc20: {
    id: "usd-coin",
    symbol: "USDC (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_usdc_trc20: {
    id: "usd-coin",
    symbol: "USDC (TRC20)",
    address: "TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3",
  },
};

// Fetch Crypto Price & Return Payment Details
export const getCryptoPrice = async (
  coinId: string,
  symbol: string,
  address: string,
  amountInUSD: number
) => {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data[coinId] || !data[coinId].usd) {
      throw new Error("Price data unavailable.");
    }

    const usdRate = data[coinId].usd;
    const cryptoAmount = (amountInUSD / usdRate).toFixed(6);

    return `
<b>Subscription Plan:</b> ${amountInUSD === 999 ? "Lifetime" : "Yearly"}  
<b>Price:</b> $${amountInUSD} USD ≈ <u> ${cryptoAmount} ${symbol}  </u>
<b>Wallet Address:</b>  
<code>${address}</code>
    `;
  } catch (error) {
    return `<b>Wallet Address:</b>\n<code>${address}</code>\n\n⚠️ Unable to fetch live price.`;
  }
};
