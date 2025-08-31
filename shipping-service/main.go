package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type ShippingRequest struct {
	Address string  `json:"address"`
	Weight  float64 `json:"weight"`
}

type ShippingResponse struct {
	Cost     float64 `json:"cost"`
	Tracking string  `json:"tracking"`
}

func main() {
	http.HandleFunc("/shipping", func(w http.ResponseWriter, r *http.Request) {
		var req ShippingRequest
		json.NewDecoder(r.Body).Decode(&req)
		resp := ShippingResponse{Cost: 5.99, Tracking: "TRACK123"}
		json.NewEncoder(w).Encode(resp)
	})
	port := ":8000"
	log.Printf("Shipping service running on %s", port)
	http.ListenAndServe(port, nil)
}
