package org.bit;

import org.bit.model.User;
import org.bit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String...args) throws Exception {
        this.userRepository.save(new User("Ramesh", "Fadatare", "ramesh@gmail.com"));
        this.userRepository.save(new User("Tom", "Cruise", "tom@gmail.com"));
        this.userRepository.save(new User("Tony", "Stark", "tony@gmail.com"));
    }
}
