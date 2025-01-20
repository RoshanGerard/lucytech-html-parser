package controller

import (
	"encoding/json"
	"lucytech/internal/models"
	"lucytech/internal/service"
	"net/http"
)

func GetHTMLContextMetadata(w http.ResponseWriter, r *http.Request) {
	var requestDto = models.HtmlParseRequestDto{}

	if err := json.NewDecoder(r.Body).Decode(&requestDto); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json; charset=utf-8")

	responseDto, code, err := service.ParseHTML(requestDto.Url)

	if err != nil {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(code)
		json.NewEncoder(w).Encode(map[string]string{"error": err.Error()})
		return
	}

	err = json.NewEncoder(w).Encode(responseDto)

	if err != nil {
		return
	}
}
