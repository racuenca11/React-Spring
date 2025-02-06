package com.example.reservacanchas.model;

public class Cancha {
    private Long id;
    private String nombre;
    private String ubicacion;
    private String horariosDisponibles;

    public Cancha(Long id, String nombre, String ubicacion, String horariosDisponibles) {
        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.horariosDisponibles = horariosDisponibles;
    }

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getUbicacion() { return ubicacion; }
    public void setUbicacion(String ubicacion) { this.ubicacion = ubicacion; }
    public String getHorariosDisponibles() { return horariosDisponibles; }
    public void setHorariosDisponibles(String horariosDisponibles) { this.horariosDisponibles = horariosDisponibles; }
}
