package com.example.reservacanchas.controller;

import com.example.reservacanchas.model.Cancha;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CanchaController {
    
    // Endpoint para obtener la lista de canchas (datos estáticos)
    @GetMapping("/api/canchas")
    public List<Cancha> getCanchas() {
        return Arrays.asList(
            new Cancha(1L, "Cancha 1", "Parque Central", "8:00 - 10:00, 14:00 - 16:00"),
            new Cancha(2L, "Cancha 2", "Complejo Deportivo Norte", "10:00 - 12:00, 16:00 - 18:00")
        );
    }
}
