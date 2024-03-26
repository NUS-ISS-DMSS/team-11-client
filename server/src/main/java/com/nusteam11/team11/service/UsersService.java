package com.nusteam11.team11.service;

import java.util.List;

import com.nusteam11.team11.model.Users;

public interface UsersService {
    public Users saveUsers(Users user);
    public List<Users> getUserByEmailAndPassword(Users user, String email, String password);
}
