package stipsa.StipsaBackEnd.repositories;

import org.springframework.data.repository.CrudRepository;

import stipsa.StipsaBackEnd.entities.User;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    List<User> findByUsername(String username);

    List<User> findByEmail(String email);

    Optional<User> findById(Long id); // Corrected return type to Optional<User>

}
