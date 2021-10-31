package org.bit.controller;

import java.util.ArrayList;
import java.util.List;

import org.bit.model.Bit;
import org.bit.model.BitRate;
import org.bit.model.Recommendation;
import org.bit.model.User;
import org.bit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("bit")
    public Bit getUsers() {
        Bit bit = new Bit();
        List<BitRate> bitRates = new ArrayList<>();
        BitRate bitBtc = new BitRate("Coinbase", 1010.00, 1011.00, 888.00, 898.00);
        BitRate bitEth = new BitRate("Bitly", 1009.00, 1013.00, 889.00, 899.00);
        Recommendation recommendation = new Recommendation();
        bitRates.add(bitBtc);
        bitRates.add(bitEth);
        bit.setBit_list(bitRates);
        recommendation.buildRecommendation(bitRates);
        bit.setRecommendation(recommendation);
        return bit;
    }

}
