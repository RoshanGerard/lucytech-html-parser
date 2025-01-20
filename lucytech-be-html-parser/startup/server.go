package startup

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"log"
	"lucytech/internal/controller"
	"net/http"
)

// CORS middleware function
func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Handle preflight requests
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func handleNotFoundError(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusNotFound)
	json.NewEncoder(w).Encode(map[string]string{"error": "Resource not found"})
}

func Server() {
	r := mux.NewRouter()

	r.HandleFunc("/api/url-info", controller.GetHTMLContextMetadata).Methods("POST")

	r.NotFoundHandler = http.HandlerFunc(handleNotFoundError)

	crsRouter := enableCORS(r)

	log.Fatal(http.ListenAndServe(":8080", crsRouter))
}
