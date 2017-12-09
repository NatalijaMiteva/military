package com.finki.military.repository;

import org.springframework.data.repository.NoRepositoryBean;

import java.util.Optional;

/**
 * Created by Miteva on 10-Oct-17.
 */

@NoRepositoryBean
public interface BaseRepository<T, Long> {

    Optional<T> deleteById(Long id);
    void save(T entity);
}
