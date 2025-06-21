package com.fullstack.cardapio.dto;

import com.fullstack.cardapio.entity.Food;

public record FoodResponseDTO(Long id, String title, String image, Integer price) {

    public FoodResponseDTO(Food food) {
        this(food.id)
    }

}
