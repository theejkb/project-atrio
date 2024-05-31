package com.example.demo.service;

import com.example.demo.model.Personne;
import com.example.demo.repository.PersonneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;

@Service
public class PersonneService {

    @Autowired
    private PersonneRepository personneRepository;

    public Personne savePersonne(Personne personne) {
        if (Period.between(personne.getDateDeNaissance(), LocalDate.now()).getYears() > 150) {
            throw new IllegalArgumentException("La personne doit avoir moins de 150 ans");
        }
        return personneRepository.save(personne);
    }

    public List<Personne> getAllPersonnes() {
        return personneRepository.findAll();
    }
}
