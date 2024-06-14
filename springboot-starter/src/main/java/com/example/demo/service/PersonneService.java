package com.example.demo.service;

import com.example.demo.model.Emploi;
import com.example.demo.model.Personne;
import com.example.demo.repository.EmploiRepository;
import com.example.demo.repository.PersonneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PersonneService {

    @Autowired
    private PersonneRepository personneRepository;

    @Autowired
    private EmploiRepository emploiRepository;

    public Personne savePersonne(Personne personne) {
        if (Period.between(personne.getDateDeNaissance(), LocalDate.now()).getYears() > 150) {
            throw new IllegalArgumentException("La personne doit avoir moins de 150 ans");
        }
        return personneRepository.save(personne);
    }

    public List<Personne> getAllPersonnes() {
        List<Personne> personnes = personneRepository.findAllByOrderByNomAsc();
        for (Personne personne : personnes) {
            List<Emploi> emplois = filterPersonneById(personne);
            personne.setEmplois(emplois);
        }
        return personnes;
    }

    public Personne getPersonne(Long id) {
        Personne personne = personneRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Personne non trouvée"));
        List<Emploi> emplois = filterPersonneById(personne);
        personne.setEmplois(emplois);
        return personne;
    }

    private List<Emploi> filterPersonneById(Personne personne) {
        int age = Period.between(personne.getDateDeNaissance(), LocalDate.now()).getYears();
        personne.setAge(age);
        return emploiRepository.findByPersonneId(personne.getId())
            .stream()
            .filter(emploi -> emploi.getDateFin() == null || emploi.getDateFin().isAfter(LocalDate.now()))
            .collect(Collectors.toList());
    }
}
