package com.nusteam11.team11.repository;

import com.nusteam11.team11.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users,Integer>{

}
