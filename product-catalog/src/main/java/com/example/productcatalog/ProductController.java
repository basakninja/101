package com.example.productcatalog;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    private List<Product> products = List.of(
        new Product(1L, "Laptop", "A powerful laptop", 1000.0),
        new Product(2L, "Phone", "A smartphone", 500.0)
    );

    @GetMapping("/products")
    public List<Product> all() {
        return products;
    }

    @GetMapping("/products/{id}")
    public Product get(@PathVariable Long id) {
        return products.stream()
            .filter(p -> p.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
}
