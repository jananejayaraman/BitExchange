package org.bit.model;

public class BitRate {
    private String sourceName;
    private Double btc_buy_price;
    private Double btc_sell_price;
    private Double eth_buy_price;
    private Double eth_sell_price;

    public BitRate(String sourceName, Double btc_buy_price, Double btc_sell_price, Double eth_buy_price, Double eth_sell_price) {
        this.sourceName = sourceName;
        this.btc_buy_price = btc_buy_price;
        this.btc_sell_price = btc_sell_price;
        this.eth_buy_price = eth_buy_price;
        this.eth_sell_price = eth_sell_price;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }

    public Double getBtc_buy_price() {
        return btc_buy_price;
    }

    public void setBtc_buy_price(Double btc_buy_price) {
        this.btc_buy_price = btc_buy_price;
    }

    public Double getBtc_sell_price() {
        return btc_sell_price;
    }

    public void setBtc_sell_price(Double btc_sell_price) {
        this.btc_sell_price = btc_sell_price;
    }

    public Double getEth_buy_price() {
        return eth_buy_price;
    }

    public void setEth_buy_price(Double eth_buy_price) {
        this.eth_buy_price = eth_buy_price;
    }

    public Double getEth_sell_price() {
        return eth_sell_price;
    }

    public void setEth_sell_price(Double eth_sell_price) {
        this.eth_sell_price = eth_sell_price;
    }
}
