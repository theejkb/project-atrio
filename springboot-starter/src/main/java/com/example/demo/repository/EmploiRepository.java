package com.example.demo.repository;

import com.example.demo.model.Emploi;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmploiRepository extends JpaRepository<Emploi, Long> {
    List<Emploi> findByPersonneId(Long personneId);
    List<Emploi> findByNomEntreprise(String nomEntreprise);
    List<Emploi> findByPersonneIdAndDateDebutBetween(Long personneId, LocalDate startDate, LocalDate endDate);
}
