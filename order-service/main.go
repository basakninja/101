package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type CheckoutResponse struct {
	OrderID string `json:"orderId"`
	Status  string `json:"status"`
}

func main() {
	http.HandleFunc("/checkout", handleCheckout)
	port := ":7000"
	log.Printf("Order service running on %s", port)
	http.ListenAndServe(port, nil)
}

func handleCheckout(w http.ResponseWriter, r *http.Request) {
	log.Println("Fetching cart items")
	// Call Cart Service here
	log.Println("Calling payment service")
	// Call Payment Service here
	log.Println("Calling shipping service")
	// Call Shipping Service here
	log.Println("Calling notification service")
	// Call Notification Service here

	resp := CheckoutResponse{OrderID: "ORDER123", Status: "confirmed"}
	json.NewEncoder(w).Encode(resp)
}
