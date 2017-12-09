package com.finki.military.repository;

import com.finki.military.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRpository extends JpaRepository<User,Long> {
    Optional<User> findOneById(Long id);
}
