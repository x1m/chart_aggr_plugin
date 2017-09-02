var i,
    EXCHANGE = "BITFINEX:",
    MARKETS = ["BTCUSD", "LTCUSD", "ETHUSD", "XMRUSD", "ZECUSD", "DSHUSD"];

symbols = [];
for (i = 0; i < MARKETS.length; i++) {
  symbols.push(EXCHANGE + MARKETS[i]);
}
