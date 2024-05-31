package com.example.demo.service;

import com.example.demo.model.Emploi;
import com.example.demo.repository.EmploiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmploiService {

    @Autowired
    private EmploiRepository emploiRepository;

    public Emploi saveEmploi(Emploi emploi) {
        return emploiRepository.save(emploi);
    }

    public List<Emploi> getEmploisByPersonneId(Long personneId) {
        return emploiRepository.findByPersonneId(personneId);
    }

    public List<Emploi> getEmploisByNomEntreprise(String nomEntreprise) {
        return emploiRepository.findByNomEntreprise(nomEntreprise);
    }

    public List<Emploi> getEmploisByPersonneIdAndDateDebutBetween(Long personneId, LocalDate startDate, LocalDate endDate) {
        return emploiRepository.findByPersonneIdAndDateDebutBetween(personneId, startDate, endDate);
    }
}
