package stipsa.StipsaBackEnd;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import stipsa.StipsaBackEnd.entities.User;
import stipsa.StipsaBackEnd.repositories.UserRepository;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class StipsaBackEndApplication {

	private static final Logger log = LoggerFactory.getLogger(StipsaBackEndApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(StipsaBackEndApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(UserRepository repository) {
		return (args) -> {
			repository.save(new User("jahr", "jahr@me.com", "pass"));
			repository.save(new User("jahr2", "jahr2@me.com", "pass2"));

			log.info("Users found with findAll():");
			log.info("-------------------------------");
			repository.findAll().forEach(user -> {
				log.info(user.toString());
			});
			log.info("");

			// fetch an individual user by ID
			Optional<User> customer = repository.findById(1L);
			log.info("User found with findById(1L):");
			log.info("--------------------------------");
			log.info(customer.toString());
			log.info("");

			// fetch users by username
			log.info("User found with findByUsername('jahr'):");
			log.info("--------------------------------------------");
			repository.findByUsername("jahr").forEach(username -> {
				log.info(username.toString());
			});
			log.info("");
		};
	}

}
