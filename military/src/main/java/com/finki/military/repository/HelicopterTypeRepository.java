package com.finki.military.repository;

import com.finki.military.domain.HelicopterTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HelicopterTypeRepository extends JpaRepository<HelicopterTypes, Long> {
}
