package org.bit.model;

import java.util.List;

public class Recommendation {
    private String btc_buy_source;
    private String btc_sell_source;
    private String eth_buy_source;
    private String eth_sell_source;

    public String getBtc_buy_source() {
        return btc_buy_source;
    }

    public void setBtc_buy_source(String btc_buy_source) {
        this.btc_buy_source = btc_buy_source;
    }

    public String getBtc_sell_source() {
        return btc_sell_source;
    }

    public void setBtc_sell_source(String btc_sell_source) {
        this.btc_sell_source = btc_sell_source;
    }

    public String getEth_buy_source() {
        return eth_buy_source;
    }

    public void setEth_buy_source(String eth_buy_source) {
        this.eth_buy_source = eth_buy_source;
    }

    public String getEth_sell_source() {
        return eth_sell_source;
    }

    public void setEth_sell_source(String eth_sell_source) {
        this.eth_sell_source = eth_sell_source;
    }

    public void buildRecommendation(List<BitRate> bitRates){
        BitRate bitRateSourceOne = bitRates.get(0);
        BitRate bitRateSourceTwo = bitRates.get(1);

        if(bitRateSourceOne.getBtc_buy_price() > bitRateSourceTwo.getBtc_buy_price()){
            this.btc_buy_source = bitRateSourceOne.getSourceName();
        }else{
            this.btc_buy_source = bitRateSourceTwo.getSourceName();
        }

        if(bitRateSourceOne.getBtc_sell_price() > bitRateSourceTwo.getBtc_sell_price()){
            this.btc_sell_source = bitRateSourceOne.getSourceName();
        }else{
            this.btc_sell_source = bitRateSourceTwo.getSourceName();
        }

        if(bitRateSourceOne.getEth_buy_price() > bitRateSourceTwo.getEth_buy_price()){
            this.eth_buy_source = bitRateSourceOne.getSourceName();
        }else{
            this.eth_buy_source = bitRateSourceTwo.getSourceName();
        }

        if(bitRateSourceOne.getEth_sell_price() > bitRateSourceTwo.getEth_sell_price()){
            this.eth_sell_source = bitRateSourceOne.getSourceName();
        }else{
            this.eth_sell_source = bitRateSourceTwo.getSourceName();
        }
    }
}
