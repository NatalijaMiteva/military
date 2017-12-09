package com.finki.military.repository;

import com.finki.military.domain.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FirstRepository  extends JpaRepository<Test, Long> {
}
