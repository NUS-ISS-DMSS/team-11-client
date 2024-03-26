package com.nusteam11.team11.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nusteam11.team11.model.Users;
import com.nusteam11.team11.repository.UsersRepository;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UsersRepository usersRepository;

    @SuppressWarnings("null")

    @Override
    public Users saveUsers(Users user) {
        return usersRepository.save(user);
    }

    @Override
    public List<Users> getUserByEmailAndPassword(Users user, String email, String password) {
        return usersRepository.findByEmailAndPassword(email, password);
    }
}
