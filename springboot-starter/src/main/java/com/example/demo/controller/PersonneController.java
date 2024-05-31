import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/personnes")
@Api(value = "Personnes", tags = { "Personnes" })
public class PersonneController {

    @Autowired
    private PersonneService personneService;

    @ApiOperation(value = "Ajoute une nouvelle personne")
    @PostMapping
    public Personne createPersonne(@RequestBody Personne personne) {
        return personneService.savePersonne(personne);
    }

    @ApiOperation(value = "Récupère toutes les personnes")
    @GetMapping
    public List<Personne> getAllPersonnes() {
        return personneService.getAllPersonnes();
    }

    @ApiOperation(value = "Récupère une personne par son ID")
    @GetMapping("/{id}")
    public Personne getPersonne(@PathVariable Long id) {
        return personneService.getPersonne(id);
    }
}
