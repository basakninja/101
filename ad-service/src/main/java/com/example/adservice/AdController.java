package com.example.adservice;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdController {
    private Map<String, String> ads = Map.of(
        "electronics", "Buy one get one free on electronics!",
        "books", "Read more with our book deals!"
    );

    @GetMapping("/ads")
    public String getAd(@RequestParam String category) {
        return ads.getOrDefault(category, "No ads available");
    }
}
