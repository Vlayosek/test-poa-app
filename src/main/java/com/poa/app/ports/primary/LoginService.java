package com.poa.app.ports.primary;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.poa.app.adapters.secondary.LoginRepositoryImpl;
import com.poa.app.domain.Login;

@Component
public class LoginService {
	
	 @Autowired
    private LoginRepositoryImpl loginRepository;
	 
	 public LoginService () {

	    }
	 
	 public LoginService(LoginRepositoryImpl loginRepository) {
	        this.loginRepository = loginRepository;
	    }
	 
	 
	 public ResponseEntity<Login> createLogin(Login login) {

	    Login loginCreate = loginRepository.login(login);
	    return ResponseEntity.of(Optional.of(loginCreate));

	    }

}
