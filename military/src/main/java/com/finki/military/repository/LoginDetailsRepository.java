package com.finki.military.repository;

import com.finki.military.domain.LoginDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginDetailsRepository extends BaseRepository<LoginDetails, Long> {
}
