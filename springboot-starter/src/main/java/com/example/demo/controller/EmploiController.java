import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/emplois")
@Api(value = "Emplois", tags = { "Emplois" })
public class EmploiController {

    @Autowired
    private EmploiService emploiService;

    @ApiOperation(value = "Crée un nouvel emploi")
    @PostMapping
    public Emploi createEmploi(@RequestBody Emploi emploi) {
        return emploiService.saveEmploi(emploi);
    }

    @ApiOperation(value = "Récupère les emplois d'une personne par son ID")
    @GetMapping("/personne/{personneId}")
    public List<Emploi> getEmploisByPersonneId(@PathVariable Long personneId) {
        return emploiService.getEmploisByPersonneId(personneId);
    }

    @ApiOperation(value = "Récupère les emplois par le nom de l'entreprise")
    @GetMapping("/entreprise/{nomEntreprise}")
    public List<Emploi> getEmploisByNomEntreprise(@PathVariable String nomEntreprise) {
        return emploiService.getEmploisByNomEntreprise(nomEntreprise);
    }

    @ApiOperation(value = "Récupère les emplois d'une personne par son ID et entre deux dates")
    @GetMapping("/personne/{personneId}/dates")
    public List<Emploi> getEmploisByPersonneIdAndDateDebutBetween(@PathVariable Long personneId,
                                                                  @RequestParam LocalDate startDate,
                                                                  @RequestParam LocalDate endDate) {
        return emploiService.getEmploisByPersonneIdAndDateDebutBetween(personneId, startDate, endDate);
    }
}
