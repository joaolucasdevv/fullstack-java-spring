package com.fullstack.cardapio.repository;

import com.fullstack.cardapio.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {

}
