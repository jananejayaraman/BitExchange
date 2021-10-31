package org.bit.model;

import java.util.ArrayList;
import java.util.List;

public class Bit {
    List<BitRate> bit_list = new ArrayList<>();
    Recommendation recommendation = new Recommendation();

    public List<BitRate> getBit_list() {
        return bit_list;
    }

    public void setBit_list(List<BitRate> bit_list) {
        this.bit_list = bit_list;
    }

    public Recommendation getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(Recommendation recommendation) {
        this.recommendation = recommendation;
    }
}
