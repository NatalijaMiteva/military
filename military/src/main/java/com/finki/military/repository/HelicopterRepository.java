package com.finki.military.repository;

import com.finki.military.domain.Helicopter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HelicopterRepository extends JpaRepository<Helicopter, Long>{
}
